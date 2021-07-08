import _ from "lodash";

export const removeBodyScroll = (): void => {
  document.body.style.overflow = "hidden";
};

export const revertBodyScroll = (): void => {
  document.body.style.overflow = "";
};

export const validationObject = (object: any): boolean => {
  const keys = Object.keys(object);

  if (!_.isArray(keys)) return false;

  return keys.every((key) => {
    return !_.isUndefined(object[key]) && !_.isEmpty(object[key]);
  });
};
