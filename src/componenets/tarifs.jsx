import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const Tarifs = () => {
    const { t } = useTranslation();

    const plans = [
        {
            name: "Starter Ads",
            desc: t('tarifs_st_desc'),
            price: "4 900",
            features: [t('tarifs_f_st_1'), t('tarifs_f_st_2'), t('tarifs_f_st_3'), t('tarifs_f_st_4')],
            highlighted: false
        },
        {
            name: "Growth Ads",
            desc: t('tarifs_gr_desc'),
            price: "12 900",
            features: [t('tarifs_f_gr_1'), t('tarifs_f_gr_2'), t('tarifs_f_gr_3'), t('tarifs_f_gr_4'), t('tarifs_f_gr_5')],
            highlighted: true
        },
        {
            name: "Empire Ads",
            desc: t('tarifs_em_desc'),
            price: "29 900",
            features: [t('tarifs_f_em_1'), t('tarifs_f_em_2'), t('tarifs_f_em_3'), t('tarifs_f_em_4'), t('tarifs_f_em_5')],
            highlighted: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-white dark:bg-[#020617] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        {t('tarifs_title')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, idx) => (
                        <div 
                            key={idx}
                            className={`rounded-[2rem] p-8 border ${
                                plan.highlighted 
                                ? 'bg-slate-950 dark:bg-slate-900 border-primary shadow-2xl shadow-primary/20 scale-105 relative z-10' 
                                : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/5'
                            }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                    {t('tarifs_rec')}
                                </div>
                            )}
                            
                            <div className="text-center mb-8">
                                <h3 className={`text-xl font-black mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {plan.desc}
                                </p>
                            </div>
                            
                            <div className="text-center mb-8">
                                <span className={`text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                    <span dir="ltr">{plan.price}</span>
                                </span>
                                <span className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}> {t('tarifs_month')}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feat, fidx) => (
                                    <li key={fidx} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                            plan.highlighted ? 'bg-primary/20 text-primary' : 'bg-emerald-500/10 text-emerald-500'
                                        }`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className={`text-sm font-bold ${plan.highlighted ? 'text-slate-300' : 'text-slate-700 dark:text-slate-300'}`}>
                                            {feat}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-black text-sm transition-all active:scale-95 ${
                                plan.highlighted 
                                ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25' 
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700'
                            }`}>
                                {t('tarifs_cta')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tarifs;
