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
  const guestIntroSection = markdownBody.match(/## 🎤 嘉宾介绍\s*([\s\S]*?)\n---/);
  let guestIntro = "";
  let twitterUrl: string | undefined;
  let linkedinUrl: string | undefined;

  if (guestIntroSection) {
      const sectionContent = guestIntroSection[1];
      
      // Look for Twitter/X link
      // Matches: - Twitter/X: [@user](https://twitter.com/user)
      const twitterMatch = sectionContent.match(/Twitter\/X:\s*\[.*?\]\((.*?)\)/);
      if (twitterMatch) {
          twitterUrl = twitterMatch[1];
      }

      // Look for LinkedIn link
      // Matches: - LinkedIn: [Name](https://linkedin.com/in/name)
      const linkedinMatch = sectionContent.match(/LinkedIn:\s*\[.*?\]\((.*?)\)/i);
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
    resources
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
