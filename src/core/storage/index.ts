import _ from "lodash";

export const getLocalStorageItem = (key: string): string | null =>
  window.localStorage.getItem(key);

export const getLocalStorageItems = (
  keys: string[]
): { [index: string]: string } => {
  let storageItems: {
    [index: string]: string;
  } = {};

  _.forEach(keys, (key: string) => {
    const storageItem = getLocalStorageItem(key);

    if (storageItem !== null) {
      storageItems[key] = storageItem;
    }
  });

  return storageItems;
};

export const setLocalStorageItem = (item: any): void => {
  _.forEach(Object.keys(item), (key: string) => {
    window.localStorage.setItem(key, item[key]);
  });
};

export const removeLocalStorageItem = (key: string): void =>
  window.localStorage.removeItem(key);

export const removeLocalStorageItems = (keys: string[]): void => {
  _.forEach(keys, (key: string) => {
    removeLocalStorageItem(key);
  });
};

export const clearLocalStorageItem = (): void => window.localStorage.clear();
