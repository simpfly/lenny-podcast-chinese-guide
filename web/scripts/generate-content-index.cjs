const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ROOT_DIR = path.join(__dirname, "..");
const CONTENT_DIR = path.join(ROOT_DIR, "content", "episodes");
const GENERATED_DIR = path.join(ROOT_DIR, "generated");
const OUTPUT_PATH = path.join(GENERATED_DIR, "content-index.json");
const CONSTANTS_PATH = path.join(ROOT_DIR, "lib", "constants.ts");

const EXCLUDED_SLUGS = new Set(["eoy-review"]);

function loadObjectLiteral(source, exportName) {
  const match = source.match(
    new RegExp(`export const ${exportName}[^=]*=\\s*(\\{[\\s\\S]*?\\n\\});`, "m"),
  );

  if (!match) {
    throw new Error(`Unable to parse ${exportName} from constants.ts`);
  }

  return Function(`"use strict"; return (${match[1]});`)();
}

const constantsSource = fs.readFileSync(CONSTANTS_PATH, "utf8");
const canonicalNames = loadObjectLiteral(constantsSource, "canonicalNames");
const toolLinks = loadObjectLiteral(constantsSource, "toolLinks");

function parseActions(markdown) {
  if (!markdown) return [];

  const sections = markdown.split(/###\s+/);
  const categories = [];

  sections.forEach((section) => {
    if (!section.trim()) return;

    const lines = section.split("\n");
    const header = lines[0].trim();
    const contentLines = lines.slice(1);

    let label = "";
    if (header.includes("立即") || header.includes("今天")) label = "今天";
    else if (header.includes("本周")) label = "本周";
    else if (header.includes("深度") || header.includes("深入")) label = "深入";

    if (!label) return;

    const seenIds = new Set();
    const items = [];

    contentLines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed.startsWith("-")) return;

      const cleanText = trimmed.replace(/^-\s*(\[\s*\])?\s*/, "");
      if (!cleanText || cleanText.length <= 2) return;

      let id = Buffer.from(label + cleanText, "utf8").toString("base64").slice(0, 32);
      if (seenIds.has(id)) {
        let suffix = 1;
        while (seenIds.has(`${id}_${suffix}`)) suffix++;
        id = `${id}_${suffix}`;
      }
      seenIds.add(id);

      items.push({
        id,
        text: cleanText,
      });
    });

    if (items.length > 0) {
      categories.push({ label, items });
    }
  });

  return categories;
}

function getGuestName(slug, markdownBody) {
  const titleMatch = markdownBody.match(/^# (.*?) - Lenny's Podcast/m);
  return titleMatch
    ? titleMatch[1]
    : slug
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

function extractSection(markdownBody, heading) {
  const match = markdownBody.match(
    new RegExp(`## ${heading}\\s*([\\s\\S]*?)(?:\\n---|(?:\\n##\\s))`),
  );
  return match ? match[1].trim() : undefined;
}

function collectEpisodeMetadata() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => {
      const fullPath = path.join(CONTENT_DIR, file);
      return fs.statSync(fullPath).isDirectory() && !EXCLUDED_SLUGS.has(file);
    })
    .map((slug) => {
      const analysisPath = path.join(CONTENT_DIR, slug, "analysis.md");
      if (!fs.existsSync(analysisPath)) return null;

      const raw = fs.readFileSync(analysisPath, "utf8");
      const { content } = matter(raw);

      return {
        slug,
        guest: getGuestName(slug, content),
        actions: extractSection(content, "📋 行动建议"),
        resources: extractSection(content, "🛠️ 提到的工具\\/资源"),
      };
    })
    .filter(Boolean);
}

