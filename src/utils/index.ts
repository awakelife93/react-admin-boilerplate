import { UserRoleType } from "@/api/interface";
import { UnknownObject } from "@/common/type";
import { getLocalStorageItem, i18n, initWindowFunc } from "@/core";
import _ from "lodash";

export const scrollTop = (): void => {
  window.scrollTo(0, 0);
};

export const removeBodyScroll = (): void => {
  document.body.style.overflow = "hidden";
};

export const revertBodyScroll = (): void => {
  document.body.style.overflow = "";
};

export const validationObject = (object: UnknownObject): boolean => {
  const keys: string[] = Object.keys(object);

  if (_.isEmpty(keys)) return false;

  return keys.every((key: string) => {
    return !_.isUndefined(object[key]) && !_.isEmpty(object[key]);
  });
};

export const isUser = (role: UserRoleType): boolean => role === "user";

export const isAdmin = (role: UserRoleType): boolean => role === "admin";

export const setDefaultLanguage = (): void => {
  const localStorageLng = getLocalStorageItem("lng");

  if (!_.isNull(localStorageLng) && localStorageLng !== i18n.language) {
    i18n.changeLanguage(localStorageLng);
  }
};

export const setWindowFunction = ({
  initUserInfoAction,
  showModalAction,
}: {
  initUserInfoAction: Function;
  showModalAction: Function;
}): void => {
  initWindowFunc({
    initUserInfoAction,
    showModalAction,
  });
};
