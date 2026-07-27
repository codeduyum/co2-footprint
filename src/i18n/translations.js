// Unterstützte Sprachen mit ihrer Schreibrichtung
// ltr = left-to-right, rtl = right-to-left
export const LANGUAGES = {
  de: { label: 'Deutsch', dir: 'ltr' },
  en: { label: 'English', dir: 'ltr' },
  ar: { label: 'العربية', dir: 'rtl' },
}

export const translations = {
  de: {
    tagline: 'Transparenz über Emissionen',
    navStart: 'Start',
    navData: 'Daten',
    navMethod: 'Methodik',
    navContact: 'Kontakt',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    language: 'Sprache',
    tableHeading: 'CO₂-Emissionsdaten',
    colCountry: 'Land',
    colCompany: 'Unternehmen',
    colSector: 'Sektor',
    colEmissions: 'CO₂ (Mt/Jahr)',
    colYear: 'Jahr',
    filterSearch: 'Suche',
    filterPlaceholder: 'Land oder Unternehmen …',
    allCountries: 'Alle Länder',
    allCompanies: 'Alle Unternehmen',
    reset: 'Filter zurücksetzen',
    results: 'Treffer',
    noResults: 'Keine Einträge gefunden.',
    footerImprint: 'Impressum',
    footerPrivacy: 'Datenschutz',
    footerTerms: 'Nutzungsbedingungen',
    footerDisclaimer: 'Alle Angaben ohne Gewähr. Die dargestellten Emissionsdaten sind frei erfunden und stellen keine realen Werte dar.',
    footerCopyright: '© 2026 CO₂-Footprint - Ein Projekt einer gemeinnützigen Klimaschutzorganisation.',
    localNavHeading: 'Auf dieser Seite',
    localIntro: 'Einleitung',
    localTable: 'Emissionsdaten',
    localMethod: 'Methodik',
    introHeading: 'Wer emittiert wie viel CO₂?',
    introText:
      'Diese Plattform macht sichtbar, welche Länder und Unternehmen jährlich wie viel Kohlendioxid ausstoßen. Alle gezeigten Zahlen sind fiktive Beispieldaten.',
    methodHeading: 'Methodik',
    methodText:
      'Die Emissionswerte sind in Megatonnen CO₂ pro Jahr angegeben. In einer produktiven Anwendung würden die Daten aus geprüften, öffentlich zugänglichen Quellen stammen.',
    contactHeading: 'Kontakt',
    contactText:
      'Diese Plattform wird von einer gemeinnützigen Klimaschutzorganisation betrieben. Für Rückfragen zu den Daten oder zur Methodik erreichen Sie uns unter kontakt@co2-footprint.example.',
    imprintText:
      'Angaben gemäß § 5 TMG: CO₂-Footprint ist ein fiktives Demonstrationsprojekt im Rahmen einer Fallstudie. Vertreten durch die Projektleitung, Musterstraße 1, 12345 Musterstadt.',
    privacyText:
      'Diese Anwendung verarbeitet keine personenbezogenen Daten. Es werden weder Cookies gesetzt noch Nutzungsdaten an Dritte übermittelt. Sämtliche Verarbeitung findet ausschließlich im Browser statt.',
    termsText:
      'Die Inhalte dieser Seite dienen ausschließlich Demonstrationszwecken. Die dargestellten Emissionsdaten sind frei erfunden und dürfen nicht als Grundlage für Entscheidungen herangezogen werden.',

  },

  en: {
    tagline: 'Transparency about emissions',
    navStart: 'Home',
    navData: 'Data',
    navMethod: 'Methodology',
    navContact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    tableHeading: 'CO₂ emission data',
    colCountry: 'Country',
    colCompany: 'Company',
    colSector: 'Sector',
    colEmissions: 'CO₂ (Mt/year)',
    colYear: 'Year',
    filterSearch: 'Search',
    filterPlaceholder: 'Search country or company …',
    allCountries: 'All countries',
    allCompanies: 'All companies',
    reset: 'Reset filters',
    results: 'results',
    noResults: 'No entries found.',
    footerImprint: 'Imprint',
    footerPrivacy: 'Privacy policy',
    footerTerms: 'Terms of use',
    footerDisclaimer: 'All information without guarantee. The emission data shown is fictional and does not represent real values.',
    footerCopyright: '© 2026 CO₂-Footprint - A project by a non-profit climate organization.',
    localNavHeading: 'On this page',
    localIntro: 'Introduction',
    localTable: 'Emission data',
    localMethod: 'Methodology',
    introHeading: 'Who emits how much CO₂?',
    introText:
      'This platform reveals how much carbon dioxide countries and companies emit each year. All figures shown are fictional sample data.',
    methodHeading: 'Methodology',
    methodText:
      'Emission values are given in megatonnes of CO₂ per year. In a production application, the data would come from verified, publicly available sources.',
    contactHeading: 'Contact',
    contactText:
      'This platform is operated by a non-profit climate organization. For questions about the data or methodology, please contact us at kontakt@co2-footprint.example.',
    imprintText:
      'Legal information: CO₂-Footprint is a fictional demonstration project created as part of a case study. Represented by the project management, Musterstraße 1, 12345 Musterstadt, Germany.',
    privacyText:
      'This application does not process any personal data. No cookies are set and no usage data is transmitted to third parties. All processing takes place exclusively in the browser.',
    termsText:
      'The content of this site is provided for demonstration purposes only. The emission data shown is fictional and must not be used as a basis for any decisions.',

  },

  ar: {
    tagline: 'الشفافية بشأن الانبعاثات',
    navStart: 'الرئيسية',
    navData: 'البيانات',
    navMethod: 'المنهجية',
    navContact: 'اتصل بنا',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    language: 'اللغة',
    tableHeading: 'بيانات انبعاثات ثاني أكسيد الكربون',
    colCountry: 'الدولة',
    colCompany: 'الشركة',
    colSector: 'القطاع',
    colEmissions: 'ثاني أكسيد الكربون (مليون طن/سنة)',
    colYear: 'السنة',
    filterSearch: 'بحث',
    filterPlaceholder: 'ابحث عن دولة أو شركة …',
    allCountries: 'كل الدول',
    allCompanies: 'كل الشركات',
    reset: 'إعادة ضبط',
    results: 'نتيجة',
    noResults: 'لا توجد نتائج.',
    footerImprint: 'بيانات الناشر',
    footerPrivacy: 'سياسة الخصوصية',
    footerTerms: 'شروط الاستخدام',
    footerDisclaimer:
      'جميع المعلومات بدون ضمان. بيانات الانبعاثات المعروضة خيالية ولا تمثل قيمًا حقيقية.',
    footerCopyright: '© 2026 CO₂-Footprint - مشروع لمنظمة مناخية غير ربحية.',
    localNavHeading: 'في هذه الصفحة',
    localIntro: 'مقدمة',
    localTable: 'بيانات الانبعاثات',
    localMethod: 'المنهجية',
    introHeading: 'من يُصدر كمية أكبر من ثاني أكسيد الكربون؟',
    introText:
      'تُظهر هذه المنصة كمية ثاني أكسيد الكربون التي تُطلقها الدول والشركات سنويًا. جميع الأرقام المعروضة بيانات تجريبية خيالية.',
    methodHeading: 'المنهجية',
    methodText:
      'تُعطى قيم الانبعاثات بالميغا طن سنويًا. في تطبيق حقيقي، ستأتي البيانات من مصادر موثوقة ومتاحة للعموم.',
    contactHeading: 'اتصل بنا',
    contactText:
      'تُدار هذه المنصة من قبل منظمة مناخية غير ربحية. للاستفسارات حول البيانات أو المنهجية، يرجى مراسلتنا على kontakt@co2-footprint.example.',
    imprintText:
      'معلومات قانونية: CO₂-Footprint هو مشروع توضيحي خيالي أُنشئ في إطار دراسة حالة. ممثلًا بإدارة المشروع، Musterstraße 1، 12345 Musterstadt، ألمانيا.',
    privacyText:
      'لا يعالج هذا التطبيق أي بيانات شخصية. لا يتم استخدام ملفات تعريف الارتباط ولا يتم نقل بيانات الاستخدام إلى أطراف ثالثة. تتم جميع المعالجة داخل المتصفح فقط.',
    termsText:
      'محتوى هذه الصفحة مخصص لأغراض العرض التوضيحي فقط. بيانات الانبعاثات المعروضة خيالية ولا يجوز استخدامها كأساس لأي قرارات.',
  },

}

