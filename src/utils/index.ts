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

export const validationObject = (object: any): boolean => {
  const keys = Object.keys(object);

  if (!_.isArray(keys) || _.isEmpty(keys)) return false;

  return keys.every((key) => {
    return !_.isUndefined(object[key]) && !_.isEmpty(object[key]);
  });
};

/**
 * @description
 * roleId === 1 사용자
 * roleId === 2 관리자
 * @param userRoles
 * @returns
 */
export const isUser = (userRoles: number[]) =>
  userRoles.some((roleId: number) => {
    return roleId === 1;
  });

export const isAdmin = (userRoles: number[]) =>
  userRoles.some((roleId: number) => {
    return roleId === 2;
  });