function buildProducts(episodes) {
  const productMap = new Map();

  episodes.forEach((episode) => {
    if (!episode.resources) return;

    const items = episode.resources.split(/\n(?=\*\*)/);

    items.forEach((item) => {
      const headerMatch = item.match(/^\*\*(.*?)\*\*[:：][ \t]*(.*?)(\n|$)/);
      if (!headerMatch) return;

      const typeRaw = headerMatch[1].trim();
      const contentRaw = headerMatch[2].trim();
      const restOfItem = item.replace(headerMatch[0], "").trim();

      let baseCategory = "Resource";
      if (typeRaw.includes("工具")) baseCategory = "Tool";
      if (typeRaw.includes("书") || typeRaw.includes("阅读")) baseCategory = "Book";

      const addProduct = (rawName, description, link) => {
        let name = rawName.replace(/\*\*/g, "").trim();
        name = name.replace(/[:：]\s*$/, "").trim();

        if (name.length < 2) return;
        if (/^(工具类|阅读类|Tools?|Books?|Resources?|推荐阅读|Concepts?|Products?)$/i.test(name)) {
          return;
        }

        const lowerName = name.toLowerCase();
        if (canonicalNames[lowerName]) {
          name = canonicalNames[lowerName];
        }

        const key = name.toLowerCase();
        if (productMap.has(key)) {
          const existing = productMap.get(key);
          if (!existing.mentionedIn.find((ep) => ep.episodeSlug === episode.slug)) {
            existing.mentionedIn.push({
              episodeSlug: episode.slug,
              episodeTitle: episode.guest,
            });
          }
          if (!existing.description && description) {
            existing.description = description;
          }
          return;
        }

        productMap.set(key, {
          name,
          category: baseCategory,
          description,
          link,
          mentionedIn: [
            {
              episodeSlug: episode.slug,
              episodeTitle: episode.guest,
            },
          ],
        });
      };

      const listItems = restOfItem.split(/\n/).filter((line) => line.trim().match(/^[-*]/));

      if (listItems.length > 0 || baseCategory === "Book") {
        if (contentRaw.length > 0 && (contentRaw.includes("《") || contentRaw.includes("》"))) {
          let name = contentRaw;
          let link = "";
          let description = "";

          const linkMatch = name.match(/\[(.*?)\]\((.*?)\)/);
          if (linkMatch) {
            link = linkMatch[2];
            name = name.replace(/\[.*?\]\(.*?\)/g, "").trim();
          }

          const restLines = restOfItem.split("\n");
          const descLine = restLines.find((line) => line.trim().match(/^[-*]\s*说明[:：]/));
          if (descLine) {
            description = descLine.replace(/^[-*]\s*说明[:：]\s*/m, "").trim();
          }

          if (!link) {
            const linkLine = restLines.find((line) => line.trim().match(/^[-*]\s*链接[:：]/));
            if (linkLine) {
              const lineLinkMatch = linkLine.match(/\[(.*?)\]\((.*?)\)/);
              if (lineLinkMatch) {
                link = lineLinkMatch[2];
              }
            }
          }

          description = description.replace(/\[.*?\]\(.*?\)/g, "").replace(/[。.]$/, "").trim();
          addProduct(name, description, link);
        }

        let itemsAddedFromList = 0;
        listItems.forEach((listItem) => {
          const itemMatch = listItem.match(/^[-*]\s*\*\*(.*?)\*\*[:：]?\s*(.*)/);
          if (!itemMatch) return;

          let name = itemMatch[1].trim();
          let description = itemMatch[2].trim();
          let link = "";

          const linkMatch = description.match(/\[(.*?)\]\((.*?)\)/);
          if (linkMatch) {
            link = linkMatch[2];
            description = description.replace(/\[.*?\]\(.*?\)/g, "").trim();
          }

          description = description.replace(/[。.]$/, "").trim();
          addProduct(name, description, link);
          itemsAddedFromList++;
        });

        if (contentRaw.includes("《") || contentRaw.includes("》") || itemsAddedFromList > 0) {
          return;
        }
      }

      const hasHyperlink = contentRaw.includes("[") && contentRaw.includes("](");
      const hasBookMarker = contentRaw.includes("《") || contentRaw.includes("》") || baseCategory === "Book";
      const rawNames = hasHyperlink || hasBookMarker ? [contentRaw] : contentRaw.split(/\s*[\/&|，,]\s*/);

      rawNames.forEach((rawName) => {
        let name = rawName.trim();
        let link = "";

        const inlineLinkMatch = name.match(/^(.+?)(?:\.?\s*\[(?:官网|链接|website|link)\]\((.*?)\))?$/);
        if (inlineLinkMatch && inlineLinkMatch[2]) {
          name = inlineLinkMatch[1].trim();
          link = inlineLinkMatch[2];
        } else {
          const linkMatch = name.match(/^\[(.*?)\]\((.*?)\)$/);
          if (linkMatch) {
            name = linkMatch[1];
            link = linkMatch[2];
          } else {
            name = name
              .replace(/\[(?:官网|链接|website|link)\]\(.*?\)/gi, "")
              .replace(/[\[\]]/g, "")
              .replace(/\(https?:\/\/.*?\)/g, "")
              .replace(/\*\*/g, "");
          }
        }

        name = name
          .replace(/^[-*•:]\s*/, "")
          .replace(/[:：]\s*$/, "")
          .replace(/\.\s*$/, "")
          .replace(/\.(com|io|co|app|dev|ai)$/i, "")
          .replace(/[\u{1F300}-\u{1F9FF}]/gu, "")
          .trim();

        if (name.length < 2) return;
        if (/^(官网|链接|website|link|官方网站)$/i.test(name)) return;

        const lowerName = name.toLowerCase();
        let finalName = name;

        const sortedKeys = Object.keys(canonicalNames).sort((a, b) => b.length - a.length);
        for (const key of sortedKeys) {
          if (lowerName === key || lowerName.includes(key)) {
            finalName = canonicalNames[key];
            break;
          }
        }

        let itemCategory = baseCategory;
        if (finalName.toLowerCase() === "reforge") {
          itemCategory = "Tool";
        }

        let description = "";
        const lines = restOfItem.split("\n");

        const descLine = lines.find((line) => line.trim().match(/^[-*]\s*说明[:：]/));
        if (descLine) {
          description = descLine.replace(/^[-*]\s*说明[:：]\s*/, "").trim();
        } else {
          const firstLine = lines[0]?.trim() || "";
          if (!firstLine.match(/^[-*]/)) {
            description = firstLine;
          }
        }

        if (!link) {
          const linkLine = lines.find((line) => line.trim().match(/^[-*]\s*链接[:：]/));
          if (linkLine) {
            const linkMatch = linkLine.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
              link = linkMatch[2];
            } else {
              const urlMatch = linkLine.match(/https?:\/\/[^\s\)]+/);
              if (urlMatch) link = urlMatch[0];
            }
          }

          if (!link) {
            const descLinkMatch = description.match(/\[(?:官网|链接|website|link|官方网站)\]\((.*?)\)/i);
            if (descLinkMatch) {
              link = descLinkMatch[1];
            } else {
              const urlMatch = description.match(/https?:\/\/[^\s\)]+/);
              if (urlMatch) link = urlMatch[0];
            }
          }
        }

        const normLow = finalName.toLowerCase();
        if (!link && toolLinks[normLow]) link = toolLinks[normLow];

        description = description
          .replace(/^[-*]\s*说明[:：]\s*/m, "")
          .replace(/^[-*]\s*/m, "")
          .replace(/\[(?:官网|链接|website|link|官方网站)\](\(.*\))?/gi, "")
          .replace(/[。.]$/, "")
          .trim();

        const key = finalName.toLowerCase();
        if (productMap.has(key)) {
          const existing = productMap.get(key);
          if (!existing.mentionedIn.find((ep) => ep.episodeSlug === episode.slug)) {
            existing.mentionedIn.push({
              episodeSlug: episode.slug,
              episodeTitle: episode.guest,
            });
          }
          if (!existing.description && description) {
            existing.description = description;
          }
        } else {
          productMap.set(key, {
            name: finalName,
            category: itemCategory,
            description,
            link,
            mentionedIn: [
              {
                episodeSlug: episode.slug,
                episodeTitle: episode.guest,
              },
            ],
          });
        }
      });
    });
  });

  return Array.from(productMap.values()).sort((a, b) => b.mentionedIn.length - a.mentionedIn.length);
}

