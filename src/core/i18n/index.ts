import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./resources/en.json";
import ko from "./resources/ko.json";

/**
 * @description
 * i18n Launage Command Type 정의
 * 자동으로 command를 만들어주는 함수를 만들까 했지만, 어차피 엔티티를 정의해줘야 하는거 Enum으로 땄음.
 */
export enum I18nCommandEnum {
  // * 언어 종류
  KO = "ko",
  EN = "en",

  // * Auth 종류
  SIGN_IN = "sign_in",
  SIGN_OUT = "sign_out",
  SIGN_UP = "sign_up",

  // * Common
  CREATE = "create",
  MODIFY = "modify",
  SEARCH = "search",
  SEARCH_NOTE = "search_note",

  // * User Model
  ROLE = "role",
  EMAIL = "email",
  NICKNAME = "nickname",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirm_password",

  // * Contents Model
  CONTENTS_TITLE = "contents_title",
  CONTENTS_SUB_TITLE = "contents_sub_title",
  CONTENTS_DESC = "contents_desc",
  CONTENTS_IMAGE = "contents_image",

  // * Design Model
  DESIGN_ID = "design_id",
  DESIGN_NAME = "design_name",

  // * User Model - Button
  UPDATE_USER_INFO = "update_user_info",
  DELETE_ACCOUNT = "delete_account",

  // * Tab
  DASHBOARD = "dashboard",
  USER_LIST = "user_list",
  CONTENTS_LIST = "contents_list",
  DESIGN_LIST = "design_list",
}

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
  lng: I18nCommandEnum.KO,
  fallbackLng: I18nCommandEnum.KO,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
