import {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
} from "./storage";
import {
  initWindowFunc,
  initWindowObject,
  getWindowDataLength,
  getWindowData,
  removeWindowData,
  clearWindowData,
  setWindowData,
} from "./window";
import i18n from "./i18n";
import { I18nCommandEnum } from "./i18n/type";
import { ScrollFadeIn, TopDownMove } from "./animation";

export {
  // local storage
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
  // window
  initWindowFunc,
  initWindowObject,
  getWindowDataLength,
  getWindowData,
  removeWindowData,
  clearWindowData,
  setWindowData,
  // i18n
  i18n,
  I18nCommandEnum,
  // animation
  ScrollFadeIn,
  TopDownMove,
};
