import _ from "lodash";

type LocalStorageKey = "token" | "lng" | "darkMode";

type LocalStorageItem = {
  [key in LocalStorageKey]: unknown;
};

export const getLocalStorageItem = (key: LocalStorageKey): string | null =>
  window.localStorage.getItem(key);

export const getLocalStorageItems = (
  keys: LocalStorageKey[]
): LocalStorageItem => {
  const storageItems = {} as LocalStorageItem;

  _.forEach(keys, (key: LocalStorageKey) => {
    const storageItem = getLocalStorageItem(key);

    if (storageItem !== null) {
      storageItems[key] = storageItem;
    }
  });

  return storageItems;
};

export const setLocalStorageItem = (item: Partial<LocalStorageItem>): void => {
  const keys = Object.keys(item) as LocalStorageKey[];

  _.forEach(keys, (key: LocalStorageKey) => {
    const value = String(item[key]);

    if (!_.isEmpty(value)) {
      window.localStorage.setItem(key, value);
    }
  });
};

export const removeLocalStorageItem = (key: LocalStorageKey): void =>
  window.localStorage.removeItem(key);

export const removeLocalStorageItems = (keys: LocalStorageKey[]): void => {
  _.forEach(keys, (key: LocalStorageKey) => {
    removeLocalStorageItem(key);
  });
};

export const clearLocalStorageItem = (): void => window.localStorage.clear();
