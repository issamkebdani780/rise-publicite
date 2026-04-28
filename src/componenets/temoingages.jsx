import React, { useEffect, useRef, useState } from 'react';
import { Quote, Users, BarChart3, TrendingUp, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AnimatedCounter = ({ target, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 2000;
                    const startTime = performance.now();
                    const numericTarget = parseFloat(target.toString().replace(/[^0-9.]/g, ''));

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 4);
                        setCount(Math.floor(eased * numericTarget));
                        if (progress < 1) requestAnimationFrame(animate);
                        else setCount(numericTarget);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const Testimonials = () => {
    const { t } = useTranslation();

    const stats = [
        {
            value: 500,
            suffix: '+',
            label: t('trust_stat_1'),
            icon: <Users className="w-5 h-5" />,
        },
        {
            value: 2,
            suffix: 'M+',
            label: t('trust_stat_2'),
            icon: <BarChart3 className="w-5 h-5" />,
        },
        {
            prefix: 'x',
            value: 3.5,
            suffix: 'x',
            label: t('trust_stat_3'),
            icon: <TrendingUp className="w-5 h-5" />,
        },
        {
            value: 98,
            suffix: '%',
            label: t('trust_stat_4'),
            icon: <Award className="w-5 h-5" />,
        },
    ];

    const reviews = [
        {
            text: t('testi_1'),
            author: "Amine. M",
            role: t('testi_1_role')
        },
        {
            text: t('testi_2'),
            author: "Sarah L.",
            role: t('testi_2_role')
        },
        {
            text: t('testi_3'),
            author: "Younes R.",
            role: t('testi_3_role')
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                {/* ── Stats Section ── */}
                <div className="text-center mb-20 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {t('trust_badge')}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                        {t('trust_title')}
                    </h2>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-16">
                        {t('trust_sub')}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-white/5 shadow-lg shadow-slate-200/30 dark:shadow-none hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight" dir="ltr">
                                        <AnimatedCounter
                                            target={stat.value}
                                            suffix={stat.suffix}
                                            prefix={stat.prefix || ''}
                                        />
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Testimonials Cards ── */}
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/20 dark:shadow-none hover:-translate-y-2 transition-transform duration-300 relative group"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 dark:text-white/5 group-hover:text-primary/10 transition-colors" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

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
