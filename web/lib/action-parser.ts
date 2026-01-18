
export interface ActionItem {
    id: string; // hash or cleaned text
    text: string;
    originalText: string;
}

export interface ActionCategory {
    label: string; // "今天", "本周", "深入"
    items: ActionItem[];
}

export function parseActions(markdown: string): ActionCategory[] {
    // If markdown is undefined/null, return empty
    if (!markdown) return [];

    const sections = markdown.split(/###\s+/);
    const categories: ActionCategory[] = [];

    sections.forEach(section => {
        if (!section.trim()) return;
        
        const lines = section.split('\n');
        const header = lines[0].trim();
        const contentLines = lines.slice(1);
        
        let label = "";
        if (header.includes("立即") || header.includes("今天")) label = "今天";
        else if (header.includes("本周")) label = "本周";
        else if (header.includes("深度") || header.includes("深入")) label = "深入";
        
        if (!label) return; // Skip unknown sections or intro text

        const items: ActionItem[] = [];
        contentLines.forEach(line => {
            const trimmed = line.trim();
            // Match list items: - [ ] or - 
            if (trimmed.startsWith('-')) {
                // Remove "- [ ]" or "- " prefix
                let cleanText = trimmed.replace(/^-\s*(\[\s*\])?\s*/, '');
                
                // IGNORE noise like "--" or single punctuation
                if (cleanText && cleanText.length > 2) {
                    items.push({
                        id: btoa(unescape(encodeURIComponent(cleanText))).slice(0, 16), // Simple hash for ID
                        text: cleanText,
                        originalText: cleanText 
                    });
                }
            }
        });

        if (items.length > 0) {
            categories.push({ label, items });
        }
    });

    return categories;
}
