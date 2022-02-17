import { ScrollFadeIn, TopDownMove } from "./animation";
import i18n, { I18nCommandEnum } from "./i18n";
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
  initWindowFunc,
  initWindowObject,
  getWindowDataLength,
  getWindowData,
  removeWindowData,
  clearWindowData,
  setWindowData,
  i18n,
  I18nCommandEnum,
  ScrollFadeIn,
  TopDownMove,
};
