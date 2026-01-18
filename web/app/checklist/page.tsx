
import { getAllEpisodes } from "@/lib/data";
import { ChecklistView } from "@/components/checklist-view";

export default function ChecklistPage() {
  const episodes = getAllEpisodes();

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Action Plan</h1>
        <p className="text-muted-foreground">
          Track and review the actions you've committed to from various episodes.
        </p>
      </div>
      
      <ChecklistView episodes={JSON.parse(JSON.stringify(episodes))} /> 
    </div>
  );
}
