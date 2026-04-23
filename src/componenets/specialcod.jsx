import React from 'react';
import { PhoneCall, Truck, RefreshCcw, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SpecialCOD = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-slate-50/50 dark:bg-slate-950 relative">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 animate-slide-up max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                        {t('cod_title')}
                    </h2>
                    <div className="inline-block bg-white dark:bg-slate-900 py-3 px-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium">
                            {t('cod_sub')} <span className="font-black text-primary">{t('cod_measure')}</span>
                        </p>
                    </div>
                </div>

                {/* Irregular Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    
                    {/* Confirmation (Wide) */}
                    <div className="md:col-span-2 bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-slate-900/50 p-8 lg:p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <div className="relative z-10 max-w-sm">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6">
                                <PhoneCall className="w-7 h-7 text-blue-500" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
                                {t('cod_1_title')}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">
                                {t('cod_1_desc')}
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -right-4 -bottom-16 text-[200px] font-black text-blue-500/5 dark:text-blue-500/10 rotate-12 select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            1
                        </div>
                    </div>

                    {/* Livraison (Tall) */}
                    <div className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-white to-emerald-50/50 dark:from-slate-900 dark:to-slate-900/50 p-8 lg:p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between">
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-6">
                                <Truck className="w-7 h-7 text-emerald-500" />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
                                {t('cod_2_title')}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium mb-12">
                                {t('cod_2_desc')}
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <div className="mt-auto text-[220px] leading-[0.8] font-black text-emerald-500/5 dark:text-emerald-500/10 text-center select-none pointer-events-none group-hover:-translate-y-4 transition-transform duration-700">
                            2
                        </div>
                    </div>

                    {/* Retour (Square) */}
                    <div className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-5">
                            <RefreshCcw className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                            {t('cod_3_title')}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium relative z-10">
                            {t('cod_3_desc')}
                        </p>
                        <div className="absolute -right-4 -bottom-10 text-[120px] font-black text-orange-500/5 dark:text-orange-500/10 select-none pointer-events-none">
                            3
                        </div>
                    </div>

                    {/* Bénéfice (Square) */}
                    <div className="bg-primary p-8 lg:p-10 rounded-[2.5rem] border border-primary-hover relative overflow-hidden shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-500 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5 relative z-10">
                            <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2 relative z-10">
                            {t('cod_4_title')}
                        </h3>
                        <p className="text-sm text-white/80 font-medium relative z-10">
                            {t('cod_4_desc')}
                        </p>
                        {/* Glow and decoration */}
                        <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none group-hover:bg-white/30 transition-colors duration-500" />
                        <div className="absolute -right-4 -bottom-10 text-[120px] font-black text-white/5 select-none pointer-events-none">
                            4
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SpecialCOD;
