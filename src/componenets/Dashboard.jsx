import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, Target, Video, Users, Box, MapPin, Clock } from 'lucide-react';

const Dashboard = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: t('dash_t1'), icon: <Target className="w-4 h-4" /> },
        { id: 1, label: t('dash_t2'), icon: <Video className="w-4 h-4" /> },
        { id: 2, label: t('dash_t3'), icon: <Users className="w-4 h-4" /> },
        { id: 3, label: t('dash_t4'), icon: <Box className="w-4 h-4" /> },
        { id: 4, label: t('dash_t5'), icon: <MapPin className="w-4 h-4" /> },
        { id: 5, label: t('dash_t6'), icon: <Clock className="w-4 h-4" /> },
    ];

    const tabData = {
        0: {
            chart: [40, 70, 45, 90, 65, 85, 100],
            top: [
                { name: "CBO - Broad Scaling", val: "+24%", roas: "4.8", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Lookalike 1% Buyers", val: "+12%", roas: "3.2", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Retargeting DPA", val: "-5%", roas: "1.9", color: "text-red-500", bg: "bg-red-500/10" },
                { name: "ABO - Intérêts", val: "-15%", roas: "1.2", color: "text-red-500", bg: "bg-red-500/10" },
            ]
        },
        1: {
            chart: [20, 35, 25, 60, 40, 75, 55],
            top: [
                { name: "Vidéo UGC - Test 3", val: "+31%", roas: "5.2", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Image Promo 50%", val: "+18%", roas: "3.5", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Vidéo Produit Brut", val: "+2%", roas: "2.1", color: "text-amber-500", bg: "bg-amber-500/10" },
                { name: "Carrousel Lifestyle", val: "-8%", roas: "1.5", color: "text-red-500", bg: "bg-red-500/10" },
            ]
        },
        2: {
            chart: [80, 60, 95, 70, 85, 60, 40],
            top: [
                { name: "LAL 1% Acheteurs", val: "+28%", roas: "4.5", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Intérêts: Cosmétique", val: "+15%", roas: "3.1", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Broad - Femmes 18-35", val: "+8%", roas: "2.5", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Intérêts: Marques luxe", val: "-12%", roas: "1.4", color: "text-red-500", bg: "bg-red-500/10" },
            ]
        },
        3: {
            chart: [15, 20, 10, 45, 30, 60, 90],
            top: [
                { name: "Sérum Anti-Âge", val: "+45%", roas: "6.1", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Crème Hydratante Nuit", val: "+22%", roas: "3.8", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Pack Routine Essentielle", val: "+15%", roas: "3.0", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Gommage Visage", val: "-4%", roas: "1.8", color: "text-red-500", bg: "bg-red-500/10" },
            ]
        },
        4: {
            chart: [50, 45, 55, 40, 60, 35, 70],
            top: [
                { name: "Alger (16)", val: "+35%", roas: "4.9", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Oran (31)", val: "+26%", roas: "4.2", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Blida (09)", val: "+14%", roas: "3.0", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Constantine (25)", val: "-2%", roas: "1.9", color: "text-red-500", bg: "bg-red-500/10" },
            ]
        },
        5: {
            chart: [10, 30, 20, 60, 50, 90, 100],
            top: [
                { name: "Campagne Active #1", val: "+42%", roas: "5.5", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Retargeting Cart", val: "+38%", roas: "5.1", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Flash Sale 24h", val: "+15%", roas: "3.2", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { name: "Ancienne Promo", val: "-25%", roas: "0.8", color: "text-red-500", bg: "bg-red-500/10" },
            ]
        }
    };

    return (
        <section id="profit" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12 animate-slide-up">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
                        <LayoutDashboard className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                        {t('dash_title')}
                    </h2>
                </div>

                <div className="bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    {/* Tabs Header */}
                    <div className="flex overflow-x-auto justify-center no-scrollbar border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50 p-2 gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                                    activeTab === tab.id 
                                        ? 'bg-white dark:bg-slate-800 text-primary shadow-sm border border-slate-200 dark:border-white/5' 
                                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                                }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Mockup */}
                    <div className="p-6 sm:p-10 min-h-[500px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-950/50 relative">
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                        
                        <div className="w-full space-y-6 relative z-10 animate-slide-up" key={activeTab}>
                            <div className="flex justify-between items-end mb-8">
                                <div className="text-left">
                                    <div className="text-sm font-bold text-slate-500 mb-1">Analyse détaillée</div>
                                    <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                                        {tabs[activeTab].icon}
                                        {tabs[activeTab].label}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute"></span>
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 relative"></span>
                                    En direct
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Main Chart Area */}
                                <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Évolution ROAS vs CPA</div>
                                        <div className="text-xs font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Derniers 7 jours</div>
                                    </div>
                                    
                                    <div className="flex-1 flex flex-col justify-end h-56 mt-6 relative">
                                        {/* Grid lines */}
                                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
                                            {[1, 2, 3, 4].map((_, i) => (
                                                <div key={i} className="w-full border-b border-dashed border-slate-200 dark:border-white/10 h-0" />
                                            ))}
                                        </div>

                                        <div className="flex-1 flex items-end gap-3 sm:gap-6 w-full px-2 relative z-10">
                                            {tabData[activeTab].chart.map((height, i) => (
                                                <div key={i} className="flex-1 h-full flex flex-col justify-end group relative cursor-pointer">
                                                    
                                                    {/* Hover Tooltip */}
                                                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-black px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none z-20 shadow-xl whitespace-nowrap">
                                                        ROAS {(height / 20).toFixed(1)}
                                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-white rotate-45"></div>
                                                    </div>

                                                    {/* The Bar */}
                                                    <div 
                                                        className="w-full relative transition-all duration-700 ease-out group-hover:scale-y-[1.05] origin-bottom"
                                                        style={{ height: `${height}%` }}
                                                    >
                                                        {/* Glow effect on hover */}
                                                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
                                                        
                                                        {/* Main Bar Gradient */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/60 to-primary rounded-t-xl border-t border-x border-primary/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                                                        
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400">
                                        <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
                                    </div>
                                </div>

                                {/* Top Performers List */}
                                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Top {tabs[activeTab].label}</div>
                                    
                                    <div className="space-y-4">
                                        {tabData[activeTab].top.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center ${item.color} font-black text-xs`}>
                                                        #{i+1}
                                                    </div>
                                                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[100px] sm:max-w-[120px]">{item.name}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs font-black text-slate-900 dark:text-white">ROAS {item.roas}</div>
                                                    <div className={`text-[10px] font-bold ${item.color}`}>{item.val} profit</div>
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

export default Dashboard;
