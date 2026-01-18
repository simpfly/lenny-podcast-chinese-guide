
import { getAllEpisodes } from "@/lib/data";
import { ChecklistView } from "@/components/checklist-view";

export default function ChecklistPage() {
  const episodes = getAllEpisodes();

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Saved Items</h1>
        <p className="text-muted-foreground">
          Your collection of saved episodes, actions, tools, and builders.
        </p>
      </div>
      
      <ChecklistView episodes={JSON.parse(JSON.stringify(episodes))} /> 
    </div>
  );
}