function buildActionIndex(episodes) {
  const allActions = [];
  let totalActionsCount = 0;
  let completedChecklistItemsCount = 0;

  episodes.forEach((episode) => {
    if (!episode.actions) return;

    const totalItems = episode.actions.match(/-\s*\[[\s/xX]\]/g);
    if (totalItems) totalActionsCount += totalItems.length;

    const checkedItems = episode.actions.match(/-\s*\[[xX]\]/g);
    if (checkedItems) completedChecklistItemsCount += checkedItems.length;

    const categories = parseActions(episode.actions);
    categories.forEach((category) => {
      category.items.forEach((item) => {
        allActions.push({
          id: `${episode.slug}-${item.id}`,
          originalId: item.id,
          text: item.text,
          category: category.label,
          episodeSlug: episode.slug,
          episodeTitle: episode.guest,
        });
      });
    });
  });

  return {
    allActions,
    totalActionsCount,
    completedChecklistItemsCount,
  };
}

function main() {
  const episodes = collectEpisodeMetadata();
  const products = buildProducts(episodes);
  const actions = buildActionIndex(episodes);

  fs.mkdirSync(GENERATED_DIR, { recursive: true });
  fs.writeFileSync(
    OUTPUT_PATH,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        products,
        allActions: actions.allActions,
        totalActionsCount: actions.totalActionsCount,
        completedChecklistItemsCount: actions.completedChecklistItemsCount,
      },
      null,
      2,
    ) + "\n",
  );

  console.log(`Generated content index: ${OUTPUT_PATH}`);
}

main();
