import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, TrendingUp, Scissors, ImageMinus, Map, ShoppingBag } from 'lucide-react';

const Decisions = () => {
    const { t } = useTranslation();

    const actions = [
        { title: t('dec_1'), icon: <TrendingUp className="w-5 h-5" />, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        { title: t('dec_2'), icon: <Scissors className="w-5 h-5" />, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
        { title: t('dec_3'), icon: <ImageMinus className="w-5 h-5" />, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
        { title: t('dec_4'), icon: <Map className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { title: t('dec_5'), icon: <ShoppingBag className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" }
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#020617]">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 space-y-6 animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold">
                            <Zap className="w-4 h-4 fill-current" /> Actions Immédiates
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            {t('dec_title')}
                        </h2>
                        <p className="text-lg text-slate-500 font-medium">
                            Plus de devinettes. Les données sont claires, les actions à entreprendre deviennent évidentes. Optimisez votre budget en quelques clics.
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full space-y-4">
                        {actions.map((action, idx) => (
                            <div 
                                key={idx}
                                className={`flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border ${action.border} hover:scale-[1.02] transition-transform cursor-pointer shadow-sm`}
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className={`w-10 h-10 rounded-xl ${action.bg} ${action.color} flex items-center justify-center shrink-0`}>
                                    {action.icon}
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                                    {action.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Decisions;
