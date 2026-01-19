"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
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
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <AppSidebar episodes={episodes} categories={categories} />
      </div>

      <div className="flex flex-col">
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
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
        
        <footer className="border-t py-6 px-4 lg:px-6">
          <div className="flex justify-center text-sm text-muted-foreground">
             Crafted by <a href="https://simpfly.info" target="_blank" rel="noopener noreferrer" className="ml-1 font-medium hover:text-primary transition-colors">Simpfly</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
