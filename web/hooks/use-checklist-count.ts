"use client";

import { useState, useEffect } from "react";
import { Episode } from "@/lib/data";

export function useChecklistCount(episodes: Episode[]) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const calculateCount = () => {
      let total = 0;
      
      // Count completed episode actions
      episodes.forEach((episode) => {
        const storageKey = `lenny_actions_${episode.slug}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          try {
            const checkedState: Record<string, boolean> = JSON.parse(saved);
            total += Object.values(checkedState).filter(val => val === true).length;
          } catch (e) {
            console.error("Failed to parse actions count for", episode.slug, e);
          }
        }
      });

      // Count items in product stack
      try {
        const stack = JSON.parse(localStorage.getItem("lenny_product_stack") || "[]");
        total += stack.length;
      } catch (e) {
        console.error("Failed to parse product stack count", e);
      }

      // Count saved builders
      try {
        const builders = JSON.parse(localStorage.getItem("lenny_saved_builders") || "[]");
        total += builders.length;
      } catch (e) {
        console.error("Failed to parse saved builders count", e);
      }

      setCount(total);
    };

    calculateCount();

    // Listen for storage changes in other tabs
    window.addEventListener("storage", calculateCount);
    
    // Custom event for same-tab updates if we implement one
    window.addEventListener("checklist-updated", calculateCount);

    return () => {
      window.removeEventListener("storage", calculateCount);
      window.removeEventListener("checklist-updated", calculateCount);
    };
  }, [episodes]);

  return count;
}
