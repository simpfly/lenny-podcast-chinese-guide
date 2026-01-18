"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { getTopicDisplayName } from "@/lib/topic-mapping";
import { Button } from "@/components/ui/button";

interface TopicCloudProps {
  topics: { topic: string; count: number }[];
}

export function TopicCloud({ topics }: TopicCloudProps) {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh'); // Default to Chinese as per user context

  if (topics.length === 0) {
    return <div className="text-muted-foreground">No topics found.</div>;
  }

  const maxCount = Math.max(...topics.map((t) => t.count));
  const minCount = Math.min(...topics.map((t) => t.count));
  const range = maxCount - minCount || 1;

  return (
    <div className="flex flex-col gap-6">
        <div className="flex justify-center">
            <div className="flex gap-1 bg-muted/50 p-1 rounded-lg">
                <Button 
                    variant={language === 'en' ? 'secondary' : 'ghost'} 
                    size="sm" 
                    onClick={() => setLanguage('en')}
                    className="h-8 text-xs font-medium"
                >
                    English
                </Button>
                <Button 
                    variant={language === 'zh' ? 'secondary' : 'ghost'} 
                    size="sm" 
                    onClick={() => setLanguage('zh')}
                    className="h-8 text-xs font-medium"
                >
                    中文
                </Button>
            </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center justify-center p-6 bg-muted/10 rounded-xl border border-border/50">
        {topics.map(({ topic, count }) => {
            const displayName = getTopicDisplayName(topic, language);

            // Calculate relative size/weight
            // We'll map to a scale of 1 to 5 for font size
            const normalized = (count - minCount) / range;
            const sizeClass = 
                normalized > 0.8 ? "text-3xl font-bold text-primary" :
                normalized > 0.6 ? "text-2xl font-semibold text-primary/90" :
                normalized > 0.4 ? "text-xl font-medium text-foreground/80" :
                normalized > 0.2 ? "text-lg text-foreground/70" :
                "text-sm text-foreground/60";
            
            const opacity = Math.max(0.6, 0.4 + (normalized * 0.6));

            return (
            <Link
                key={topic}
                href={`/search?q=${encodeURIComponent(displayName)}`}
                className={cn(
                "hover:text-primary transition-all duration-300 hover:scale-110 inline-block cursor-pointer px-2 py-1",
                sizeClass
                )}
                title={`${count} episodes`}
                style={{ opacity }}
            >
                {displayName}
                <span className="text-[0.6em] ml-0.5 align-top opacity-50 font-normal">
                    {count}
                </span>
            </Link>
            );
        })}
        </div>
    </div>
  );
}
