import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav_profit: "Ads Intelligence",
      nav_features: "Fonctionnalités",
      nav_pricing: "Tarifs",
      nav_faq: "FAQ",
      cta_demo: "Voir démo",
      cta_free_trial: "Essai gratuit",
      
      hero_h1: "Arrête de piloter ta publicité à l'aveugle.",
      hero_sub: "Sache quelles campagnes rapportent vraiment après confirmation, livraison et retours.",
      hero_cta1: "Lancer mon essai",
      hero_cta2: "Voir dashboard live",
      hero_trial: "14 Jours d'essai",
      hero_no_cc: "Sans carte bancaire",
      
      hero_dash_live: "Live Dashboard",
      hero_dash_budget: "Budget pub",
      hero_dash_revenue: "CA généré",
      hero_dash_profit: "Profit net",
      hero_dash_win_camp: "Campagne gagnante",
      hero_dash_cut_camp: "Campagne à couper",
      hero_dash_cpa: "CPA livré réel",
      hero_dash_orders: "Commandes",
      hero_dash_stock: "Stock",
      
      douleur_title: "Le ROAS brut ment souvent.",
      douleur_sub: "Les plateformes publicitaires optimisent pour le clic. Vous, vous cherchez du profit livré. Voici ce qui fausse votre rentabilité en temps réel :",
      douleur_b1: "Beaucoup de leads non confirmés",
      douleur_b2: "Retours non intégrés",
      douleur_b3: "Coûts cachés ignorés",
      douleur_b4: "Scaling au hasard",
      
      douleur_dash_title: "Tableau de bord stratégique",
      douleur_dash_time: "30 derniers jours",
      douleur_dash_conv: "Conversion",
      douleur_dash_aov: "Panier Moyen",
      douleur_dash_delivery: "Livraison",
      douleur_dash_sales: "Évolution des ventes",
      douleur_dash_products: "Top Produits",
      
      promesse_title: "Enfin la vérité sur chaque campagne",
      promesse_badge: "Algorithme de Réconciliation Exacte",
      promesse_c1: "coût par lead",
      promesse_c2: "coût par commande confirmée",
      promesse_c3: "coût par commande livrée",
      promesse_c4: "profit par campagne",
      promesse_c5: "profit par créative",
      promesse_c6: "profit par audience",
      
      dash_title: "Le cockpit media buyer / CEO",
      dash_t1: "Campagnes",
      dash_t2: "Créatives",
      dash_t3: "Audiences",
      dash_t4: "Produits",
      dash_t5: "Zones",
      dash_t6: "Temps réel",
      
      dec_title: "En 5 minutes tu sais quoi faire",
      dec_1: "doubler budget campagne rentable",
      dec_2: "couper ad set toxique",
      dec_3: "changer créative faible CTR",
      dec_4: "isoler ville rentable",
      dec_5: "pousser produit gagnant",
      
      cod_title: "Pensé pour le vrai e-commerce COD",
      cod_sub: "Ne mesure pas seulement les clics.",
      cod_1: "confirmation",
      cod_2: "livraison",
      cod_3: "retour",
      cod_4: "bénéfice final",

      footer_tag: "Le système d'exploitation n°1",
    }
  },
  en: {
    translation: {
      nav_profit: "Ads Intelligence",
      nav_features: "Features",
      nav_pricing: "Pricing",
      nav_faq: "FAQ",
      cta_demo: "View Demo",
      cta_free_trial: "Free Trial",
      
      hero_h1: "Stop managing your ads blindfolded.",
      hero_sub: "Know exactly which campaigns truly drive profit after confirmation, delivery, and returns.",
      hero_cta1: "Start Free Trial",
      hero_cta2: "View Live Dashboard",
      hero_trial: "14 Days Trial",
      hero_no_cc: "No credit card required",
      
      hero_dash_live: "Live Dashboard",
      hero_dash_budget: "Ad Budget",
      hero_dash_revenue: "Revenue Generated",
      hero_dash_profit: "Net Profit",
      hero_dash_win_camp: "Winning Campaign",
      hero_dash_cut_camp: "Campaign to Cut",
      hero_dash_cpa: "Real Delivered CPA",
      hero_dash_orders: "Orders",
      hero_dash_stock: "Stock",
      
      douleur_title: "Gross ROAS often lies.",
      douleur_sub: "Ad platforms optimize for clicks. You are looking for delivered profit. Here is what skews your real-time profitability:",
      douleur_b1: "Many unconfirmed leads",
      douleur_b2: "Returns not integrated",
      douleur_b3: "Hidden costs ignored",
      douleur_b4: "Random scaling",
      
      douleur_dash_title: "Strategic Dashboard",
      douleur_dash_time: "Last 30 days",
      douleur_dash_conv: "Conversion",
      douleur_dash_aov: "Average Order Value",
      douleur_dash_delivery: "Delivery Rate",
      douleur_dash_sales: "Sales Evolution",
      douleur_dash_products: "Top Products",
      
      promesse_title: "Finally the truth about every campaign",
      promesse_badge: "Exact Reconciliation Algorithm",
      promesse_c1: "cost per lead",
      promesse_c2: "cost per confirmed order",
      promesse_c3: "cost per delivered order",
      promesse_c4: "profit per campaign",
      promesse_c5: "profit per creative",
      promesse_c6: "profit per audience",
      
      dash_title: "The media buyer / CEO cockpit",
      dash_t1: "Campaigns",
      dash_t2: "Creatives",
      dash_t3: "Audiences",
      dash_t4: "Products",
      dash_t5: "Zones",
      dash_t6: "Real-time",
      
      dec_title: "In 5 minutes you know what to do",
      dec_1: "double profitable campaign budget",
      dec_2: "cut toxic ad set",
      dec_3: "change low CTR creative",
      dec_4: "isolate profitable city",
      dec_5: "push winning product",
      
      cod_title: "Built for real COD e-commerce",
      cod_sub: "Don't just measure clicks.",
      cod_1: "confirmation",
      cod_2: "delivery",
      cod_3: "return",
      cod_4: "final profit",

      footer_tag: "The #1 Operating System",
    }
  },
  ar: {
    translation: {
      nav_profit: "ذكاء الإعلانات",
      nav_features: "المميزات",
      nav_pricing: "الأسعار",
      nav_faq: "الأسئلة الشائعة",
      cta_demo: "شاهد العرض",
      cta_free_trial: "تجربة مجانية",
      
      hero_h1: "توقف عن إدارة إعلاناتك بعينين مغمضتين.",
      hero_sub: "اعرف بالضبط أي الحملات تحقق أرباحاً حقيقية بعد التأكيد، التوصيل والمرتجعات.",
      hero_cta1: "ابدأ التجربة المجانية",
      hero_cta2: "لوحة التحكم المباشرة",
      hero_trial: "14 يوم تجربة",
      hero_no_cc: "بدون بطاقة ائتمان",
      
      hero_dash_live: "لوحة تحكم مباشرة",
      hero_dash_budget: "ميزانية الإعلانات",
      hero_dash_revenue: "الإيرادات المحققة",
      hero_dash_profit: "الربح الصافي",
      hero_dash_win_camp: "حملة رابحة",
      hero_dash_cut_camp: "حملة يجب إيقافها",
      hero_dash_cpa: "تكلفة الشراء الحقيقية",
      hero_dash_orders: "الطلبات",
      hero_dash_stock: "المخزون",
      
      douleur_title: "الـ ROAS الإجمالي غالباً ما يكذب.",
      douleur_sub: "منصات الإعلانات تعمل على تحسين النقرات. بينما أنت تبحث عن الربح الفعلي بعد التوصيل. إليك ما يشوه ربحيتك في الوقت الفعلي:",
      douleur_b1: "العديد من الطلبات غير المؤكدة",
      douleur_b2: "مرتجعات غير محسوبة",
      douleur_b3: "تكاليف خفية متجاهلة",
      douleur_b4: "توسيع ميزانية عشوائي",
      
      douleur_dash_title: "لوحة تحكم استراتيجية",
      douleur_dash_time: "آخر 30 يوم",
      douleur_dash_conv: "التحويل",
      douleur_dash_aov: "متوسط سلة المشتريات",
      douleur_dash_delivery: "معدل التوصيل",
      douleur_dash_sales: "تطور المبيعات",
      douleur_dash_products: "أفضل المنتجات",
      
      promesse_title: "أخيراً الحقيقة حول كل حملة",
      promesse_badge: "خوارزمية المطابقة الدقيقة",
      promesse_c1: "التكلفة لكل عميل محتمل",
      promesse_c2: "التكلفة لكل طلب مؤكد",
      promesse_c3: "التكلفة لكل طلب تم توصيله",
      promesse_c4: "الربح لكل حملة",
      promesse_c5: "الربح لكل إعلان",
      promesse_c6: "الربح لكل جمهور",
      
      dash_title: "قمرة قيادة مشتري الوسائط / المدير التنفيذي",
      dash_t1: "الحملات",
      dash_t2: "الإعلانات",
      dash_t3: "الجمهور",
      dash_t4: "المنتجات",
      dash_t5: "المناطق",
      dash_t6: "الوقت الفعلي",
      
      dec_title: "في 5 دقائق تعرف ما يجب فعله",
      dec_1: "مضاعفة ميزانية الحملة الرابحة",
      dec_2: "إيقاف مجموعة إعلانية سامة",
      dec_3: "تغيير إعلان منخفض النقرات",
      dec_4: "عزل مدينة مربحة",
      dec_5: "دفع منتج ناجح",
      
      cod_title: "مصمم للتجارة الإلكترونية الحقيقية (الدفع عند الاستلام)",
      cod_sub: "لا تقم فقط بقياس النقرات.",
      cod_1: "التأكيد",
      cod_2: "التوصيل",
      cod_3: "المرتجع",
      cod_4: "الربح النهائي",

      footer_tag: "نظام التشغيل رقم 1",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
