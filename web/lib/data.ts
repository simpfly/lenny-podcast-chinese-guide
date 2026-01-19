import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { normalizeTopic } from "./topic-mapping";
import { getOfficialDate } from "./episode-date-map";
import { parseActions } from "./action-parser";

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
  content?: string;
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
    coreArguments,
    content: markdownBody
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
    "text-to-sql": "Text-to-SQL",
    "statsig": "Statsig",
    "usertesting": "UserTesting",
    "usertesting.com": "UserTesting",
    // Good Strategy Bad Strategy variations
    "good strategy bad strategy": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    "good strategy/bad strategy": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    "good strategy, bad strategy": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    "《好战略，坏战略》(good strategy bad strategy)": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    "《good strategy, bad strategy》": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    "《good strategy bad strategy》": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    "《good strategy/bad strategy》": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    "《good strategy/bad strategy》(richard rumelt)": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    "《good strategy bad strategy》(richard rumelt)": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    "- 《good strategy bad strategy》": "《好战略，坏战略》(Good Strategy Bad Strategy)",
    // High Output Management variations
    "high output management": "《High Output Management》(高产出管理)",
    "《high output management》（高产出管理）": "《High Output Management》(高产出管理)",
    "《high output management》 (安迪·格鲁夫)": "《High Output Management》(高产出管理)",
    "《high output management》 - andy grove": "《High Output Management》(高产出管理)",
    "《high output management》 (andy grove)": "《High Output Management》(高产出管理)",
    "《high output management》 (格鲁夫)": "《High Output Management》(高产出管理)",
    "《high output management》 (高产出管理)": "《High Output Management》(高产出管理)",
    "《high output management》 (andrew grove)": "《High Output Management》(高产出管理)",
    // Scaling People variations
    "scaling people": "《Scaling People》",
    "《scaling people》": "《Scaling People》",
    "《scaling people》 (claire hughes johnson)": "《Scaling People》",
    "《scaling people》 (claire hughes johnson 著)": "《Scaling People》",
    // Innovator's Dilemma variations
    "innovator's dilemma": "《创新者的窘境》(The Innovator's Dilemma)",
    "the innovator's dilemma": "《创新者的窘境》(The Innovator's Dilemma)",
    "《innovator's dilemma》": "《创新者的窘境》(The Innovator's Dilemma)",
    "《the innovator's dilemma》": "《创新者的窘境》(The Innovator's Dilemma)",
    "《the innovator's dilemma》 (创新者的窘境)": "《创新者的窘境》(The Innovator's Dilemma)",
    "《创新者的窘境》(the innovator's dilemma)": "《创新者的窘境》(The Innovator's Dilemma)",
    // Playing to Win variations  
    "playing to win": "《Playing to Win》(赢在战略)",
    "play to win": "《Playing to Win》(赢在战略)",
    "《play to win》": "《Playing to Win》(赢在战略)",
    "《playing to win》": "《Playing to Win》(赢在战略)",
    "《playing to win》(赢在战略)": "《Playing to Win》(赢在战略)",
    "《赢在战略》(playing to win)": "《Playing to Win》(赢在战略)",
    // Culture series variations
    "《the culture》系列": "《Culture》系列 (Iain M. Banks)",
    "《文明》(culture)系列": "《Culture》系列 (Iain M. Banks)",
    "《culture》系列": "《Culture》系列 (Iain M. Banks)",
    // Working Backwards variations
    "working backwards": "《Working Backwards》(逆向工作法)",
    "《working backwards》": "《Working Backwards》(逆向工作法)",
    "《working backwards》（逆向工作法）": "《Working Backwards》(逆向工作法)",
    "《逆向工作法》（working backwards）": "《Working Backwards》(逆向工作法)",
    "《逆向工作法》(working backwards)": "《Working Backwards》(逆向工作法)",
    "\"working backwards: insights, secrets, and methods from inside amazon\" by colin bryar and bill carr": "《Working Backwards》(逆向工作法)",
    // No Rules Rules variations
    "no rules rules": "《No Rules Rules》(不拘一格)",
    "《no rules rules》": "《No Rules Rules》(不拘一格)",
    "《no rules rules》（不拘一格）": "《No Rules Rules》(不拘一格)",
    "《no rules rules》(不拘一格)": "《No Rules Rules》(不拘一格)",
    "《no rules rules》 (reed hastings)": "《No Rules Rules》(不拘一格)",
    // Zero to One variations
    "zero to one": "《从 0 到 1》(Zero to One)",
    "《zero to one》": "《从 0 到 1》(Zero to One)",
    "《zero to one》 (从 0 到 1)": "《从 0 到 1》(Zero to One)",
    "《从 0 到 1》(zero to one)": "《从 0 到 1》(Zero to One)",
    // Crossing the Chasm variations
    "crossing the chasm": "《跨越鸿沟》(Crossing the Chasm)",
    "《crossing the chasm》": "《跨越鸿沟》(Crossing the Chasm)",
    "《crossing the chasm》（跨越鸿沟）": "《跨越鸿沟》(Crossing the Chasm)",
    "《跨越鸿沟》（crossing the chasm）": "《跨越鸿沟》(Crossing the Chasm)",
    // Inspired variations
    "inspired": "《Inspired》(启示录)",
    "《inspired》": "《Inspired》(启示录)",
    "《inspired》(marty cagan)": "《Inspired》(启示录)",
    "《inspired》 (marty cagan)": "《Inspired》(启示录)",
    "《inspired》 - marty cagan": "《Inspired》(启示录)",
    "《inspired》- marty cagan": "《Inspired》(启示录)",
    // Three-Body Problem variations
    "the three-body problem": "《三体》(The Three-Body Problem)",
    "《三体》": "《三体》(The Three-Body Problem)",
    "《三体》(the three-body problem)": "《三体》(The Three-Body Problem)",
    "《三体》 (the three-body problem)": "《三体》(The Three-Body Problem)",
    // The Timeless Way of Building variations
    "the timeless way of building": "《建筑的永恒之道》(The Timeless Way of Building)",
    "《the timeless way of building》": "《建筑的永恒之道》(The Timeless Way of Building)",
    "《the timeless way of building》(christopher alexander)": "《建筑的永恒之道》(The Timeless Way of Building)",
    "《the timeless way of building》（建筑的永恒之道）": "《建筑的永恒之道》(The Timeless Way of Building)",
    "《建筑的永恒之道》 (the timeless way of building)": "《建筑的永恒之道》(The Timeless Way of Building)",
    "《建筑的永恒之道》（the timeless way of building）": "《建筑的永恒之道》(The Timeless Way of Building)",
    "《the timeless way of building》 (christopher alexander)": "《建筑的永恒之道》(The Timeless Way of Building)",
    "the timeless way of building (christopher alexander)": "《建筑的永恒之道》(The Timeless Way of Building)",
    // Build (Tony Fadell) variations
    "build": "《Build》(创造) - Tony Fadell",
    "《build》": "《Build》(创造) - Tony Fadell",
    "《build》 - tony fadell": "《Build》(创造) - Tony Fadell",
    "《build》- tony fadell": "《Build》(创造) - Tony Fadell",
    "《build》 (创造)": "《Build》(创造) - Tony Fadell",
    "《build》(创造)": "《Build》(创造) - Tony Fadell",
    "《build》 (tony fadell)": "《Build》(创造) - Tony Fadell",
    // Connect variations
    "connect": "《Connect》(深度沟通)",
    "《connect》": "《Connect》(深度沟通)",
    "《connect》 (深度沟通)": "《Connect》(深度沟通)",
    "《connect》（深度沟通）": "《Connect》(深度沟通)",
    "《connect》(深度沟通)": "《Connect》(深度沟通)",
    "《connect: building exceptional relationships with family, friends, and colleagues》": "《Connect》(深度沟通)",
    "connect: building exceptional relationships with family, friends, and colleagues": "《Connect》(深度沟通)",
    "《connect》 (carole robin)": "《Connect》(深度沟通)",
    "《connect》(carole robin)": "《Connect》(深度沟通)",
  };

  episodes.forEach((episode) => {
    if (!episode.resources) return;

    // Items starting with **Prefix**:
    const items = episode.resources.split(/\n(?=\*\*)/);

    items.forEach(item => {
        // Regex adjustment: use [ \t]* instead of \s* to avoid consuming newlines after the colon
        const headerMatch = item.match(/^\*\*(.*?)\*\*[:：][ \t]*(.*?)(\n|$)/);
        if (!headerMatch) return;

        const typeRaw = headerMatch[1].trim(); 
        let contentRaw = headerMatch[2].trim();
        const restOfItem = item.replace(headerMatch[0], "").trim();

        let baseCategory = "Resource";
        if (typeRaw.includes("工具")) baseCategory = "Tool";
        if (typeRaw.includes("书") || typeRaw.includes("阅读")) baseCategory = "Book";

        // Helper function to add a product (available to all parsing logic)
        const addBook = (rawName: string, description: string, link: string) => {
            // Clean the name: remove ** markers and trim
            let name = rawName.replace(/\*\*/g, "").trim();
            // Remove trailing punctuation from name
            name = name.replace(/[:：]\s*$/, "").trim();
            
            if (name.length < 2) return;
            // Explicitly block category names if they somehow get parsed
            if (/^(工具类|阅读类|Tools?|Books?|Resources?|推荐阅读|Concepts?|Products?)$/i.test(name)) return;
            
            // Apply canonical names mapping
            const lowerName = name.toLowerCase();
            if (canonicalNames[lowerName]) {
                name = canonicalNames[lowerName];
            }
            
            const key = name.toLowerCase();
            if (productMap.has(key)) {
                const existing = productMap.get(key)!;
                if (!existing.mentionedIn.find(ep => ep.episodeSlug === episode.slug)) {
                    existing.mentionedIn.push({
                        episodeSlug: episode.slug,
                        episodeTitle: episode.guest
                    });
                }
            } else {
                productMap.set(key, {
                    name,
                    category: baseCategory, // Use the dynamic category!
                    description,
                    link,
                    mentionedIn: [{
                        episodeSlug: episode.slug,
                        episodeTitle: episode.guest
                    }]
                });
            }
        };

        // Check if this is a list-style resource section (multiple items starting with - or *)
        // Format: **推荐阅读**:\n- **《书名》**: 描述\n- **《另一本》**: 描述
        const listItems = restOfItem.split(/\n/).filter(line => line.trim().match(/^[-*]/));
        
        // Process list items if available (for both Books and Tools)
        if (listItems.length > 0 || baseCategory === "Book") {
            // 1. Process header content if it contains a book name (Backwards compatibility for Books)
            // Format: **推荐阅读**: **《书名》**   OR   **推荐阅读**: 《书名》
            if (contentRaw.length > 0 && (contentRaw.includes("《") || contentRaw.includes("》"))) {
                let name = contentRaw;
                let link = "";
                let description = "";
                
                // Extract link if present in name
                const linkMatch = name.match(/\[(.*?)\]\((.*?)\)/);
                if (linkMatch) {
                    link = linkMatch[2];
                    name = name.replace(/\[.*?\]\(.*?\)/g, "").trim();
                }
                
                // Get description from "- 说明:" or "* 说明:" line
                const restLines = restOfItem.split('\n');
                const descLine = restLines.find(line => line.trim().match(/^[-*]\s*说明[:：]/));
                if (descLine) {
                    description = descLine.replace(/^[-*]\s*说明[:：]\s*/m, "").trim();
                }
                
                // Get link from "- 链接:" or "* 链接:" line if not found yet
                if (!link) {
                    const linkLine = restLines.find(line => line.trim().match(/^[-*]\s*链接[:：]/));
                    if (linkLine) {
                        const lineLinkMatch = linkLine.match(/\[(.*?)\]\((.*?)\)/);
                        if (lineLinkMatch) {
                            link = lineLinkMatch[2];
                        }
                    }
                }
                
                // Clean description
                description = description.replace(/\[.*?\]\(.*?\)/g, "").replace(/[。\.]$/, "").trim();
                
                addBook(name, description, link);
            }

            // 2. Process each list item
            let itemsAddedFromList = 0;
            listItems.forEach(listItem => {
                // Parse: - **《书名》**: 描述. [Link](url) OR * **Tool Name**: Description
                const itemMatch = listItem.match(/^[-*]\s*\*\*(.*?)\*\*[:：]?\s*(.*)/);
                if (!itemMatch) return;
                
                let name = itemMatch[1].trim();
                let description = itemMatch[2].trim();
                let link = "";
                
                // Extract link from description
                const linkMatch = description.match(/\[(.*?)\]\((.*?)\)/);
                if (linkMatch) {
                    link = linkMatch[2];
                    description = description.replace(/\[.*?\]\(.*?\)/g, "").trim();
                }
                
                // Clean description
                description = description.replace(/[。\.]$/, "").trim();
                
                addBook(name, description, link);
                itemsAddedFromList++;
            });

            // If we processed items via list logic OR it was a Book header processing, 
            // we skip the generic processing to prevent the Header itself from being added as an item.
            // FIX: Only skip if we ACTUALLY added items from the list, or if it looks like a book header container.
            if (contentRaw.includes("《") || contentRaw.includes("》") || itemsAddedFromList > 0) {
                return;
            }
        }



        // Regular single-item processing (original logic)
        // SPLIT logic: Handle "Cursor / Windsurf" or "Cursor & Replit"
        const hasHyperlink = contentRaw.includes("[") && contentRaw.includes("](");
        const hasBookMarker = contentRaw.includes("《") || contentRaw.includes("》") || baseCategory === "Book";
        const rawNames = (hasHyperlink || hasBookMarker) ? [contentRaw] : contentRaw.split(/\s*[\/&|，,]\s*/);

        rawNames.forEach(rawName => {
            let name = rawName.trim();
            let link = "";

            // 1. Extract Name/Link from markdown [Name](url)
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
                    name = name.replace(/\[(?:官网|链接|website|link)\]\(.*?\)/gi, "")
                               .replace(/[\[\]]/g, "")
                               .replace(/\(https?:\/\/.*?\)/g, "")
                               .replace(/\*\*/g, "");
                }
            }

            // 2. Normalization
            name = name.replace(/^[-*•:]\s*/, "")
                       .replace(/[:：]\s*$/, "")
                       .replace(/\.\s*$/, "")
                       .replace(/\.(com|io|co|app|dev|ai)$/i, "")
                       .replace(/[\u{1F300}-\u{1F9FF}]/gu, "")
                       .trim();
            
            if (name.length < 2) return;
            if (/^(官网|链接|website|link|官方网站)$/i.test(name)) return;

            // 3. Canonical Mapping
            const lowerName = name.toLowerCase();
            let finalName = name;
            
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
            let description = "";
            const lines = restOfItem.split('\n');
            
            // First try to find "- 说明:" line (or *)
            const descLine = lines.find(line => line.trim().match(/^[-*]\s*说明[:：]/));
            if (descLine) {
                description = descLine.replace(/^[-*]\s*说明[:：]\s*/, "").trim();
            } else {
                // Fallback to first non-list line
                const firstLine = lines[0]?.trim() || "";
                if (!firstLine.match(/^[-*]/)) {
                    description = firstLine;
                }
            }

            if (!link) {
                // First try to find "- 链接:" line (or *)
                const linkLine = lines.find(line => line.trim().match(/^[-*]\s*链接[:：]/));
                if (linkLine) {
                    const linkMatch = linkLine.match(/\[(.*?)\]\((.*?)\)/);
                    if (linkMatch) {
                        link = linkMatch[2];
                    } else {
                        const urlMatch = linkLine.match(/https?:\/\/[^\s\)]+/);
                        if (urlMatch) link = urlMatch[0];
                    }
                }
                
                // Fallback to description or other methods
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
                "《working backwards》(逆向工作法)": "https://www.amazon.com/Working-Backwards-PB/dp/1529033845",
                "《inspired》(启示录)": "https://www.amazon.com/INSPIRED-Create-Tech-Products-Customers/dp/1119387507",
                "《三体》(the three-body problem)": "https://www.amazon.com/Three-Body-Problem-Cixin-Liu/dp/0765382032",
                "wispr flow": "https://wisprflow.ai/",
                "flow": "https://wisprflow.ai/",
            };

            const normLow = finalName.toLowerCase();
            if (!link && toolLinks[normLow]) link = toolLinks[normLow];
            
            // Clean description
            description = description.replace(/^[-*]\s*说明[:：]\s*/m, "")
                                     .replace(/^[-*]\s*/m, "")
                                     .replace(/\[(?:官网|链接|website|link|官方网站)\](\(.*\))?/gi, "")
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
                if (!existing.description && description) {
                    existing.description = description;
                }
            } else {
                productMap.set(key, {
                    name: finalName,
                    category: baseCategory,
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

export interface ActionContext {
  id: string; 
  originalId: string;
  text: string;
  category: string;
  episodeSlug: string;
  episodeTitle: string;
}

export function getAllActions(): ActionContext[] {
    const episodes = getAllEpisodes();
    const allActions: ActionContext[] = [];

    episodes.forEach(episode => {
        if (!episode.actions) return;
        const categories = parseActions(episode.actions);
        categories.forEach(cat => {
            cat.items.forEach(item => {
                 allActions.push({
                     id: `${episode.slug}-${item.id}`,
                     originalId: item.id,
                     text: item.text,
                     category: cat.label,
                     episodeSlug: episode.slug,
                     episodeTitle: episode.guest
                 });
            });
        });
    });

    return allActions;
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



