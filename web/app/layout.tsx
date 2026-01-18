import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Removed for speed, relying on Geist or system fonts if Shadcn set them
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { getAllEpisodes } from "@/lib/data";

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

  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-background text-foreground">
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <AppSidebar episodes={episodes} />
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col p-0 w-[240px]">
                   <AppSidebar episodes={episodes} />
                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                <h1 className="text-lg font-semibold">Lenny's Archive</h1>
              </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-x-hidden">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
