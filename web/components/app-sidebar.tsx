"use client";

import Link from "next/link";
import { Episode, Category } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, BookOpen, Folder, History, CheckSquare, Package, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useChecklistCount } from "@/hooks/use-checklist-count";
import { useEffect, useState } from "react";

export function AppSidebar({ episodes = [], categories = [] }: { episodes?: Episode[], categories?: Category[] }) {
  const [mounted, setMounted] = useState(false);
  const checklistCount = useChecklistCount(episodes);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex h-full w-full flex-col border-r bg-sidebar text-sidebar-foreground">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span className="">Lenny's Archive</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4 gap-1">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="/builders"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <Users className="h-4 w-4" />
            Builders
          </Link>

          {/* Timeline link removed */}
          <Link
            href="/products"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <Package className="h-4 w-4" />
            Product Wall
          </Link>
          <Link
            href="/saved"
            className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <div className="flex items-center gap-3">
              <CheckSquare className="h-4 w-4" />
              Saved
            </div>
            {mounted && checklistCount > 0 && (
              <Badge variant="secondary" className="px-1.5 py-0 h-4 min-w-[1.2rem] flex justify-center text-[10px] font-bold">
                {checklistCount}
              </Badge>
            )}
          </Link>
          <div className="my-2 border-t" />
          <div className="px-3 py-1 text-xs font-semibold uppercase text-muted-foreground">
            Topics
          </div>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/topic/${category.slug}`}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
            >
              <span className="truncate">{category.title}</span>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
