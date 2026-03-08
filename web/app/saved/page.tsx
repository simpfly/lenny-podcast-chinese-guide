
import { getAllChecklistEpisodes } from "@/lib/data";
import { ChecklistView } from "@/components/checklist-view";

export default function ChecklistPage() {
  const episodes = getAllChecklistEpisodes();

  return (
    <div className="py-4 w-full">
      <ChecklistView episodes={JSON.parse(JSON.stringify(episodes))} /> 
    </div>
  );
}
