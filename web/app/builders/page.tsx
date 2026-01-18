import { getAllEpisodes } from "@/lib/data";
import { BuilderList } from "@/components/builder-list";

export const metadata = {
  title: "Builders | Lenny's Podcast",
  description: "Meet the brilliant minds and industry leaders featured on Lenny's Podcast.",
};

export default function BuildersPage() {
  const episodes = getAllEpisodes();
  
  const sortedEpisodes = [...episodes].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="py-4">
      <BuilderList 
        initialEpisodes={sortedEpisodes} 
        title="The Builders"
        description="Meet the product leaders, founders, and experts sharing their hard-won wisdom."
      />
    </div>
  );
}
