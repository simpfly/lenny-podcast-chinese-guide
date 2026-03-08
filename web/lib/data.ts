import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { normalizeTopic } from "./topic-mapping";
import { getOfficialDate } from "./episode-date-map";

const CONTENT_DIR = path.join(process.cwd(), "content"); // Inside web/content
const EPISODES_DIR = path.join(CONTENT_DIR, "episodes");
const INDEX_DIR = path.join(CONTENT_DIR, "index");
const GENERATED_DIR = path.join(process.cwd(), "generated");
const CONTENT_INDEX_PATH = path.join(GENERATED_DIR, "content-index.json");

export type Score = {
  knowledge: string;
  actionable: string;
  business: string;
  roi: string;
  overall: string;
};

export type EpisodeMetadata = {
  slug: string;
  title: string;
  guest: string;
  guestIntro?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  date?: string;
  summary: string;
  topics: string[];
  score?: Score;
  actions?: string;
  resources?: string;
  coreArguments?: string[];
  transcriptUrl?: string;
  transcriptPdfUrl?: string;
};

export type EpisodeDetail = {
  metadata: EpisodeMetadata;
  content: string;
};

export type Episode = EpisodeMetadata;

export type EpisodeSlug = Pick<EpisodeMetadata, "slug">;

export type EpisodeCardData = EpisodeMetadata;

export type SearchEpisode = EpisodeCardData & {
  searchText: string;
};

export type BuilderEpisode = Pick<
  EpisodeMetadata,
  | "slug"
  | "title"
  | "guest"
  | "guestIntro"
  | "summary"
  | "date"
  | "twitterUrl"
  | "linkedinUrl"
  | "websiteUrl"
>;

export type ChecklistEpisode = Pick<
  EpisodeMetadata,
  | "slug"
  | "guest"
  | "guestIntro"
  | "date"
  | "actions"
  | "twitterUrl"
  | "linkedinUrl"
  | "websiteUrl"
>;

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

export const getEpisodeMetadata = cache((slug: string): EpisodeMetadata | null => {
  const analysis = getAnalysisMatter(slug);
  if (!analysis) return null;

  return buildEpisodeMetadata(slug, analysis.content);
});

export const getTranscriptContent = cache((slug: string): string | null => {
  // Try new flattened path first
  const flatPath = path.join(EPISODES_DIR, slug, "transcript.md");
  if (fs.existsSync(flatPath)) {
    return fs.readFileSync(flatPath, "utf8");
  }

  // Fallback to nested path
  const nestedPath = path.join(EPISODES_DIR, slug, "transcripts", "transcript.md");
  if (fs.existsSync(nestedPath)) {
    return fs.readFileSync(nestedPath, "utf8");
  }
  
  return null;
});

// Episodes to exclude from the builders list (non-guest content like compilations)
const EXCLUDED_SLUGS = new Set([
  "eoy-review", // 年终回顾特辑，不是单一嘉宾
]);

const getEpisodeDirs = cache((): string[] => {
  if (!fs.existsSync(EPISODES_DIR)) return [];

  return fs.readdirSync(EPISODES_DIR).filter((file) => {
    const stats = fs.statSync(path.join(EPISODES_DIR, file));
    return stats.isDirectory() && !EXCLUDED_SLUGS.has(file);
  });
});

const getAnalysisMatter = cache((slug: string) => {
  const analysisPath = path.join(EPISODES_DIR, slug, "analysis.md");
  if (!fs.existsSync(analysisPath)) return null;

  const raw = fs.readFileSync(analysisPath, "utf8");
  return matter(raw);
});

