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
  Calendar,
  Rocket,
  Lightbulb
} from "lucide-react";
import { HomeClientSection } from "@/components/home-client-section";
import { TopicEpisodeList } from "@/components/topic-episode-list";
import { cn } from "@/lib/utils";

export default function Home() {
  const categories = getAllCategories();
  const latestEpisodes = getLatestEpisodes(2);
  const totalEpisodes = getAllEpisodes().length;
  const totalActions = getTotalActionsCount();
  const allProducts = getAllProducts();
  const totalTools = allProducts.filter(p => p.category === "Tool").length;

  return (
    <div className="flex flex-col gap-16 pb-20 w-full px-4 lg:px-6">
      {/* Hero Section */}
      <section className="relative pt-8 pb-4">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <Badge className="w-fit self-center md:self-start mb-2 py-1 px-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20" variant="secondary">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            AI-Powered Product Knowledge Base
          </Badge>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-5xl leading-[1.2]">
            Hunt <br />
            <span className="text-primary italic">Builders, Actions, Product, Insight</span>
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
            Deep dive analysis transcripts from <span className="text-foreground font-semibold">Lenny's Podcast</span>. 
            Practical wisdom, synthesized for growth-minded builders.
          </p>
          <div className="mt-4">
              <SearchInput />
              <div className="mt-4 flex flex-wrap items-center gap-2 justify-center md:justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mr-2">Popular:</span>
                {["Growth", "AI", "Marketplace", "Leadership"].map(tag => (
                   <Link key={tag} href={`/search?q=${tag.toLowerCase()}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 hover:text-primary transition-colors">#{tag}</Badge>
                   </Link>
                ))}
              </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full">
            <StatItem icon={<Calendar />} label="Episodes" value={totalEpisodes} href="/search" />
            <StatItem icon={<CheckCircle2 />} label="Guide Actions" value={totalActions} href="/search?v=actions" />
            <StatItem icon={<Wrench />} label="Tools Found" value={totalTools} href="/products" />
            <StatItem icon={<TrendingUp />} label="Topics" value={categories.length} href="#topics" />
        </div>
      </section>

      {/* Knowledge Compass (Client Progress) */}
      <HomeClientSection totalActions={totalActions} episodes={getAllEpisodes()} />

      {/* Latest Insights Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                最新深度分析
            </h2>
            <Link href="/search" className="text-sm font-medium text-primary hover:underline flex items-center gap-1 group">
                查看更多
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
        <TopicEpisodeList episodes={latestEpisodes} />
      </section>

      {/* Featured Tools Teaser */}
      <section>
        <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-primary" />
                  精选生产力工具
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
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-lg">{product.name}</h3>
                            <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider">{product.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Users className="w-3.5 h-3.5" />
                            Mentioned in {product.mentionedIn.length} episodes
                        </div>
                      </CardContent>
                  </Card>
              ))}
          </div>
      </section>

      {/* Browse Topics Grid */}
      <section id="topics">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                按主题检索
            </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, idx) => (
            <Link key={category.slug} href={`/topic/${category.slug}`}>
              <Card className="transition-all bg-muted/20 hover:bg-muted/40 hover:border-primary/50 hover:shadow-md flex flex-row items-center justify-between px-6 py-4 gap-0">
                <h3 className="font-bold text-base">{category.title}</h3>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity" />
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: number, href?: string }) {
    const Content = (
        <div className={cn("flex flex-col items-center md:items-start p-4 hover:bg-background rounded-2xl transition-colors group", href && "cursor-pointer")}>
            <div className="p-2 bg-primary/10 rounded-lg text-primary mb-3 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="text-2xl font-black">{value}</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/70">{label}</div>
        </div>
    );

    if (href) {
        return <Link href={href} className="block">{Content}</Link>;
    }

    return Content;
}
