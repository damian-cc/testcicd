import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEN from "locales/en/common.json";
import loginEN from "locales/en/login.json";

const defaultNS = "common";
const resources = {
  en: {
    common: commonEN,
    login: loginEN,
  },
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    defaultNS,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .finally();

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof commonEN;
    resources: typeof resources["en"];
  }
}
