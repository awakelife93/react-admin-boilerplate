export const getLocalStorageItem = (key: string): string | null =>
  window.localStorage.getItem(key);

export const setLocalStorageItem = (item: any): void => {
  Object.keys(item).forEach((key) => {
    window.localStorage.setItem(key, item[key]);
  });
};

export const removeLocalStorageItem = (key: string): void =>
  window.localStorage.removeItem(key);

export const clearLocalStorageItem = (): void => window.localStorage.clear();
