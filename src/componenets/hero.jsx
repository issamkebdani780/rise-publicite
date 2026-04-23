import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Activity, TrendingUp, DollarSign, Target, XCircle, CheckCircle2, ShoppingBag, Package } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500 min-h-screen flex items-center">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-20 animate-pulse-slow" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Text Content */}
                    <div className="max-w-2xl text-center lg:text-left rtl:lg:text-right mx-auto lg:mx-0 animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Ads Intelligence
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                            {t('hero_h1')}
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                            {t('hero_sub')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-black text-sm transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                                {t('hero_cta1')}
                                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                            </a>
                            <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-black text-sm transition-all border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2">
                                <Activity className="w-4 h-4 text-primary" />
                                {t('hero_cta2')}
                            </a>
                        </div>
                        
                        <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start text-xs font-bold text-slate-500">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                {t('hero_trial')}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                {t('hero_no_cc')}
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Visual */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-4 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden group animate-float">
                            
                            {/* Glow behind dashboard */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                </div>
                                <div className="text-xs font-bold text-slate-400">{t('hero_dash_live')}</div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5">
                                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1 flex items-center gap-1">
                                        <DollarSign className="w-3 h-3" /> {t('hero_dash_budget')}
                                    </div>
                                    <div className="text-lg font-black text-slate-900 dark:text-white"><span dir="ltr">620 000 DA</span></div>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 text-emerald-500"><TrendingUp className="w-4 h-4" /></div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">{t('hero_dash_revenue')}</div>
                                    <div className="text-lg font-black text-emerald-500"><span dir="ltr">2 940 000 DA</span></div>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                                <div className="text-[10px] text-primary font-bold uppercase mb-1">{t('hero_dash_profit')}</div>
                                <div className="text-3xl font-black text-slate-900 dark:text-white"><span dir="ltr">884 000 DA</span></div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-900 dark:text-white">{t('hero_dash_win_camp')}</div>
                                            <div className="text-[10px] text-slate-500"><span dir="ltr">CBO 3</span></div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-black text-emerald-500"><span dir="ltr">ROAS 4.7</span></div>
                                </div>
                                
                                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                                            <XCircle className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-900 dark:text-white">{t('hero_dash_cut_camp')}</div>
                                            <div className="text-[10px] text-slate-500"><span dir="ltr">ABO 7</span></div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-black text-red-500"><span dir="ltr">ROAS 0.8</span></div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                                <div className="text-xs font-bold text-slate-500">{t('hero_dash_cpa')}</div>
                                <div className="text-sm font-black text-primary bg-primary/10 px-2 py-1 rounded-md"><span dir="ltr">412 DA</span></div>
                            </div>

                        </div>
                        
                        {/* Floating Card 1: Commandes (Top Left) */}
                        <div className="hidden lg:flex absolute -top-8 -left-16 z-20 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-2xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-white/5 items-center gap-4 animate-float" style={{ animationDelay: '0.4s' }}>
                            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">
                                <ShoppingBag className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">{t('hero_dash_orders')}</div>
                                <div className="text-xl font-black text-slate-900 dark:text-white leading-none"><span dir="ltr">1,247</span></div>
                            </div>
                        </div>

                        {/* Floating Card 2: Stock (Right Middle) */}
                        <div className="hidden lg:flex absolute top-[40%] -right-12 z-20 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-2xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-white/5 items-center gap-4 animate-float" style={{ animationDelay: '0.9s' }}>
                            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center">
                                <Package className="w-5 h-5 text-purple-500" />
                            </div>
                            <div>
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-1">{t('hero_dash_stock')}</div>
                                <div className="text-lg font-black text-slate-900 dark:text-white leading-none"><span dir="ltr">98%</span></div>
                            </div>
                        </div>

                        {/* Floating Card 3: Profit (Bottom Right) */}
                        <div className="hidden lg:flex absolute -bottom-6 -right-6 z-20 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-2xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-white/5 items-center gap-4 animate-float" style={{ animationDelay: '1.4s' }}>
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">{t('hero_dash_profit')}</div>
                                <div className="text-xl font-black text-slate-900 dark:text-white leading-none"><span dir="ltr">284,500 DA</span></div>
                            </div>
                        </div>

                        {/* Floating decorative elements */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
