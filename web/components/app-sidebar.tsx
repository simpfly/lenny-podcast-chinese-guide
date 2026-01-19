"use client";

import Link from "next/link";
import { Episode, Category } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Folder, History, CheckSquare, Package, Users, Info, PanelLeft } from "lucide-react";
import { PrismIcon } from "@/components/prism-icon";
import { Badge } from "@/components/ui/badge";
import { useChecklistCount } from "@/hooks/use-checklist-count";
import { useEffect, useState } from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// ... existing imports

interface AppSidebarProps {
    episodes?: Episode[];
    categories?: Category[];
    isCollapsed?: boolean;
    toggleCollapse?: () => void;
}

function NavTooltip({ children, content, side = "right", isCollapsed }: { children: React.ReactNode, content: string, side?: "right" | "top" | "bottom" | "left", isCollapsed: boolean }) {
    if (!isCollapsed) return <>{children}</>;
    
    return (
        <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} className="font-semibold">
                {content}
            </TooltipContent>
        </Tooltip>
    );
}

export function AppSidebar({ 
    episodes = [], 
    categories = [], 
    isCollapsed = false, 
    toggleCollapse 
}: AppSidebarProps) {
  const [mounted, setMounted] = useState(false);
  const checklistCount = useChecklistCount(episodes);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItemClass = isCollapsed 
    ? "flex items-center justify-center rounded-lg py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
    : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted";

  return (
    <TooltipProvider>
    <div className="flex h-full w-full flex-col border-r bg-sidebar text-sidebar-foreground transition-all duration-300 relative">
      <div className={`flex h-14 items-center border-b lg:h-[60px] ${isCollapsed ? 'justify-center px-0' : 'px-4 lg:px-6'}`}>
        {!isCollapsed ? (
          <>
            <Link href="/" className="flex items-center gap-2 font-semibold overflow-hidden">
              <PrismIcon className="h-6 w-6 shrink-0" />
              <span className="truncate">Builder's</span>
            </Link>
            {toggleCollapse && (
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 text-muted-foreground" onClick={toggleCollapse}>
                    <PanelLeft className="h-4 w-4" />
                </Button>
            )}
          </>
        ) : (
             toggleCollapse && (
              <NavTooltip content="Expand Sidebar" isCollapsed={isCollapsed} side="right">
                <Button variant="ghost" size="icon" className="h-10 w-10 p-0 hover:bg-muted" onClick={toggleCollapse}>
                    <PrismIcon className="h-6 w-6" />
                </Button>
              </NavTooltip>
             )
        )}
      </div>
      
      <ScrollArea className="flex-1">
        <nav className={`grid items-start py-4 gap-1 ${isCollapsed ? 'px-2' : 'px-2 lg:px-4'}`}>
          <NavTooltip content="Home" isCollapsed={isCollapsed}>
          <Link
            href="/"
            className={navItemClass}
          >
            <Home className="h-4 w-4 shrink-0" />
            {!isCollapsed && "Home"}
          </Link>
          </NavTooltip>

          <NavTooltip content="Builders" isCollapsed={isCollapsed}>
          <Link
            href="/builders"
            className={navItemClass}
          >
            <Users className="h-4 w-4 shrink-0" />
            {!isCollapsed && "Builders"}
          </Link>
          </NavTooltip>

          <NavTooltip content="Products" isCollapsed={isCollapsed}>
          <Link
            href="/products"
            className={navItemClass}
          >
            <Package className="h-4 w-4 shrink-0" />
            {!isCollapsed && "Products"}
          </Link>
          </NavTooltip>

          <NavTooltip content="Saved" isCollapsed={isCollapsed}>
          <Link
            href="/saved"
            className={isCollapsed ? navItemClass : "flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"}
          >
            <div className={`flex items-center ${isCollapsed ? 'justify-center relative' : 'gap-3'}`}>
              <CheckSquare className="h-4 w-4 shrink-0" />
              {!isCollapsed && "Saved"}
              {mounted && checklistCount > 0 && isCollapsed && (
                 <Badge className="absolute -bottom-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-[9px] leading-none" variant="default">
                     {checklistCount}
                 </Badge>
             )}
            </div>
            {mounted && checklistCount > 0 && !isCollapsed && (
              <Badge variant="secondary" className="px-1.5 py-0 h-4 min-w-[1.2rem] flex justify-center text-[10px] font-bold">
                {checklistCount}
              </Badge>
            )}
          </Link>
          </NavTooltip>

          <NavTooltip content="About" isCollapsed={isCollapsed}>
          <Link
            href="/about"
            className={navItemClass}
          >
            <Info className="h-4 w-4 shrink-0" />
            {!isCollapsed && "About"}
          </Link>
          </NavTooltip>
          
          <div className="my-2 border-t" />
          
          {!isCollapsed && (
              <div className="px-3 py-1 text-xs font-semibold uppercase text-muted-foreground">
                Topics
              </div>
          )}
          
          <NavTooltip content="All Topics" isCollapsed={isCollapsed}>
          <Link
            href="/search"
            className={navItemClass}
          >
            {isCollapsed ? <Folder className="h-4 w-4 shrink-0" /> : <span className="truncate">All</span>}
          </Link>
          </NavTooltip>
          
          {!isCollapsed && categories.slice(0, 15).map((category) => (
            <NavTooltip key={category.slug} content={category.title} isCollapsed={isCollapsed}>
            <Link
              href={`/topic/${category.slug}`}
              className={navItemClass}
            >
               <span className="truncate">{category.title}</span>
            </Link>
            </NavTooltip>
          ))}

          {!isCollapsed && (
              <>
               <div className="my-2 border-t" />
               <div className="px-3 py-1 text-xs font-semibold uppercase text-muted-foreground">
                 More
               </div>

              <NavTooltip content="Skills" isCollapsed={isCollapsed}>
              <Link
                href="https://refoundai.com/lenny-skills/browse/#product-management"
                target="_blank"
                rel="noopener noreferrer"
                className={navItemClass}
              >
                 Skills
              </Link>
              </NavTooltip>

              <NavTooltip content="Infographic Gallery" isCollapsed={isCollapsed}>
              <Link
                href="https://lennygallery.manus.space/"
                target="_blank"
                rel="noopener noreferrer"
                className={navItemClass}
              >
                 Infographic Gallery
              </Link>
              </NavTooltip>
              </>
          )}

        </nav>
      </ScrollArea>
      
      {/* Bottom Toggle for Collapsed State */}
       {isCollapsed && toggleCollapse && (
        <div className="p-2 border-t flex justify-center">
            <Button variant="ghost" size="icon" onClick={toggleCollapse} title="Expand">
                <PanelLeft className="h-4 w-4" />
            </Button>
        </div>
      )}
    </div>
    </TooltipProvider>
  );
}
