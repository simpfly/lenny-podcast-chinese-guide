"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitter, Linkedin, ExternalLink, Plus, Check, Trash2 } from "lucide-react";
import { Episode } from "@/lib/data";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";

interface BuilderCardProps {
  episode: Episode;
}

export function BuilderCard({ episode }: BuilderCardProps) {
  const [isAdded, setIsAdded] = useState(false);

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
          href={`/episode/${episode.slug}`} 
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
              {episode.twitterUrl && (
                <div 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(episode.twitterUrl, '_blank');
                  }}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  title="Open Twitter"
                >
                  <Twitter className="w-4 h-4" />
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
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between relative z-10 pointer-events-none">
          <div className="space-y-4">
             {episode.guestIntro && (
              <div className="text-sm text-muted-foreground line-clamp-3 leading-relaxed [&_strong]:font-bold [&_b]:font-bold pointer-events-auto">
                <ReactMarkdown components={{
                    p: ({children}) => <p className="mb-0 inline">{children}</p>,
                    a: ({href, children}) => (
                      <a 
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline relative z-20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {children}
                      </a>
                    )
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
          
          <div className="mt-6 pt-4 border-t flex items-center justify-between pointer-events-auto">
              {/* Left: View Episode Link */}
              <Link 
                href={`/episode/${episode.slug}`} 
                className="group/link flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                  View Episode <ExternalLink className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
              
              {/* Right: Add to Checklist Button */}
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 transition-colors group/action ${
                    isAdded 
                    ? "text-primary hover:text-destructive hover:bg-destructive/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                onClick={toggleChecklist}
                title={isAdded ? "Unsave Builder" : "Save Builder"}
              >
                {isAdded ? (
                  <>
                     <Check className="w-4 h-4 group-hover/action:hidden" />
                     <Trash2 className="w-4 h-4 hidden group-hover/action:block" />
                  </>
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
