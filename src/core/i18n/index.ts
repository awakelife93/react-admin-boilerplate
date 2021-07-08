import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLng } from "../../common/const";

import en from "./resources/en.json";
import ko from "./resources/ko.json";

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  // 기본 언어
  lng: defaultLng,
  // 에러가 났을 시 대체할 언어
  fallbackLng: defaultLng,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