function buildEpisodeMetadata(slug: string, markdownBody: string): EpisodeMetadata {
  // Try to extract Guest Name from first H1
  const titleMatch = markdownBody.match(/^# (.*?) - Lenny's Podcast/m);
  const guest = titleMatch ? titleMatch[1] : slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const title = `${guest} on Lenny's Podcast`;

  // Extract Core Topics
  const coreTopicsMatch = markdownBody.match(/## 🏷️ 核心话题\s*([\s\S]*?)\n---/);
  let topics: string[] = [];
  if (coreTopicsMatch) {
      const tags = coreTopicsMatch[1].match(/`([^`]+)`/g);
      if (tags) {
          topics = tags.map(t => normalizeTopic(t.replace(/`/g, '')));
      }
  } else {
      const topicMatch = markdownBody.match(/^`[^`]+`/m);
      topics = topicMatch
          ? topicMatch[0].replace(/`/g, "").split(" ").filter(Boolean).map(normalizeTopic)
          : [];
  }

  const summaryMatch = markdownBody.match(/## 📝 内容概要\s*([\s\S]*?)\n---/);
  const summary = summaryMatch ? summaryMatch[1].trim() : "";

  const guestIntroSection = markdownBody.match(/## 🎤 嘉宾介绍\s*([\s\S]*?)(?:\n---|(?:\n##\s)|$)/);
  let guestIntro = "";
  let twitterUrl: string | undefined;
  let linkedinUrl: string | undefined;
  let websiteUrl: string | undefined;

  if (guestIntroSection) {
      const sectionContent = guestIntroSection[1];

      const twitterMatch = sectionContent.match(/(?:Twitter\/X|Twitter|Twitter \/ X)[:：]\s*\[.*?\]\((.*?)\)/i);
      if (twitterMatch) {
          twitterUrl = twitterMatch[1];
      }

      const linkedinMatch = sectionContent.match(/LinkedIn[:：]\s*\[.*?\]\((.*?)\)/i);
      if (linkedinMatch) {
          linkedinUrl = linkedinMatch[1];
      }

      const websiteMatch = sectionContent.match(/(?:个人网站(?:\/[^\s:：]+)?|Website|Blog|个人博客|Homepage(?:\/[^\s:：]+)?)[:：]\s*\[.*?\]\((.*?)\)/i);
      if (websiteMatch) {
          websiteUrl = websiteMatch[1];
      }

      const identityMatch = sectionContent.match(/(?:- )?\*\*(?:核心身份|身份|Role|Core Identity)\*\*[:：]\s*(.*)/i);

      if (identityMatch) {
          guestIntro = identityMatch[1].trim();
      } else {
          const firstBullet = sectionContent.match(/- (.*)/);
          if (firstBullet) {
               guestIntro = firstBullet[1].trim();
               guestIntro = guestIntro.replace(/^\*\*.*?\*\*[:：]\s*/, "");
          }
      }
  }

  const legacySummaryMatch = markdownBody.match(/# .*?\n\n([\s\S]*?)\n/);
  const finalSummary = summary || (legacySummaryMatch ? legacySummaryMatch[1].slice(0, 200) + "..." : "");

  const knowledgeMatch = markdownBody.match(/(?:\*\*)?知识价值(?:\*\*)?[:：]\s*(?:\*\*)?(.*?)(?:\*\*)?\n/);
  const actionableMatch = markdownBody.match(/(?:\*\*)?可执行性(?:\*\*)?[:：]\s*(?:\*\*)?(.*?)(?:\*\*)?\n/);
  const businessMatch = markdownBody.match(/(?:\*\*)?商业潜力(?:\*\*)?[:：]\s*(?:\*\*)?(.*?)(?:\*\*)?\n/);
  const roiMatch = markdownBody.match(/(?:\*\*)?投入产出比(?:\*\*)?[:：]\s*(?:\*\*)?(.*?)(?:\*\*)?\n/);
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

  const dateMatch = markdownBody.match(/\*生成时间\*:\s*(\d{4}-\d{2}-\d{2})/);
  let date = dateMatch ? dateMatch[1] : "";

  const officialDate = getOfficialDate(guest, slug);
  if (officialDate) {
      date = officialDate;
  }

  const actionsMatch = markdownBody.match(/## 📋 行动建议\s*([\s\S]*?)(?:\n---|(?:\n##\s))/);
  const actions = actionsMatch ? actionsMatch[1].trim() : undefined;

  const resourcesMatch = markdownBody.match(/## 🛠️ 提到的工具\/资源\s*([\s\S]*?)(?:\n---|(?:\n##\s))/);
  const resources = resourcesMatch ? resourcesMatch[1].trim() : undefined;

  const argumentsMatch = markdownBody.match(/## 💡 核心论点\s*([\s\S]*?)(?:\n---|(?:\n##\s))/);
  let coreArguments: string[] = [];
  if (argumentsMatch) {
      const argsContent = argumentsMatch[1];
      const argMatches = argsContent.matchAll(/###\s*.*[:：]\s*(.*)/g);
      for (const match of argMatches) {
          if (match[1]) {
              coreArguments.push(match[1].trim());
          }
      }

      if (coreArguments.length === 0) {
          const simpleMatches = argsContent.matchAll(/###\s*(.*)/g);
           for (const match of simpleMatches) {
              if (match[1]) {
                  coreArguments.push(match[1].trim());
              }
          }
      }
  }

  let transcriptMdPath = path.join(EPISODES_DIR, slug, "transcript.md");
  let hasTranscriptMd = fs.existsSync(transcriptMdPath);

  if (!hasTranscriptMd) {
    transcriptMdPath = path.join(EPISODES_DIR, slug, "transcripts", "transcript.md");
    hasTranscriptMd = fs.existsSync(transcriptMdPath);
  }

  const transcriptPdfUrl = `/pdf-bilingual/${slug}.pdf`;
  const transcriptUrl = hasTranscriptMd ? `/episodes/${slug}/transcript` : undefined;

  return {
    slug,
    title,
    guest,
    guestIntro,
    twitterUrl,
    linkedinUrl,
    websiteUrl,
    date,
    summary: finalSummary,
    topics,
    score,
    actions,
    resources,
    coreArguments,
    transcriptUrl,
    transcriptPdfUrl,
  };
}

export const getAllEpisodes = cache((): EpisodeMetadata[] => {
  return getEpisodeDirs().map((slug) => {
    return getEpisodeMetadata(slug) || {
        slug,
        title: slug,
        guest: slug,
        summary: "",
        topics: [],
    };
  });
});

export function getAllEpisodeSlugs(): EpisodeSlug[] {
  return getEpisodeDirs().map((slug) => ({ slug }));
}

function buildSearchText(episode: EpisodeMetadata): string {
  return [
    episode.title,
    episode.guest,
    episode.guestIntro,
    episode.summary,
    episode.topics.join(" "),
    episode.coreArguments?.join(" "),
    episode.actions,
    episode.resources,
  ]
    .filter(Boolean)
    .join("\n")
    .toLowerCase();
}

export function getAllSearchEpisodes(): SearchEpisode[] {
  return getAllEpisodes().map((episode) => ({
    ...episode,
    searchText: buildSearchText(episode),
  }));
}

export function getAllBuilderEpisodes(): BuilderEpisode[] {
  return getAllEpisodes().map(
    ({
      slug,
      title,
      guest,
      guestIntro,
      summary,
      date,
      twitterUrl,
      linkedinUrl,
      websiteUrl,
    }) => ({
      slug,
      title,
      guest,
      guestIntro,
      summary,
      date,
      twitterUrl,
      linkedinUrl,
      websiteUrl,
    }),
  );
}

export function getAllChecklistEpisodes(): ChecklistEpisode[] {
  return getAllEpisodes().map(
    ({
      slug,
      guest,
      guestIntro,
      date,
      actions,
      twitterUrl,
      linkedinUrl,
      websiteUrl,
    }) => ({
      slug,
      guest,
      guestIntro,
      date,
      actions,
      twitterUrl,
      linkedinUrl,
      websiteUrl,
    }),
  );
}

export const getEpisodeDetail = cache((slug: string): EpisodeDetail | null => {
  const analysis = getAnalysisMatter(slug);
  if (!analysis) return null;

  return {
    metadata: buildEpisodeMetadata(slug, analysis.content),
    content: analysis.content,
  };
});


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

export interface ActionContext {
  id: string; 
  originalId: string;
  text: string;
  category: string;
  episodeSlug: string;
  episodeTitle: string;
}

type ContentIndex = {
  generatedAt: string;
  products: Product[];
  allActions: ActionContext[];
  totalActionsCount: number;
  completedChecklistItemsCount: number;
};

const readContentIndex = cache((): ContentIndex => {
  if (!fs.existsSync(CONTENT_INDEX_PATH)) {
    throw new Error(
      `Missing generated content index at ${CONTENT_INDEX_PATH}. Run \`node scripts/generate-content-index.cjs\` first.`,
    );
  }

  return JSON.parse(fs.readFileSync(CONTENT_INDEX_PATH, "utf8")) as ContentIndex;
});

export function getAllProducts(): Product[] {
  return readContentIndex().products;
}

export function getAllChecklistItemsCount(): number {
  return readContentIndex().completedChecklistItemsCount;
}

export function getTotalActionsCount(): number {
  return readContentIndex().totalActionsCount;
}

export function getAllActions(): ActionContext[] {
  return readContentIndex().allActions;
}

export function getLatestEpisodes(limit: number = 3): EpisodeMetadata[] {
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
