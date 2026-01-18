import { getAllEpisodes } from "@/lib/data";
import { BuilderCard } from "@/components/builder-card";

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
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          The Builders
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Meet the product leaders, founders, and experts sharing their hard-won wisdom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEpisodes.map((episode) => (
          <BuilderCard key={episode.slug} episode={episode} />
        ))}
      </div>
    </div>
  );
}
