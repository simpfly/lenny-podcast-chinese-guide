import type { Metadata } from "next";
import "./globals.css";
import { getAllEpisodes, getAllCategories } from "@/lib/data";
import { ClientLayoutWrapper } from "@/components/client-layout-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'),
  title: {
    default: "Lenny's Podcast Knowledge Base",
    template: "%s | Lenny's Podcast Knowledge Base",
  },
  description: "A deep dive archive of Lenny's Podcast episodes, featuring bilingual transcripts, actionable insights, and structured knowledge summaries.",
  keywords: ["Lenny's Podcast", "Product Management", "Growth", "Startups", "Knowledge Base", "Podcast Summaries"],
  authors: [{ name: "Lenny Rachitsky" }, { name: "Penny777btc" }],
  creator: "Penny777btc",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "Lenny's Podcast Knowledge Base",
    title: "Lenny's Podcast Knowledge Base",
    description: "Deep dive analysis from the best product podcast.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenny's Podcast Knowledge Base",
    description: "Deep dive analysis from the best product podcast.",
    creator: "@lennysan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const episodes = getAllEpisodes();
  const categories = getAllCategories();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <ClientLayoutWrapper episodes={episodes} categories={categories}>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
