import React from 'react';
import { Network, BarChart, ShoppingCart, MessageCircle, Smartphone, Share2, TrendingUp } from 'lucide-react';

const Integrations = () => {
    const nodes = [
        { id: 1, name: "Meta Ads", icon: <Share2 className="w-5 h-5" />, x: "20%", y: "20%", color: "text-blue-600", bg: "bg-blue-600/10" },
        { id: 2, name: "TikTok Ads", icon: <Smartphone className="w-5 h-5" />, x: "80%", y: "25%", color: "text-slate-900 dark:text-white", bg: "bg-slate-200 dark:bg-slate-800" },
        { id: 3, name: "Google Analytics", icon: <BarChart className="w-5 h-5" />, x: "15%", y: "50%", color: "text-amber-500", bg: "bg-amber-500/10" },
        { id: 4, name: "Snapchat Ads", icon: <Share2 className="w-5 h-5" />, x: "85%", y: "55%", color: "text-yellow-500", bg: "bg-yellow-500/10" },
        { id: 5, name: "RiseCart", icon: <img src='/public/ecosystem/risecart.jpg' />, x: "30%", y: "80%", color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { id: 6, name: "WhatsApp", icon: <MessageCircle className="w-5 h-5" />, x: "70%", y: "85%", color: "text-green-500", bg: "bg-green-500/10" },
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden border-t border-slate-100 dark:border-white/5">
            <style>{`
                @keyframes flowLine {
                    from { stroke-dashoffset: 24; }
                    to { stroke-dashoffset: 0; }
                }
                .animate-flow {
                    animation: flowLine 1s linear infinite;
                }
            `}</style>
            
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
                        <Network className="w-4 h-4" />
                        Écosystème Connecté
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Votre hub de vérité absolu
                    </h2>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
                        Connectez toutes vos sources de données. Nous aspirons, croisons et analysons tout en temps réel.
                    </p>
                </div>

                <div className="relative w-full aspect-square md:aspect-video max-w-4xl mx-auto rounded-[3rem] border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50 shadow-2xl overflow-hidden group">
                    
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] dark:bg-[url('/grid-dark.svg')] opacity-50 mix-blend-overlay"></div>

                    {/* SVG Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {nodes.map((node) => (
                            <line 
                                key={`line-${node.id}`}
                                x1="50%" y1="50%" 
                                x2={node.x} y2={node.y} 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeDasharray="8 8"
                                className="text-slate-300 dark:text-slate-700 animate-flow opacity-60 group-hover:text-primary/50 transition-colors duration-700"
                            />
                        ))}
                    </svg>

                    {/* Nodes Container */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        
                        {/* Center Node */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                            <div className="relative group/center">
                                {/* Glowing pulses */}
                                <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl animate-ping opacity-50" />
                                <div className="absolute inset-0 bg-primary/40 rounded-3xl blur-3xl group-hover/center:bg-primary/60 transition-colors duration-500" />
                                
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900 dark:bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center relative border border-slate-700 dark:border-white hover:scale-105 transition-transform duration-300">
                                    <TrendingUp className="w-10 h-10 md:w-14 md:h-14 text-white dark:text-slate-900 mb-2" />
                                    <span className="text-[10px] md:text-xs font-black text-white dark:text-slate-900 tracking-wider">PUBLICITÉ</span>
                                </div>
                            </div>
                        </div>

                        {/* Satellite Nodes */}
                        {nodes.map((node) => (
                            <div 
                                key={node.id} 
                                className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 group/node hover:scale-110 transition-transform duration-300 hover:z-20"
                                style={{ left: node.x, top: node.y }}
                            >
                                <div className="bg-white dark:bg-slate-950 p-2 md:p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl flex items-center gap-3 relative">
                                    {/* Pulse behind satellite icon */}
                                    <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl blur-md opacity-0 group-hover/node:opacity-100 transition-opacity" />
                                    
                                    <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-xl ${node.bg} ${node.color} flex items-center justify-center shadow-inner`}>
                                        {node.icon}
                                    </div>
                                    <span className="hidden md:block font-bold text-slate-900 dark:text-white text-sm whitespace-nowrap relative">
                                        {node.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Integrations;
