export const EPISODE_DB = [
  {
    "title": "How to show up in any room with a low heart rate: Silicon Valley’s missing etiquette playbook | Sam Lessin",
    "date": "2026-01-15"
  },
  {
    "title": "Why most AI products fail: Lessons from 50+ AI deployments at OpenAI, Google, and Amazon",
    "date": "2026-01-11"
  },
  {
    "title": "The high-growth handbook: Molly Graham’s frameworks for leading through chaos, change, and scale",
    "date": "2026-01-04"
  },
  {
    "title": "We replaced our sales team with 20 AI agents—here’s what happened | Jason Lemkin (SaaStr)",
    "date": "2026-01-01"
  },
  {
    "title": "10 contrarian leadership truths every leader needs to hear | Matt MacInnis (Rippling)",
    "date": "2025-12-28"
  },
  {
    "title": "The coming AI security crisis (and what to do about it) | Sander Schulhoff",
    "date": "2025-12-21"
  },
  {
    "title": "The new AI growth playbook for 2026: How Lovable hit $200M ARR in one year | Elena Verna (Head of Growth)",
    "date": "2025-12-18"
  },
  {
    "title": "Why humans are AI’s biggest bottleneck (and what’s coming in 2026) | Alexander Embiricos (OpenAI Codex Product Lead)",
    "date": "2025-12-14"
  },
  {
    "title": "The 100-person AI lab that became Anthropic and Google's secret weapon | Edwin Chen (Surge AI)",
    "date": "2025-12-07"
  },
  {
    "title": "Why LinkedIn is turning PMs into AI-powered \"full stack builders” | Tomer Cohen (LinkedIn CPO)",
    "date": "2025-12-04"
  },
  {
    "title": "What world-class GTM looks like in 2026 | Jeanne DeWitt Grosser (Vercel, Stripe, Google)",
    "date": "2025-11-30"
  },
  {
    "title": "A guide to difficult conversations, building high-trust teams, and designing a life you love | Rachel Lockett",
    "date": "2025-11-23"
  },
  {
    "title": "Slack founder: Mental models for building products people love ft. Stewart Butterfield",
    "date": "2025-11-20"
  },
  {
    "title": "The Godmother of AI on jobs, robots & why world models are next | Dr. Fei-Fei Li",
    "date": "2025-11-16"
  },
  {
    "title": "“Dumbest idea I’ve heard” to $100M ARR: Inside the rise of Gamma | Grant Lee (CEO)",
    "date": "2025-11-13"
  },
  {
    "title": "\"Sell the alpha, not the feature\": The enterprise sales playbook for $1M to $10M ARR | Jen Abel",
    "date": "2025-11-09"
  },
  {
    "title": "The woman behind Canva shares how she built a $42B company from nothing | Melanie Perkins",
    "date": "2025-11-02"
  },
  {
    "title": "How Block is becoming the most AI-native enterprise in the world | Dhanji R. Prasanna",
    "date": "2025-10-26"
  },
  {
    "title": "Al Engineering 101 with Chip Huyen (Nvidia, Stanford, Netflix)",
    "date": "2025-10-23"
  },
  {
    "title": "How to measure AI developer productivity in 2025 | Nicole Forsgren",
    "date": "2025-10-19"
  },
  {
    "title": "Figma’s CEO: Why AI makes design, craft, and quality the new moat for startups | Dylan Field",
    "date": "2025-10-16"
  },
  {
    "title": "Inside Google's AI turnaround: The rise of AI Mode, strategy behind AI Overviews, and their vision for AI-powered search | Robby Stein",
    "date": "2025-10-11"
  },
  {
    "title": "First interview with Scale AI’s CEO: $14B Meta deal, what’s working in enterprise AI, and what frontier labs are building next | Jason Droege",
    "date": "2025-10-09"
  },
  {
    "title": "How to find hidden growth opportunities in your product | Albert Cheng (Duolingo, Grammarly, Chess.com)",
    "date": "2025-10-05"
  },
  {
    "title": "A 4-step framework for building delightful products | Nesrine Changuel (Spotify, Google, Skype)",
    "date": "2025-09-28"
  },
  {
    "title": "Why AI evals are the hottest new skill for product builders | Hamel Husain & Shreya Shankar",
    "date": "2025-09-25"
  },
  {
    "title": "From managing people to managing AI: The leadership skills everyone needs now | Julie Zhuo",
    "date": "2025-09-21"
  },
  {
    "title": "Why experts writing AI evals is creating the fastest-growing companies in history | Brendan Foody (CEO of Mercor)",
    "date": "2025-09-18"
  },
  {
    "title": "The ultimate guide to AEO: How to get ChatGPT to recommend your product | Ethan Smith (Graphite)",
    "date": "2025-09-14"
  },
  {
    "title": "$46B of hard truths from Ben Horowitz: Why founders fail and why you need to run toward fear (a16z co-founder)",
    "date": "2025-09-11"
  }
];

export function getOfficialDate(guestName: string, slug: string): string | null {
  // Normalize guest name
  const normalizedGuest = guestName.toLowerCase();
  
  // Try to find by Guest Name inclusion in Title
  const match = EPISODE_DB.find(e => e.title.toLowerCase().includes(normalizedGuest));
  
  if (match) return match.date;
  
  // Try slug parts
  const slugParts = slug.split('-');
  const slugMatch = EPISODE_DB.find(e => {
       const lowerTitle = e.title.toLowerCase();
       // Count how many slug parts match
       const matches = slugParts.filter(part => lowerTitle.includes(part)).length;
       return matches >= 2; // At least 2 parts match (e.g. "rahul", "vohra")
  });
  
  if (slugMatch) return slugMatch.date;

  return null;
}
