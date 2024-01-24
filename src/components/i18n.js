// src/components/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to our Website!',
      homeContent: 'Explore our amazing content and features.',
      changeLanguage: 'Switch Language',
      aboutUs: 'About Us',
      aboutContent: 'Learn more about our company and mission.',
    },
  },
  hi: {
    translation: {
      welcome: 'हमारी वेबसाइट में आपका स्वागत है!',
      homeContent: 'हमारी शानदार सामग्री और सुविधाओं का अन्वेषण करें।',
      changeLanguage: 'भाषा बदलें',
      aboutUs: 'हमारे बारे में',
      aboutContent: 'हमारी कंपनी और मिशन के बारे में और जानें।',
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
