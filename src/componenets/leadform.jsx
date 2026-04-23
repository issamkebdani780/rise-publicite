import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, AlertCircle } from 'lucide-react';

const LeadForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        nom: '',
        telephone: '',
        pays: '',
        budget: '',
        plateforme: '',
        probleme: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <section id="demo" className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 rounded-[2rem] shadow-2xl p-8 md:p-12 backdrop-blur-xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                                {t('form_title1')} <span className="text-primary">{t('form_title2')}</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-medium">
                                {t('form_sub')}
                            </p>
                            
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-white/5">
                                    <AlertCircle className="w-5 h-5 text-red-500" />
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{t('form_alert1')}</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-white/5">
                                    <AlertCircle className="w-5 h-5 text-amber-500" />
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{t('form_alert2')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-white/10 shadow-lg relative">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full blur-2xl opacity-20 animate-pulse" />
                            
                            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase">{t('form_lbl_nom')}</label>
                                        <input type="text" name="nom" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" onChange={handleChange} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase">{t('form_lbl_tel')}</label>
                                        <input type="tel" name="telephone" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase">{t('form_lbl_pays')}</label>
                                        <input type="text" name="pays" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" onChange={handleChange} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase">{t('form_lbl_budget')}</label>
                                        <select name="budget" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none" onChange={handleChange}>
                                            <option value="">{t('form_opt_sel')}</option>
                                            <option value="<1k">&lt; 1000$</option>
                                            <option value="1k-5k">1000$ - 5000$</option>
                                            <option value="5k-10k">5000$ - 10000$</option>
                                            <option value=">10k">&gt; 10000$</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase">{t('form_lbl_plat')}</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[{id: 'Meta', label: 'Meta'}, {id: 'TikTok', label: 'TikTok'}, {id: 'Les deux', label: t('form_plat_both')}].map(plat => (
                                            <button 
                                                type="button" 
                                                key={plat.id}
                                                onClick={() => setFormData({...formData, plateforme: plat.id})}
                                                className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                                                    formData.plateforme === plat.id 
                                                    ? 'bg-primary/10 border-primary text-primary' 
                                                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-500 hover:border-slate-300 dark:hover:border-white/20'
                                                }`}
                                            >
                                                {plat.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase">{t('form_lbl_prob')}</label>
                                    <select name="probleme" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none" onChange={handleChange}>
                                        <option value="">{t('form_opt_sel')}</option>
                                        <option value="CPA haut">{t('form_prob_1')}</option>
                                        <option value="scaling">{t('form_prob_2')}</option>
                                        <option value="tracking">{t('form_prob_3')}</option>
                                        <option value="rentabilité">{t('form_prob_4')}</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full py-4 mt-2 bg-primary hover:bg-primary-hover text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all active:scale-95">
                                    {t('form_btn')}
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadForm;
