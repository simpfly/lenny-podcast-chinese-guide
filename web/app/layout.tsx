import type { Metadata } from "next";
import "./globals.css";
import { getAllEpisodeSlugs, getAllCategories } from "@/lib/data";
import { ClientLayoutWrapper } from "@/components/client-layout-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'),
  title: {
    default: "Builder's | Lenny 知识库",
    template: "%s | Builder's",
  },
  description: "Lenny's Podcast 深度中文知识库，精选硅谷一线产品经理、增长黑客的实战经验。提供双语对照逐字稿、行动指南摘要和结构化知识图谱，助你打造顶尖产品。",
  keywords: ["Lenny's Podcast", "产品经理", "增长黑客", "SaaS", "创业", "硅谷", "知识库", "中文播客", "Product Management", "Growth", "Startups"],
  authors: [{ name: "Lenny Rachitsky" }, { name: "Penny777btc" }],
  creator: "Penny777btc",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "Builder's (Lenny's Podcast 知识库)",
    title: "Builder's | Lenny 知识库",
    description: "Lenny's Podcast 深度中文知识库，精选硅谷一线产品经理、增长黑客的实战经验。提供双语对照逐字稿、行动指南摘要和结构化知识图谱。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builder's | Lenny 知识库",
    description: "Lenny's Podcast 深度中文知识库，精选硅谷一线产品经理、增长黑客的实战经验。",
    creator: "@lennysan",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const episodeSlugs = getAllEpisodeSlugs().map((episode) => episode.slug);
  const categories = getAllCategories();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <ClientLayoutWrapper episodeSlugs={episodeSlugs} categories={categories}>
            {children}
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
