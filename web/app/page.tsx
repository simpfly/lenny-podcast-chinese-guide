import { 
  getAllCategories, 
  getLatestEpisodes, 
  getTotalActionsCount, 
  getAllEpisodes, 
  getAllProducts 
} from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SearchInput } from "@/components/search-input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckCircle2, 
  Wrench, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  BookOpen,
  Calendar
} from "lucide-react";
import { HomeClientSection } from "@/components/home-client-section";
import { cn } from "@/lib/utils";

export default function Home() {
  const categories = getAllCategories();
  const latestEpisodes = getLatestEpisodes(3);
  const totalEpisodes = getAllEpisodes().length;
  const totalActions = getTotalActionsCount();
  const allProducts = getAllProducts();
  const totalTools = allProducts.filter(p => p.category === "Tool").length;

  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative pt-8 pb-4">
        <div className="flex flex-col gap-6 text-center md:text-left max-w-4xl">
          <Badge className="w-fit self-center md:self-start mb-2 py-1 px-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20" variant="secondary">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            AI-Powered Product Knowledge Base
          </Badge>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
            Master Product Management <br className="hidden md:block" />
            <span className="text-primary italic">One Insight</span> at a Time.
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
            Deep dive analysis and bilingual transcripts from <span className="text-foreground font-semibold">Lenny's Podcast</span>. 
            Practical wisdom, synthesized for growth-minded builders.
          </p>
          
          <div className="mt-4 max-w-2xl">
              <SearchInput />
              <div className="mt-4 flex flex-wrap items-center gap-2 justify-center md:justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mr-2">Popular:</span>
                {["Growth", "AI", "Marketplace", "Leadership"].map(tag => (
                   <Link key={tag} href={`/topic/${tag.toLowerCase()}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 hover:text-primary transition-colors">#{tag}</Badge>
                   </Link>
                ))}
              </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8 bg-muted/30 rounded-3xl border border-dashed">
            <StatItem icon={<Users />} label="Episodes" value={totalEpisodes} />
            <StatItem icon={<CheckCircle2 />} label="Guide Actions" value={totalActions} />
            <StatItem icon={<Wrench />} label="Tools Found" value={totalTools} />
            <StatItem icon={<TrendingUp />} label="Topics" value={categories.length} />
        </div>
      </section>

      {/* Knowledge Compass (Client Progress) */}
      <HomeClientSection totalActions={totalActions} episodes={getAllEpisodes()} />

      {/* Latest Insights Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                最新深度分析 <span className="text-muted-foreground font-normal text-sm ml-2">Latest Insights</span>
            </h2>
            <Link href="/timeline" className="text-sm font-medium text-primary hover:underline flex items-center gap-1 group">
                查看全部往期
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
            {latestEpisodes.map((episode) => (
               <Link key={episode.slug} href={`/episode/${episode.slug}`} className="group h-full">
                 <Card className="h-full border-muted-foreground/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div className="h-2 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                    <CardHeader className="pb-4">
                        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3">
                            <Calendar className="w-3.5 h-3.5" />
                            {episode.date}
                        </div>
                        <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                            {episode.guest}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 md:line-clamp-3 mt-2 text-sm">
                            {episode.summary}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dashed">
                            {episode.topics.slice(0, 2).map(topic => (
                                <Badge key={topic} variant="secondary" className="text-[10px] px-1.5 py-0">
                                    {topic}
                                </Badge>
                            ))}
                            {episode.topics.length > 2 && (
                                <span className="text-[10px] text-muted-foreground">+{episode.topics.length-2}</span>
                            )}
                        </div>
                    </CardContent>
                 </Card>
               </Link>
            ))}
        </div>
      </section>

      {/* Featured Tools Teaser */}
      <section className="bg-primary/[0.03] -mx-4 md:-mx-8 px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-primary" />
                  精选生产力工具 <span className="text-muted-foreground font-normal text-sm ml-2">Featured Tools</span>
              </h2>
              <Link href="/products" className="text-sm font-medium text-primary hover:underline flex items-center gap-1 group">
                  前往工具墙
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
              {allProducts.slice(0, 3).map(product => (
                  <Card key={product.name} className="hover:bg-background transition-colors border-dashed bg-background/50">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Wrench className="w-5 h-5" />
                            </div>
                            <Badge variant="outline" className="text-[10px] uppercase">{product.category}</Badge>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Users className="w-3.5 h-3.5" />
                            Mentioned in {product.mentionedIn.length} episodes
                        </div>
                      </CardContent>
                  </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Browse Topics Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                按主题检索 <span className="text-muted-foreground font-normal text-sm ml-2">Browse by Topic</span>
            </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, idx) => (
            <Link key={category.slug} href={`/topic/${category.slug}`}>
              <Card className={cn(
                  "h-full transition-all hover:bg-muted/80 hover:border-primary/50 hover:shadow-md",
                  idx % 3 === 0 ? "bg-blue-50/10 dark:bg-blue-900/10" : 
                  idx % 3 === 1 ? "bg-purple-50/10 dark:bg-purple-900/10" : 
                  "bg-emerald-50/10 dark:bg-emerald-900/10"
              )}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{idx % 3 === 0 ? "🚀" : idx % 3 === 1 ? "💡" : "📈"}</span>
                    {category.title}
                  </CardTitle>
                  <CardDescription className="mt-1">
                     探索播客中关于 {category.title.toLowerCase()} 的所有深度见解
                  </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                       <span>Topic Index</span>
                       <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: number }) {
    return (
        <div className="flex flex-col items-center md:items-start p-4 hover:bg-background rounded-2xl transition-colors group">
            <div className="p-2 bg-primary/10 rounded-lg text-primary mb-3 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="text-2xl font-black">{value}</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/70">{label}</div>
        </div>
    );
}
