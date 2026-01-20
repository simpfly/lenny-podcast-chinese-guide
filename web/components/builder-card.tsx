"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitter, Linkedin, Plus, Check, Trash2 } from "lucide-react";
import { Episode } from "@/lib/data";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { cn, getLinkTarget } from "@/lib/utils";


interface BuilderCardProps {
  episode: Episode;
}

export function BuilderCard({ episode }: BuilderCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("lenny_saved_builders") || "[]");
      setIsAdded(saved.some((b: any) => b.slug === episode.slug));
    } catch (e) {
      console.error(e);
    }
  }, [episode.slug]);

  const toggleChecklist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const saved = JSON.parse(localStorage.getItem("lenny_saved_builders") || "[]");
      let newSaved;
      
      if (isAdded) {
        newSaved = saved.filter((b: any) => b.slug !== episode.slug);
      } else {
        newSaved = [...saved, { 
          slug: episode.slug, 
          guest: episode.guest,
          guestIntro: episode.guestIntro,
          date: episode.date // Keep date in storage just in case
        }];
        setJustAdded(true);
      }

      localStorage.setItem("lenny_saved_builders", JSON.stringify(newSaved));
      setIsAdded(!isAdded);
      window.dispatchEvent(new CustomEvent("checklist-updated"));
    } catch (err) {
      console.error("Failed to update builders checklist", err);
    }
  };

  return (
    <div className="group h-full relative">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col overflow-hidden bg-card/50 hover:bg-card relative">
        {/* Overlay Link for the entire card */}
        <Link 
          href={`/episodes/${episode.slug}#guest-intro`} 
          className="absolute inset-0 z-0"
          prefetch={false}
        >
          <span className="sr-only">View {episode.guest}'s Episode</span>
        </Link>
        
        <CardHeader className="pb-4 relative z-10 pointer-events-none">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
               <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-1">
                {episode.guest}
              </CardTitle>
            </div>
            <div className="flex gap-2 shrink-0 pointer-events-auto">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-8 w-8 transition-all",
                  // 触屏设备始终可见，桌面端 hover 显示
                  "opacity-60 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100",
                  isAdded 
                    ? "text-primary !opacity-100"
                    : "text-muted-foreground hover:text-foreground hover:bg-transparent"
                )}
                onClick={toggleChecklist}
                title={isAdded ? "Unsave Builder" : "Save Builder"}
              >
                {isAdded ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between relative z-10 pointer-events-none">
          <div className="space-y-4">
             {episode.guestIntro && (
              <div className="text-sm text-muted-foreground line-clamp-3 leading-relaxed [&_strong]:font-bold [&_b]:font-bold pointer-events-auto">
                <ReactMarkdown components={{
                    p: ({children}) => <p className="mb-0 inline">{children}</p>,
                    a: ({href, children}) => {
                      const target = getLinkTarget(href);
                      return (
                      <a 
                        href={href} 
                        target={target} 
                        rel={target === "_blank" ? "noopener noreferrer" : undefined} 
                        className="text-primary hover:underline relative z-20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {children}
                      </a>
                    )}

                }}>
                    {episode.guestIntro}
                </ReactMarkdown>
              </div>
            )}
            {!episode.guestIntro && (
               <div className="text-sm text-muted-foreground/50 italic pointer-events-auto">
                  No intro available.
               </div>
            )}
          </div>
          
          <div className="mt-6 pt-4 border-t flex items-center justify-between pointer-events-auto min-h-[3rem]">
              <div className="flex gap-2 shrink-0">
              {episode.twitterUrl && (
                <div 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(episode.twitterUrl, '_blank');
                  }}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Open X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </div>
              )}
              {episode.linkedinUrl && (
                <div 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(episode.linkedinUrl, '_blank');
                  }}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Open LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </div>
              )}
              </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
