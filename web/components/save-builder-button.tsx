"use client";

import { useState, useEffect } from "react";
import { Plus, Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Episode } from "@/lib/data";

interface SaveBuilderButtonProps {
  episode: Episode;
}

export function SaveBuilderButton({ episode }: SaveBuilderButtonProps) {
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
          date: episode.date
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
    <Button
      variant="ghost"
      size="icon"
      className={`h-8 w-8 transition-all opacity-0 group-hover:opacity-100 group/action ${
          isAdded 
          ? (justAdded 
              ? "text-primary hover:bg-transparent" 
              : "text-primary hover:text-destructive hover:bg-transparent")
          : "text-muted-foreground hover:text-foreground hover:bg-transparent"
      }`}
      onClick={toggleChecklist}
      onMouseLeave={() => setJustAdded(false)}
      title={isAdded ? "Unsave Builder" : "Save Builder"}
    >
      {isAdded ? (
        <>
            <Check className={`w-5 h-5 ${justAdded ? "" : "group-hover/action:hidden"}`} />
            {!justAdded && <Trash2 className="w-5 h-5 hidden group-hover/action:block" />}
        </>
      ) : (
        <Plus className="w-5 h-5" />
      )}
    </Button>
  );
}
