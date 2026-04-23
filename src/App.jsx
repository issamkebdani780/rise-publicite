import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './componenets/header';
import Hero from './componenets/hero';
import Douleur from './componenets/douleur';
import Promesse from './componenets/promesse';
import Dashboard from './componenets/Dashboard';
import Decisions from './componenets/decision';
import SpecialCOD from './componenets/specialcod';
import Integrations from './componenets/integrations';
import Testimonials from './componenets/temoingages';
import Tarifs from './componenets/tarifs';
import LeadForm from './componenets/leadform';
import FAQ from './componenets/faq';
import Footer from './componenets/footer';
import './i18n';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language && i18n.language.startsWith('ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language || 'fr';
  }, [i18n.language]);

  return (
    <div className="bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 min-h-screen font-sans selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <Douleur />
        <Promesse />
        <Dashboard />
        <Decisions />
        <SpecialCOD />
        <Integrations />
        <Testimonials />
        <Tarifs />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;