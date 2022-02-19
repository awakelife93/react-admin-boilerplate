import themeWorker from "../../reducer/theme";

export const initDarkModeAction = () => themeWorker.actions.initDarkMode();

export const setDarkModeAction = (value: boolean) =>
  themeWorker.actions.setDarkMode({ isDarkMode: value });
