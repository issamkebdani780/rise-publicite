import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, CheckSquare, PackageCheck, BarChart3, Layout, Users2, ShieldCheck } from 'lucide-react';

const Promesse = () => {
    const { t } = useTranslation();

    const cards = [
        {
            title: t('promesse_c1'),
            value: "CPL",
            icon: <Users className="w-5 h-5" />
        },
        {
            title: t('promesse_c2'),
            value: "CPCO",
            icon: <CheckSquare className="w-5 h-5" />
        },
        {
            title: t('promesse_c3'),
            value: "CPA Livré",
            icon: <PackageCheck className="w-5 h-5" />
        },
        {
            title: t('promesse_c4'),
            value: "ROI Campagne",
            icon: <BarChart3 className="w-5 h-5" />
        },
        {
            title: t('promesse_c5'),
            value: "ROI Créa",
            icon: <Layout className="w-5 h-5" />
        },
        {
            title: t('promesse_c6'),
            value: "ROI Audience",
            icon: <Users2 className="w-5 h-5" />
        }
    ];

    return (
        <section id="features" className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] dark:bg-[url('/grid-dark.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16 animate-slide-up flex flex-col items-center">
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-6 shadow-sm">
                        <ShieldCheck className="w-4 h-4" />
                        {t('promesse_badge')}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight max-w-3xl">
                        {t('promesse_title')}
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div 
                            key={index}
                            className="group relative p-8 rounded-[2rem] bg-slate-50/80 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 animate-slide-up overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Live Ping Indicator */}
                            <div className="absolute top-6 right-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Live Sync</span>
                            </div>

                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-sm">
                                    {card.icon}
                                </div>
                                <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                    <span dir="ltr">{card.value}</span>
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                {card.title}
                            </h3>
                            
                            {/* Decorative bottom line that grows on hover */}
                            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-primary to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-full opacity-50" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Promesse;
