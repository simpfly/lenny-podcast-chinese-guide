import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, FileText, Search, Users, Package, CheckCircle2, ArrowRight, ArrowDown, PlusCircle, MessageSquare, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-20 w-full px-4 lg:px-6 max-w-4xl mx-auto pt-8">
      {/* Header */}
      <section className="text-center space-y-4 flex flex-col items-center">
        <Image src="/prism.png" alt="Prism" width={200} height={200} className="w-40 h-40 object-cover rounded-full mb-4 shadow-xl shadow-primary/5" />
        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors w-fit">
          关于本站
        </Badge>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-balance">
        <span className="text-primary inline-block">Builder's </span>
        </h1>
        <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto text-balance">
          Lenny's Podcast 知识库：产品经理与增长黑客的实战笔记
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-4 md:grid md:grid-cols-4 md:gap-8 items-start">
        <h2 className="text-2xl font-black tracking-tight mb-6 md:mb-0 md:col-span-1 md:text-left text-center">项目介绍</h2>
        <div className="space-y-6 text-foreground/80 leading-loose tracking-wide md:col-span-3 text-center md:text-left">
          <p>
            <a href="https://www.lennyspodcast.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline underline-offset-4">Lenny's Podcast</a> 的文稿是了解学习 AI 的绝佳内容源。
            <a href="https://www.simpfly.info/about" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline underline-offset-4 ml-1">simpfly</a>（我）尝试直接用 AI 来阅读，但因缺乏简明有效的结构，效果不理想。
          </p>
          <p>
            把想法付诸实践，始终是渐进的过程。我为其设计了交互，
            将信息转化为 <strong>可落地的行动单元 (Actionable Insights)</strong>。
          </p>
        </div>
        
        <div className="flex flex-col items-center relative text-center md:col-span-4 pt-12">
          {/* Stage 1: Source */}
          <div className="w-full max-w-lg mx-auto relative z-10 group py-8">
            <div className="bg-primary/5 p-2.5 rounded-full w-fit mx-auto mb-4">
              <FileText className="w-5 h-5 text-primary/40" />
            </div>
            <h3 className="text-xl font-black tracking-tight mb-3">双语逐字稿</h3>
            <p className="text-sm text-muted-foreground leading-relaxed px-10 tracking-wide">
              200+ 小时英文访谈文稿 & 中文翻译
            </p>
          </div>

          {/* Evolution Connector (Enhanced Flow with Glow) */}
          <div className="flex flex-col items-center relative h-36 w-full justify-center">
            {/* Base Line */}
            <div className="w-[1px] h-full bg-primary/20 relative overflow-hidden">
              {/* Flowing Light Effect (with glow) */}
              <div className="absolute top-0 left-[-1px] w-[3px] h-24 bg-primary/40 blur-[2px] animate-liquid-flow" />
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-primary/80 to-transparent animate-liquid-flow" />
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes liquid-flow {
                0% { transform: translateY(-120%); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateY(300%); opacity: 0; }
              }
              .animate-liquid-flow {
                animation: liquid-flow 3s ease-in-out infinite;
              }
            `}} />

            {/* The Process Badge (Minimalist) */}
            <div className="absolute top-1/2 -translate-y-1/2 z-20">
              <div className="bg-background border border-primary/20 px-6 py-2.5 rounded-full shadow-lg shadow-primary/5 flex items-center gap-3 hover:border-primary/40 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold tracking-tight">AI 深度解析</span>
              </div>
            </div>
          </div>

          {/* Stage 3: Output */}
          <div className="w-full relative z-10 pt-12">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: CheckCircle2, title: "Actions", link: "/search?v=actions", desc: "将洞察解构为 Checklist\n化想法为行动" },
                { icon: Package, title: "Products", link: "/search?v=products", desc: "直达访谈中提到的产品和书籍\n搭建自己的工具箱" },
                { icon: Users, title: "Builders", link: "/search?v=builders", desc: "收录访谈嘉宾的简介和社交账号\n关注一手信源" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="bg-primary/5 w-fit p-3 rounded-2xl mb-4 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary/70" />
                  </div>
                  <a href={item.link} className="hover:text-primary transition-colors">
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  </a>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed px-4 whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="md:grid md:grid-cols-4 md:gap-8 items-start">
        <h2 className="text-2xl font-black tracking-tight mb-8 md:mb-0 md:col-span-1 md:text-left text-center">如何使用</h2>
        <div className="flex flex-col gap-6 md:col-span-3">
          <div className="flex items-center gap-5 text-left p-4 rounded-2xl hover:bg-muted/30 transition-all group">
            <div className="flex-shrink-0 bg-primary/5 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-base">关键词检索</h3>
              <p className="text-sm text-muted-foreground leading-loose tracking-wide">
                搜索 <strong>"Figma"</strong>、<strong>"PLG"</strong> 等，直达一线实战洞察
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 text-left p-4 rounded-2xl hover:bg-muted/30 transition-all group">
            <div className="flex-shrink-0 bg-primary/5 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
              <PlusCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-base">当下可实践</h3>
              <p className="text-sm text-muted-foreground leading-loose tracking-wide">
                从自身出发，将实践，产品，书籍，人物，保存在 <a href="/saved" className="font-semibold text-primary hover:underline underline-offset-4">Saved</a> 中。支持复制 Markdown 
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 text-left p-4 rounded-2xl hover:bg-muted/30 transition-all group">
            <div className="flex-shrink-0 bg-primary/5 p-3 rounded-full group-hover:bg-primary/10 transition-colors">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-base">与内容对话</h3>
              <p className="text-sm text-muted-foreground leading-loose tracking-wide">
                推荐配合 <strong>Dia / ChatGPT Atlas</strong> 阅读原文，与内容对话
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section className="space-y-12 text-center pb-20">
        <h2 className="text-2xl font-black tracking-tight">内容制作</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-12 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center group">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-sm">
              <Image src="/lenny.jpg" alt="Lenny Rachitsky" fill className="object-cover" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://x.com/lennysan" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-primary transition-colors">
                @Lenny Rachitsky
              </a>
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none">播客文稿</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center group">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-sm">
              <Image src="/penny.jpeg" alt="Penny" fill className="object-cover" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://github.com/Penny777btc/lenny-podcast-chinese" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-primary transition-colors">
                @Penny777btc
              </a>
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none">中文深度解析</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center group">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-sm">
              <Image src="/simpfly.png" alt="simpfly" fill className="object-cover" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://www.simpfly.info/about" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-primary transition-colors">
                @simpfly
              </a>
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none">知识库制作</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
