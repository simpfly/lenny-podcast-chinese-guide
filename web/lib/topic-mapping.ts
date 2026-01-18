export const TOPIC_SYNONYMS: Record<string, string[]> = {
  "PMF": ["Product Market Fit", "产品市场契合度", "PMF引擎", "Market Fit", "Product-Market Fit"],
  "PLG": ["Product Led Growth", "产品驱动增长", "PLG引擎", "Product-Led Growth"],
  "Growth": ["增长", "Growth Hacking", "增长主要", "User Growth", "增长策略"],
  "B2B": ["Enterprise", "ToB", "Business to Business", "企业级", "B2B Sales"],
  "Activation": ["User Activation", "激活", "用户激活", "激活率"],
  "Retention": ["User Retention", "留存", "用户留存", "Retention Rate", "留存率"],
  "Pricing": ["定价", "Pricing Strategy", "定价策略", "Monetization", "产品定价", "变现"],
  "Hiring": ["Recruiting", "招聘", "Team Building", "人才招聘", "团队建设"],
  "GTM": ["Go To Market", "市场进入策略", "GTM Strategy", "Go-to-Market"],
  "Cold Start": ["冷启动", "Cold Start Problem", "平台冷启动"],
  "Onboarding": ["User Onboarding", "用户引导", "Onboarding Flow"],
  "SEO": ["Search Engine Optimization", "搜索引擎优化", "SEO Strategy"],
  "Metrics": ["指标", "Data", "数据指标", "North Star Metric", "北极星指标"],
  "Management": ["管理", "Leadership", "领导力", "Team Management"],
};

// Reverse mapping for fast lookup: Variant -> Canonical
const NORMALIZE_MAP: Record<string, string> = {};

Object.entries(TOPIC_SYNONYMS).forEach(([canonical, variants]) => {
  // Canonical maps to itself
  NORMALIZE_MAP[canonical.toLowerCase()] = canonical;
  variants.forEach((variant) => {
    NORMALIZE_MAP[variant.toLowerCase()] = canonical;
  });
});

export function normalizeTopic(topic: string): string {
  if (!topic) return "";
  const lower = topic.trim().toLowerCase();
  // Return mapped canonical or original topic (title-cased if possible or as-is)
  return NORMALIZE_MAP[lower] || topic.trim();
}

export function getSearchTerms(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  const terms = [lowerQuery];

  // If the query matches a known synonym/canonical, add all related terms to search
  // logic: if query is "product market fit", we want to search for "PMF" too.
  // if query is "PMF", we want to search for "Product Market Fit" too.
  
  // 1. Check if query is a variant
  const canonical = NORMALIZE_MAP[lowerQuery];
  if (canonical) {
      // Add canonical
      terms.push(canonical.toLowerCase());
      // Add all variants
      if (TOPIC_SYNONYMS[canonical]) {
          terms.push(...TOPIC_SYNONYMS[canonical].map(v => v.toLowerCase()));
      }
  } else {
      // 2. Check if query partially matches any canonical or variant?
      // For now, strict mapping on the "concept" level is safer for "semantic" search
      // But simple string matching handle partials.
      // Let's just do exact concept mapping to expand the search.
  }
  
  return Array.from(new Set(terms));
}

// Primary Chinese translations for canonical topics
export const TOPIC_TRANSLATIONS: Record<string, string> = {
  "PMF": "产品市场契合度",
  "PLG": "产品驱动增长",
  "Growth": "用户增长",
  "B2B": "B2B/企业级",
  "Activation": "用户激活",
  "Retention": "用户留存",
  "Pricing": "产品定价",
  "Hiring": "招聘与团队",
  "GTM": "市场进入策略",
  "Cold Start": "冷启动",
  "Onboarding": "用户引导",
  "SEO": "搜索引擎优化",
  "Metrics": "数据指标",
  "Management": "团队管理",
};

export function getTopicDisplayName(topic: string, lang: 'en' | 'zh'): string {
  if (lang === 'en') return topic;
  
  // Try direct translation table
  if (TOPIC_TRANSLATIONS[topic]) {
      return TOPIC_TRANSLATIONS[topic];
  }

  // Try to find a Chinese synonym if no direct translation
  // detailed logic: find first synonym containing Chinese characters?
  const synonyms = TOPIC_SYNONYMS[topic];
  if (synonyms) {
      const chineseTerm = synonyms.find(s => /[\u4e00-\u9fa5]/.test(s));
      if (chineseTerm) return chineseTerm;
  }

  return topic;
}
