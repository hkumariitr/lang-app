import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      welcome: 'Welcome to our Website!',
      homeContent: 'Explore our amazing content and features.',
      aboutUs: 'About Us',
      aboutContent: 'Learn more about our company and mission.',
      changeLanguage: 'Switch Language',
    },
  },
  jp: {
    translation: {
      welcome: 'ウェブサイトへようこそ！',
      homeContent: '素晴らしいコンテンツや機能をご覧ください。',
      aboutUs: '会社について',
      aboutContent: '当社やミッションについて詳しく学んでください。',
      changeLanguage: '言語切り替え',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false, // not needed for React as it escapes by default
  },
});

export default i18n;
