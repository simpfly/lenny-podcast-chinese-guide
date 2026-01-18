"use client";

import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RandomEpisodeButtonProps {
    allSlugs: string[];
    currentSlug: string;
}

export function RandomEpisodeButton({ allSlugs, currentSlug }: RandomEpisodeButtonProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleRandom = () => {
        setIsLoading(true);
        // Filter out current episode
        const availableSlugs = allSlugs.filter(s => s !== currentSlug);
        
        if (availableSlugs.length === 0) return;

        const randomSlug = availableSlugs[Math.floor(Math.random() * availableSlugs.length)];
        router.push(`/episode/${randomSlug}`);
    };

    return (
        <Button 
            variant="outline" 
            size="sm" 
            className="gap-2" 
            onClick={handleRandom}
            disabled={isLoading}
        >
            <Shuffle className="w-4 h-4" />
            <span className="hidden sm:inline">Random Episode</span>
            <span className="sm:hidden">Random</span>
        </Button>
    );
}
