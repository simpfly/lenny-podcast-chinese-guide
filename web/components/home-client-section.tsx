"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LayoutDashboard, Package, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useChecklistCount } from "@/hooks/use-checklist-count";
import { Episode } from "@/lib/data";

export function HomeClientSection({ totalActions, episodes }: { totalActions: number, episodes: Episode[] }) {
    const completedCount = useChecklistCount(episodes);
    const [stackSize, setStackSize] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateStackSize = () => {
            const savedStack = localStorage.getItem("lenny_product_stack");
            if (savedStack) {
                try {
                    const stack = JSON.parse(savedStack);
                    setStackSize(Array.isArray(stack) ? stack.length : 0);
                } catch (e) {
                    console.error("Failed to parse product stack", e);
                }
            } else {
                setStackSize(0);
            }
        };

        updateStackSize();
        window.addEventListener("checklist-updated", updateStackSize);
        return () => window.removeEventListener("checklist-updated", updateStackSize);
    }, []);

    if (!mounted) return null;

    // We use totalActions as a baseline. completedCount also includes products added to stack
    // so let's just show a simple progress bar based on total actions if available
    const progressValue = totalActions > 0 ? (completedCount / totalActions) * 100 : 0;

    return (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                    <LayoutDashboard className="w-6 h-6 text-primary" />
                    知识罗盘
                </h2>
                <Link href="/saved" className="text-sm font-medium text-primary hover:underline flex items-center gap-1 group">
                    详细清单
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-primary/[0.02] border-primary/10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <CheckCircle2 className="w-24 h-24" />
                    </div>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                            行动建议进度
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-black">{completedCount}</span>
                            <span className="text-muted-foreground text-sm">/ {totalActions} 项已完成</span>
                        </div>
                        <Progress value={progressValue} className="h-2" />
                    </CardContent>
                </Card>

                <Card className="bg-primary/[0.02] border-primary/10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Package className="w-24 h-24" />
                    </div>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                            我的工具栈
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-black">{stackSize}</span>
                            <span className="text-muted-foreground text-sm">个收藏产品</span>
                        </div>
                        <div className="flex gap-2">
                            <Link href="/products" className="text-xs text-primary hover:underline font-medium">去工具墙添加更多</Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
