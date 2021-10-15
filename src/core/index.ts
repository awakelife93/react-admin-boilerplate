import { ScrollFadeIn, TopDownMove } from "./animation";
import i18n from "./i18n";
import { I18nCommandEnum } from "./i18n/type";
import {
  clearLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "./storage";
import {
  clearWindowData,
  getWindowData,
  getWindowDataLength,
  initWindowFunc,
  initWindowObject,
  removeWindowData,
  setWindowData,
} from "./window";

export {
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
