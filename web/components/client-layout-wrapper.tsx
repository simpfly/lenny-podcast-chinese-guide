"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { JsonLd } from "@/components/json-ld";
import { Episode, Category } from "@/lib/data";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
  episodes: Episode[];
  categories: Category[];
}

export function ClientLayoutWrapper({
  children,
  episodes,
  categories,
}: ClientLayoutWrapperProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="grid h-screen overflow-hidden w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <AppSidebar episodes={episodes} categories={categories} />
      </div>

      <div className="flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:h-[60px] lg:px-6 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
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
              <AppSidebar episodes={episodes} categories={categories} />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold">Builder's Archive</h1>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1 w-full pt-6 md:pt-12 px-4 md:px-8">
            {children}
          </div>
          
          <footer className="w-full py-6 mt-auto border-t bg-background/50 backdrop-blur-sm">
              <div className="container px-4 md:px-6 mx-auto flex justify-center text-sm text-muted-foreground font-medium items-center gap-1.5 hover:text-foreground transition-colors">
                  <span>Crafted by</span>
                  <a 
                      href="https://simpfly.info" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary/50 hover:bg-secondary transition-all"
                  >
                    Simpfly
                  </a>
              </div>
          </footer>
        </main>
        

      </div>
      
      {/* Structural Data for SEO */}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Lenny's Podcast 知识库 (Builder's Archive)",
        "url": "https://builders.simpfly.info/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://builders.simpfly.info/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }} />
    </div>
  );
}
