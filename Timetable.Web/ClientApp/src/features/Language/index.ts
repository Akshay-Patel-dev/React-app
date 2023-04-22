import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useAppSelector } from '../../app/hooks';
import { selectLanguage } from '../Reducers/languageSlice';
import hi from './local/hi';
import hn from './local/hn';
import en from './local/en';

function useLanguage() {
  const lang = useAppSelector(selectLanguage);
  return lang;
}

function useInitI18n() {
  const lang = useLanguage();
  i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
      en: {
        translation: en,
      },
      hn: {
        translation: hn,
      },
      hi: {
        translation: hi,
      },
    },
    fallbackLng: 'hi',
    lng: lang,
    debug: true,
  });
  return i18n;
}


export default useInitI18n;
