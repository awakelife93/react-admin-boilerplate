import { ReduxProviderActionType, ReduxType, UserStoreType } from "@/redux/type";
import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { ModalItem } from "../components/Modal/type";

export const ActionContext = createContext<ReduxProviderActionType | null>(null);

const ActionProvider = ({ children, useRedux } : { children: React.ReactElement, useRedux: ReduxType }) => {
  const {
    initShowModalAction,
    initUserInfoAction,
    setUserInfoAction,
    showModalAction
  } = require(`../../redux/${useRedux}/action`);
    
  const dispatch = useDispatch();

  const _initShowModalAction = () => {
    dispatch(initShowModalAction());
  };

  const _showModalAction = (value: ModalItem) => {
    dispatch(showModalAction(value));
  };

  const _setUserInfoAction = (value: UserStoreType) => {
    dispatch(setUserInfoAction(value));
  }

  const _initUserInfoAction = () => {
    dispatch(initUserInfoAction());
  };

  return (
    <ActionContext.Provider
      value={{
        initShowModalAction: _initShowModalAction,
        showModalAction: _showModalAction,
        setUserInfoAction: _setUserInfoAction,
        initUserInfoAction: _initUserInfoAction,
      }}
    >
      {children}
    </ActionContext.Provider>
  )
};

export default ActionProvider;