import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            text: "On pensait qu'une campagne cartonnait. Elle nous faisait perdre.",
            author: "Amine. M",
            role: "E-commerçant COD"
        },
        {
            text: "Après 14 jours : bénéfice pub +38%.",
            author: "Sarah L.",
            role: "CEO Marque Cosmétique"
        },
        {
            text: "Mon media buyer travaille enfin avec de vraies données.",
            author: "Younes R.",
            role: "Propriétaire Agence E-com"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-[#020617]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none hover:-translate-y-2 transition-transform relative group">
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 dark:text-white/5 group-hover:text-primary/10 transition-colors" />
                            <p className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-8 relative z-10 leading-relaxed">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black">
                                    {review.author[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white text-sm">{review.author}</div>
                                    <div className="text-xs text-slate-500 font-medium">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
