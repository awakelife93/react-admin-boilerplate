import React, { createContext } from "react";
import { ReduxActionType } from "../../redux/type";

export const ActionContext = createContext<ReduxActionType | null>(null);

const ActionProvider = ({
  children,
  initContentsAction,
  getContentsAction,
  initThemeAction,
  setThemeAction,
  initShowAdAction,
  showAdAction,
  initShowModalAction,
  showModalAction,
  setUserInfoAction,
  initUserInfoAction,
} : { children: React.ReactElement } & ReduxActionType) => {
  return (
    <ActionContext.Provider
      value={{
        initContentsAction,
        getContentsAction,
        initThemeAction,
        setThemeAction,
        initShowAdAction,
        showAdAction,
        initShowModalAction,
        showModalAction,
        setUserInfoAction,
        initUserInfoAction,
      }}
    >
      {children}
    </ActionContext.Provider>
  )
};

export default ActionProvider;