export const dataLabels = {
    de: {
        Deutschland: 'Deutschland',
        USA: 'USA',
        China: 'China',
        Indien: 'Indien',
        Brasilien: 'Brasilien',
        Russland: 'Russland',
        Japan: 'Japan',
        Frankreich: 'Frankreich',
        Kanada: 'Kanada',
        Energie: 'Energie',
        Industrie: 'Industrie',
        'Öl & Gas': 'Öl & Gas',
        Landwirtschaft: 'Landwirtschaft',

    },

    en: {
        Deutschland: 'Germany',
        USA: 'USA',
        China: 'China',
        Indien: 'India',
        Brasilien: 'Brazil',
        Russland: 'Russia',
        Japan: 'Japan',
        Frankreich: 'France',
        Kanada: 'Canada',
        Energie: 'Energy',
        Industrie: 'Industry',
        'Öl & Gas': 'Oil & Gas',
        Landwirtschaft: 'Agriculture',

    },

    ar: {
        Deutschland: 'ألمانيا',
        USA: 'الولايات المتحدة',
        China: 'الصين',
        Indien: 'الهند',
        Brasilien: 'البرازيل',
        Russland: 'روسيا',
        Japan: 'اليابان',
        Frankreich: 'فرنسا',
        Kanada: 'كندا',
        Energie: 'الطاقة',
        Industrie: 'الصناعة',
        'Öl & Gas': 'النفط والغاز',
        Landwirtschaft: 'الزراعة',
    },
}