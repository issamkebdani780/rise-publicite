import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, UserMinus, RotateCcw, EyeOff, Shuffle,CheckCircle2  } from 'lucide-react';

const Douleur = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col gap-16 items-center">
                    
                    {/* Top: Text Content */}
                    <div className="space-y-8 animate-slide-up max-w-4xl mx-auto text-center flex flex-col items-center">
                        {/* <div className="flex justify-center items-center gap-4">
                            <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <AlertTriangle className="w-7 h-7" />
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                                <CheckCircle2 className="w-4 h-4" />
                                100% Data Vérifiée
                            </div>
                        </div> */}
                        
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                                {t('douleur_title')}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
                                {t('douleur_sub')}
                            </p>
                        </div>

                        {/* 4 Blocs */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left rtl:text-right">
                            {[
                                { text: t('douleur_b1'), icon: <UserMinus className="w-5 h-5" /> },
                                { text: t('douleur_b2'), icon: <RotateCcw className="w-5 h-5" /> },
                                { text: t('douleur_b3'), icon: <EyeOff className="w-5 h-5" /> },
                                { text: t('douleur_b4'), icon: <Shuffle className="w-5 h-5" /> }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col gap-3 shadow-sm hover:border-red-500/30 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                                        {item.icon}
                                    </div>
                                    <div className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom: Mini Dashboard */}
                    <div className="relative animate-slide-up w-full max-w-5xl mx-auto" style={{ animationDelay: '0.2s' }}>
                        {/* Decorative glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                        
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-none p-6 sm:p-8 relative z-10">
                            
                            <div className="flex justify-between items-center mb-8">
                                <div className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-widest">{t('douleur_dash_title')}</div>
                                <div className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5">{t('douleur_dash_time')}</div>
                            </div>
                            
                            {/* KPI Cards */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10">
                                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-white/5">
                                    <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase mb-2">{t('douleur_dash_conv')}</div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1">
                                        <div className="text-base sm:text-xl font-black text-slate-900 dark:text-white"><span dir="ltr">4.2%</span></div>
                                        <div className="text-[10px] font-bold text-emerald-500"><span dir="ltr">+0.6%</span></div>
                                    </div>
                                </div>
                                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-white/5">
                                    <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase mb-2">{t('douleur_dash_aov')}</div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1">
                                        <div className="text-base sm:text-xl font-black text-slate-900 dark:text-white"><span dir="ltr">14,200 DA</span></div>
                                        <div className="text-[10px] font-bold text-emerald-500"><span dir="ltr">+12%</span></div>
                                    </div>
                                </div>
                                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-white/5">
                                    <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase mb-2">{t('douleur_dash_delivery')}</div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1">
                                        <div className="text-base sm:text-xl font-black text-slate-900 dark:text-white"><span dir="ltr">78.2%</span></div>
                                        <div className="text-[10px] font-bold text-red-500">-2%</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Chart & Top Products */}
                            <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
                                {/* Line Chart */}
                                <div className="flex-1">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{t('douleur_dash_sales')}</div>
                                    <div className="h-28 w-full relative">
                                        <svg viewBox="0 0 400 100" className="w-full h-full drop-shadow-md overflow-visible" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                                                </linearGradient>
                                            </defs>
                                            <path d="M0,80 L40,75 L80,85 L120,60 L160,65 L200,45 L240,50 L280,30 L320,40 L360,20 L400,25 L400,100 L0,100 Z" fill="url(#chartGradient)"/>
                                            <path d="M0,80 L40,75 L80,85 L120,60 L160,65 L200,45 L240,50 L280,30 L320,40 L360,20 L400,25" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                
                                {/* Progress Bars */}
                                <div className="w-full md:w-2/5 flex flex-col justify-between">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{t('douleur_dash_products')}</div>
                                    <div className="space-y-4">
                                        {[
                                            { name: "Basket X1", val: "88%" },
                                            { name: "Smart G2", val: "72%" },
                                            { name: "PowerHub", val: "45%" }
                                        ].map(p => (
                                            <div key={p.name}>
                                                <div className="flex justify-between text-[10px] font-bold mb-1.5">
                                                    <span className="text-slate-600 dark:text-slate-300">{p.name}</span>
                                                    <span className="text-blue-500">{p.val}</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out" style={{width: p.val}}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Douleur;
