import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { normalizeTopic } from "./topic-mapping";
import { getOfficialDate } from "./episode-date-map";

const CONTENT_DIR = path.join(process.cwd(), "content"); // Inside web/content
const EPISODES_DIR = path.join(CONTENT_DIR, "episodes");
const INDEX_DIR = path.join(CONTENT_DIR, "index");

export type Score = {
  knowledge: string;
  actionable: string;
  business: string;
  roi: string;
  overall: string;
};

export type Episode = {
  slug: string;
  title: string;
  guest: string;
  guestIntro?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  date?: string;
  summary: string;
  topics: string[];
  score?: Score;
  actions?: string;
  resources?: string;
  coreArguments?: string[];
};

export type Category = {
  slug: string;
  title: string;
  episodes: string[];
};

export function getAllCategories(): Category[] {
  if (!fs.existsSync(INDEX_DIR)) return [];

  const files = fs
    .readdirSync(INDEX_DIR)
    .filter((file) => file.endsWith(".md") && file !== "README.md");

  return files.map((file) => {
    const filePath = path.join(INDEX_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: markdownBody } = matter(content);

    // Extract title from first h1
    const titleMatch = markdownBody.match(/^# (.*)$/m);
    const title = titleMatch
      ? titleMatch[1]
      : file
          .replace(".md", "")
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");

    return {
      slug: file.replace(".md", ""),
      title,
      episodes: [], // We should parse the markdown to find links, but for V1 we might skip strict mapping or do regex
    };
  });
}

// Helper to get detailed category data including episode list
export function getCategoryDetail(slug: string): Category | null {
  const filePath = path.join(INDEX_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, "utf8");
  const { content: markdownBody } = matter(content);

  const titleMatch = markdownBody.match(/^# (.*)$/m);
  const title = titleMatch ? titleMatch[1] : slug;

  // Extract links to episodes like [Name](../episodes/slug/)
  const episodeLinks = Array.from(
    markdownBody.matchAll(/\[(.*?)\]\(\.\.\/episodes\/(.*?)\/\)/g),
  );
  
  // Deduplicate episodes using Set
  const episodes = Array.from(new Set(episodeLinks.map((match) => match[2])));

  return {
    slug,
    title,
    episodes,
  };
}

// Helper to get metadata for a single episode without reading all directories
export function getEpisodeMetadata(slug: string): Episode | null {
  const analysisPath = path.join(EPISODES_DIR, slug, "analysis.md");
  if (!fs.existsSync(analysisPath)) return null;

  const content = fs.readFileSync(analysisPath, "utf8");
  const { content: markdownBody } = matter(content);

  // Try to extract Guest Name from first H1
  const titleMatch = markdownBody.match(/^# (.*?) - Lenny's Podcast/m);
  const guest = titleMatch ? titleMatch[1] : slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const title = `${guest} on Lenny's Podcast`;

  // Extract Core Topics
  const coreTopicsMatch = markdownBody.match(/## 🏷️ 核心话题\s*([\s\S]*?)\n---/);
  // ... (previous topic extraction logic kept same, handled by file content replacement context)
  let topics: string[] = [];
  if (coreTopicsMatch) {
      // Match all `tag` content
      const tags = coreTopicsMatch[1].match(/`([^`]+)`/g);
      if (tags) {
          topics = tags.map(t => normalizeTopic(t.replace(/`/g, '')));
      }
  } else {
      // Fallback: Try to find topics from any line starting with backticks (legacy support)
      const topicMatch = markdownBody.match(/^`[^`]+`/m);
      topics = topicMatch
          ? topicMatch[0].replace(/`/g, "").split(" ").filter(Boolean).map(normalizeTopic)
          : [];
  }
    
  // Extract Content Summary (Content Overview)
  const summaryMatch = markdownBody.match(/## 📝 内容概要\s*([\s\S]*?)\n---/);
  const summary = summaryMatch ? summaryMatch[1].trim() : "";



  // Extract Guest Intro (Core Identity ONLY)
  // Robust match: stops at separator (---), next header (##), or end of string
  const guestIntroSection = markdownBody.match(/## 🎤 嘉宾介绍\s*([\s\S]*?)(?:\n---|(?:\n##\s)|$)/);
  let guestIntro = "";
  let twitterUrl: string | undefined;
  let linkedinUrl: string | undefined;

  if (guestIntroSection) {
      const sectionContent = guestIntroSection[1];
      
      // Look for Twitter/X link
      // Matches "Twitter:" or "Twitter/X:" or "Twitter / X:" followed by link
      const twitterMatch = sectionContent.match(/(?:Twitter\/X|Twitter|Twitter \/ X)[:：]\s*\[.*?\]\((.*?)\)/i);
      if (twitterMatch) {
          twitterUrl = twitterMatch[1];
      }

      // Look for LinkedIn link
      const linkedinMatch = sectionContent.match(/LinkedIn[:：]\s*\[.*?\]\((.*?)\)/i);
      if (linkedinMatch) {
          linkedinUrl = linkedinMatch[1];
      }

      // Look for specific identity markers: "核心身份", "身份", "Role", "Core Identity"
      // Matches: - **核心身份**: content OR **核心身份**: content
      const identityMatch = sectionContent.match(/(?:- )?\*\*(?:核心身份|身份|Role|Core Identity)\*\*[:：]\s*(.*)/i);
      
      if (identityMatch) {
          guestIntro = identityMatch[1].trim();
      } else {
          // Fallback: If no explicit tag, look for the first bullet point which often contains the role
          const firstBullet = sectionContent.match(/- (.*)/);
          if (firstBullet) {
               guestIntro = firstBullet[1].trim();
               // Clean up if it starts with bold prompt like **Role**:
               guestIntro = guestIntro.replace(/^\*\*.*?\*\*[:：]\s*/, "");
          }
      }
  }

  // Fallback for summary if explicit section not found (old behavior, just in case)
  const legacySummaryMatch = markdownBody.match(/# .*?\n\n([\s\S]*?)\n/);
  const finalSummary = summary || (legacySummaryMatch ? legacySummaryMatch[1].slice(0, 200) + "..." : "");

  // Extract Scores
  // Robust match for score lines which may be bolded like **Key**: **Value**
  const knowledgeMatch = markdownBody.match(/(?:\*\*)?知识价值(?:\*\*)?[:：]\s*(?:\*\*)?(.*?)(?:\*\*)?\n/);
  const actionableMatch = markdownBody.match(/(?:\*\*)?可执行性(?:\*\*)?[:：]\s*(?:\*\*)?(.*?)(?:\*\*)?\n/);
  const businessMatch = markdownBody.match(/(?:\*\*)?商业潜力(?:\*\*)?[:：]\s*(?:\*\*)?(.*?)(?:\*\*)?\n/);
  const roiMatch = markdownBody.match(/(?:\*\*)?投入产出比(?:\*\*)?[:：]\s*(?:\*\*)?(.*?)(?:\*\*)?\n/);
  
  // Robust Overall Score Parsing
  // Matches "**综合评分**: **9.0/10**" or "综合评分: 9.0/10"
  const overallMatch = markdownBody.match(/(?:\*\*)?综合评分(?:\*\*)?[:：]\s*(?:\*\*)?([\d.]+)\/10(?:\*\*)?/);
  let overallScore = "N/A";
  if (overallMatch) {
       overallScore = overallMatch[1];
  }

  const score: Score | undefined = (knowledgeMatch || overallScore !== "N/A") ? {
      knowledge: knowledgeMatch ? knowledgeMatch[1].trim() : "N/A",
      actionable: actionableMatch ? actionableMatch[1].trim() : "N/A",
      business: businessMatch ? businessMatch[1].trim() : "N/A",
      roi: roiMatch ? roiMatch[1].trim() : "N/A",
      overall: overallScore,
  } : undefined;

  // Extract Date (Generated Time)
  const dateMatch = markdownBody.match(/\*生成时间\*:\s*(\d{4}-\d{2}-\d{2})/);
  let date = dateMatch ? dateMatch[1] : "";
  
  // Try to look up official date
  const officialDate = getOfficialDate(guest, slug);
  if (officialDate) {
      date = officialDate;
  }

  // Extract Action Suggestions
  // Fix: Ensure we stop at a new H2 (## ) or separator (---), but NOT at H3 (###) or other levels.
  const actionsMatch = markdownBody.match(/## 📋 行动建议\s*([\s\S]*?)(?:\n---|(?:\n##\s))/);
  const actions = actionsMatch ? actionsMatch[1].trim() : undefined;

  // Extract Tools/Resources
  const resourcesMatch = markdownBody.match(/## 🛠️ 提到的工具\/资源\s*([\s\S]*?)(?:\n---|(?:\n##\s))/);
  const resources = resourcesMatch ? resourcesMatch[1].trim() : undefined;

  // Extract Core Arguments
  const argumentsMatch = markdownBody.match(/## 💡 核心论点\s*([\s\S]*?)(?:\n---|(?:\n##\s))/);
  let coreArguments: string[] = [];
  if (argumentsMatch) {
      const argsContent = argumentsMatch[1];
      // Match headers like ### 论点一：Title
      const argMatches = argsContent.matchAll(/###\s*.*[:：]\s*(.*)/g);
      for (const match of argMatches) {
          if (match[1]) {
              coreArguments.push(match[1].trim());
          }
      }
      
      // Fallback: if no colon format, just take the header text after ###
      if (coreArguments.length === 0) {
          const simpleMatches = argsContent.matchAll(/###\s*(.*)/g);
           for (const match of simpleMatches) {
              if (match[1]) {
                  coreArguments.push(match[1].trim());
              }
          }
      }
  }

  return {
    slug,
    title,
    guest,
    guestIntro,
    twitterUrl,
    linkedinUrl,
    date,
    summary: finalSummary,
    topics,
    score,
    actions,
    resources,
    coreArguments
  };
}

export function getAllEpisodes(): Episode[] {
  if (!fs.existsSync(EPISODES_DIR)) return [];

  const dirs = fs.readdirSync(EPISODES_DIR).filter((file) => {
    const stats = fs.statSync(path.join(EPISODES_DIR, file));
    return stats.isDirectory();
  });

  return dirs.map((slug) => {
    return getEpisodeMetadata(slug) || {
        slug,
        title: slug,
        guest: slug,
        summary: "",
        topics: [],
    };
  });
}

export function getEpisodeContent(slug: string) {
  const analysisPath = path.join(EPISODES_DIR, slug, "analysis.md");
  if (!fs.existsSync(analysisPath)) return null;

  const content = fs.readFileSync(analysisPath, "utf8");
  return matter(content);
}


export type Product = {
  name: string;
  category?: string; // e.g. "Tool", "Book", "Resource"
  description: string;
  link?: string;
  mentionedIn: Array<{
    episodeSlug: string;
    episodeTitle: string;
  }>;
};

export function getAllProducts(): Product[] {
  const episodes = getAllEpisodes();
  const productMap = new Map<string, Product>();

  // Canonical names for high-frequency tools to ensure perfect deduplication
  const canonicalNames: Record<string, string> = {
    "cursor": "Cursor",
    "windsurf": "Windsurf",
    "chatgpt": "ChatGPT",
    "rewind": "Rewind",
    "replit": "Replit",
    "v0": "v0.dev",
    "linear": "Linear",
    "slack": "Slack",
    "notion": "Notion",
    "figma": "Figma",
    "arc": "Arc Browser",
    "raycast": "Raycast",
    "copilot": "GitHub Copilot",
    "claude": "Claude",
    "perplexity": "Perplexity",
    "coda": "Coda",
    "reforge": "Reforge",
    "miro": "Miro",
  };

  episodes.forEach((episode) => {
    if (!episode.resources) return;

    // Items starting with **Prefix**:
    const items = episode.resources.split(/\n(?=\*\*)/);

    items.forEach(item => {
        const headerMatch = item.match(/^\*\*(.*?)\*\*[:：]\s*(.*?)(\n|$)/);
        if (!headerMatch) return;

        const typeRaw = headerMatch[1].trim(); 
        let contentRaw = headerMatch[2].trim();

        let category = "Resource";
        if (typeRaw.includes("工具")) category = "Tool";
        if (typeRaw.includes("书") || typeRaw.includes("阅读")) category = "Book";

        // SPLIT logic: Handle "Cursor / Windsurf" or "Cursor & Replit"
        // Avoid splitting on slashes that are part of a URL (http://) or inside markdown links
        // Rule: If the raw content contains a hyperlink [Name](url), do NOT split it
        const hasHyperlink = contentRaw.includes("[") && contentRaw.includes("](");
        const rawNames = hasHyperlink ? [contentRaw] : contentRaw.split(/\s*[\/&|，,]\s*/);

        rawNames.forEach(rawName => {
            let name = rawName.trim();
            let link = "";

            // 1. Extract Name/Link from markdown [Name](url)
            // Improved regex to handle cases where the split rawName might be "[Name](url)"
            const linkMatch = name.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
                name = linkMatch[1];
                link = linkMatch[2];
            } else {
                // If not a full link, it might be a partial fragment like "[Name]" or "Name]"
                name = name.replace(/[\[\]]/g, "").replace(/\(https?:\/\/.*?\)/g, "").replace(/\*\*/g, "");
            }

            // 2. Normalization
            name = name.replace(/^[-*•:]\s*/, "") // Strip leading markers and colons
                       .replace(/[:：]\s*$/, "")     // Strip trailing colons
                       .replace(/[\u{1F300}-\u{1F9FF}]/gu, "") // Strip emojis
                       .trim();
            
            // Skip if name is empty or too short
            if (name.length < 2) return;

            // 3. Canonical Mapping
            const lowerName = name.toLowerCase();
            let finalName = name;
            
            // Add specific cases that shouldn't be grouped
            const extendedCanonical = {
                ...canonicalNames,
                "notion calendar": "Notion Calendar",
                "notion calendar/cron": "Notion Calendar"
            };

            const sortedKeys = Object.keys(extendedCanonical).sort((a, b) => b.length - a.length);
            for (const key of sortedKeys) {
                if (lowerName === key || lowerName.includes(key)) {
                    finalName = extendedCanonical[key as keyof typeof extendedCanonical];
                    break;
                }
            }

            // 4. Description Extraction
            let description = item.replace(headerMatch[0], "").trim();

            if (!link) {
                const descLinkMatch = description.match(/\[(?:官网|链接|website|link|官方网站)\]\((.*?)\)/i);
                if (descLinkMatch) {
                    link = descLinkMatch[1];
                } else {
                    const urlMatch = description.match(/https?:\/\/[^\s\)]+/);
                    if (urlMatch) link = urlMatch[0];
                }
            }

            const toolLinks: Record<string, string> = {
                "coda": "https://coda.io/lenny",
                "linear": "https://linear.app/lenny",
                "reforge": "https://www.reforge.com/",
                "miro": "https://miro.com/",
                "figma": "https://www.figma.com/",
                "notion": "https://www.notion.so/",
                "amplitude": "https://amplitude.com/",
                "mixpanel": "https://mixpanel.com/",
                "segment": "https://segment.com/",
                "pendo": "https://www.pendo.io/",
                "statsig": "https://www.statsig.com/",
                "vanta": "https://www.vanta.com/",
                "loom": "https://www.loom.com/",
                "slack": "https://slack.com/",
                "chatgpt": "https://chat.openai.com/",
                "cursor": "https://www.cursor.com/",
                "perplexity": "https://www.perplexity.ai/",
            };

            const normLow = finalName.toLowerCase();
            if (!link && toolLinks[normLow]) link = toolLinks[normLow];
            
            // Clean description
            description = description.replace(/^-\s*说明[:：]\s*/m, "")
                                     .replace(/^-\s*/m, "")
                                     .replace(/\[(?:官网|链接|website|link|官方网站)\](\(.*\))?/gi, "")
                                     .split('\n')[0].trim()
                                     .replace(/[。\.]$/, "").trim();

            const key = finalName.toLowerCase();
            if (productMap.has(key)) {
                const existing = productMap.get(key)!;
                if (!existing.mentionedIn.find(ep => ep.episodeSlug === episode.slug)) {
                    existing.mentionedIn.push({
                        episodeSlug: episode.slug,
                        episodeTitle: episode.guest
                    });
                }
                // Update description if current is missing or existing is placeholder
                if (!existing.description && description) {
                    existing.description = description;
                }
            } else {
                productMap.set(key, {
                    name: finalName,
                    category,
                    description,
                    link,
                    mentionedIn: [{
                        episodeSlug: episode.slug,
                        episodeTitle: episode.guest
                    }]
                });
            }
        });
    });
  });

  return Array.from(productMap.values()).sort((a, b) => b.mentionedIn.length - a.mentionedIn.length);
}


export function getAllChecklistItemsCount(): number {
  const episodes = getAllEpisodes();
  let count = 0;

  episodes.forEach((episode) => {
    if (!episode.actions) return;

    // Count lines starting with - [x] or - [X] (completed items)
    const items = episode.actions.match(/-\s*\[[xX]\]/g);
    if (items) {
      count += items.length;
    }
  });

  return count;
}

/**
 * Get total number of all possible actions ( [ ], [x], [/] )
 */
export function getTotalActionsCount(): number {
    const episodes = getAllEpisodes();
    let count = 0;
  
    episodes.forEach((episode) => {
      if (!episode.actions) return;
      const items = episode.actions.match(/-\s*\[[\s/xX]\]/g);
      if (items) {
        count += items.length;
      }
    });
  
    return count;
}

export function getLatestEpisodes(limit: number = 3): Episode[] {
    const episodes = getAllEpisodes();
    return episodes
        .filter(ep => ep.date) // Only include episodes with a date
        .sort((a, b) => {
            return new Date(b.date!).getTime() - new Date(a.date!).getTime();
        })
        .slice(0, limit);
}


export function getAllTopicsWithCounts(): { topic: string; count: number }[] {
  const episodes = getAllEpisodes();
  const topicCounts: Record<string, number> = {};

  episodes.forEach((episode) => {
    episode.topics.forEach((topic) => {
      topicCounts[topic] = (topicCounts[topic] || 0) + 1;
    });
  });

  return Object.entries(topicCounts)
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count);
}



