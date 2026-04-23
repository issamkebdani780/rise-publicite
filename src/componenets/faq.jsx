import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation();
    const [openIdx, setOpenIdx] = useState(0);

    const questions = [
        {
            q: t('faq_q1'),
            a: t('faq_a1')
        },
        {
            q: t('faq_q2'),
            a: t('faq_a2')
        },
        {
            q: t('faq_q3'),
            a: t('faq_a3')
        },
        {
            q: t('faq_q4'),
            a: t('faq_a4')
        },
        {
            q: t('faq_q5'),
            a: t('faq_a5')
        },
        {
            q: t('faq_q6'),
            a: t('faq_a6')
        }
    ];

    return (
        <section id="faq" className="py-24 bg-slate-50 dark:bg-[#060c1f]">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        {t('faq_title')}
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
