import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIdx, setOpenIdx] = useState(0);

    const questions = [
        {
            q: "Compatible Meta et TikTok ?",
            a: "Oui, RiseManager s'intègre parfaitement avec Meta Ads et TikTok Ads via API officielles. Vous pouvez piloter vos deux comptes depuis un seul dashboard."
        },
        {
            q: "Peut-on suivre plusieurs comptes pub ?",
            a: "Absolument. Selon votre plan, vous pouvez connecter plusieurs comptes publicitaires et analyser la data de façon globale ou individuelle."
        },
        {
            q: "Données mises à jour en temps réel ?",
            a: "Oui, nous synchronisons vos données de ventes, de livraisons et de coûts publicitaires toutes les 5 minutes pour des décisions en direct."
        },
        {
            q: "Compatible COD ?",
            a: "RiseManager a été pensé prioritairement pour le Cash On Delivery. Il intègre le taux de confirmation, le taux de livraison et les retours pour calculer votre vrai bénéfice."
        },
        {
            q: "Multi boutiques ?",
            a: "Oui, le plan Empire Ads vous permet de connecter et de gérer plusieurs boutiques Shopify ou WooCommerce simultanément."
        },
        {
            q: "Export rapports ?",
            a: "Vous pouvez exporter tous vos rapports en CSV, PDF, ou les envoyer automatiquement par e-mail à votre équipe ou vos clients."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-slate-50 dark:bg-[#060c1f]">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Questions fréquentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {questions.map((item, idx) => (
                        <div 
                            key={idx} 
                            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                                openIdx === idx 
                                ? 'bg-white dark:bg-slate-900 border-primary/30 shadow-lg shadow-primary/5' 
                                : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10'
                            }`}
                        >
                            <button 
                                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold ${openIdx === idx ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                                    {item.q}
                                </span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                            </button>
                            
                            <div className={`transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 pt-0 text-slate-500 leading-relaxed font-medium">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
