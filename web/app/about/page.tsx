import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, FileText, Search, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-20 w-full px-4 lg:px-6 max-w-4xl mx-auto pt-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
          关于本站
        </Badge>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Lenny's Podcast <span className="text-primary">中文深度解析 Archive</span>
        </h1>
        <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
          297 期 Lenny's Podcast 访谈的深度分析报告 + 双语逐字稿。学习世界级产品思维。
        </p>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">项目介绍</h2>
        <Card className="bg-muted/30">
          <CardContent className="pt-6 text-muted-foreground leading-relaxed">
            <p>
              这是一份针对 <a href="https://www.lennyspodcast.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline underline-offset-4">Lenny's Podcast</a> 的中文深度解析档案库。
              我们对每期节目进行了深度加工，提取结构化洞察，旨在帮助产品经理、创业者和构建者高效获取核心价值，而无需每次都听完完整的音频。
            </p>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <FileText className="w-4 h-4 text-primary" />
                深度分析报告
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              包含核心观点提炼、框架拆解、金句摘录以及可落地的行动清单，助你快速掌握精华。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="w-4 h-4 text-primary" />
                双语逐字稿
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              提供完整的英文原文与段落对应的中文翻译，既是获取信息的源头，也是学习专业英语的绝佳素材。
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Usage Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">如何使用</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-bold flex items-center gap-2">
              <Search className="w-4 h-4 text-primary" />
              检索话题
            </h3>
            <p className="text-sm text-muted-foreground">
              搜索 "PLG"、"Growth" 或 "Hiring" 等关键词，快速查找 200+ 期节目中各路专家的相关观点。
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              深度学习
            </h3>
            <p className="text-sm text-muted-foreground">
              深入研究 Airbnb, Figma, Notion 等顶级公司领导者的实战经验和决策细节。
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              AI 知识库
            </h3>
            <p className="text-sm text-muted-foreground">
              利用结构化的 Markdown 文件构建你自己的私人 RAG 知识库，辅助思考与创作。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
