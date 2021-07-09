import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import { RoutePath } from "../../../route/routes";
import { Container } from "../../components";
import { signOut } from "../../../api/PostAPI";
import { SignMenu, IconsMenu } from "./Menu";

import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../../../core";
import { ComponentIE } from "../../interface";
import { deleteUser } from "../../../api/DeleteAPI";

/**
 * @description Header Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Header: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const {
    setDarkModeAction,
    showAdAction,
    initUserInfoAction,
    reduxStore: {
      globalStore: { isShowAdContainer },
      themeStore: { isDarkMode },
      userStore,
    },
  } = props;

  const history = useHistory();
  const _routePush = useCallback((route: string) => {
    history.push(route);
  }, []);

  const { i18n } = useTranslation();
  const _setLaunage = useCallback((lng: string) => {
    setLocalStorageItem({ lng });
    i18n.changeLanguage(lng);
  }, []);

  const _updateUserInfo = useCallback(() => {}, []);

  const _showTemplateModal = useCallback(() => {}, []);

  const _darkMode = useCallback(() => {
    if (_.isFunction(setDarkModeAction)) {
      setLocalStorageItem({ darkMode: !isDarkMode });
      setDarkModeAction(!isDarkMode);
    }
  }, [isDarkMode]);

  const _showAdContainer = useCallback(() => {
    if (_.isFunction(showAdAction)) {
      showAdAction(!isShowAdContainer);
    }
  }, [isShowAdContainer]);

  const _signOut = async ({ isDelete = false }: { isDelete: boolean }) => {
    try {
      const token = getLocalStorageItem("token");

      if (!_.isEmpty(token)) {
        if (isDelete === true) {
          await deleteUser();
        } else {
          await signOut();
        }

        // token 삭제
        removeLocalStorageItem("token");
        // 리덕스 초기화
        initUserInfoAction();
        _routePush(RoutePath.DASHBOARD);
      } else {
        if (_.isFunction(window.globalFunc.showModalAction)) {
          window.globalFunc.showModalAction({
            type: "MESSAGE",
            item: {
              childrenProps: { message: "비정상적인 접근입니다." },
            },
          });
        }
        await signOut();
      }
    } catch (e) {
      console.log("_signOut Error", e);
    }
  };

  return (
    <Container.HeaderContainer>
      <IconsMenu
        isShowAdContainer={isShowAdContainer}
        _routePush={_routePush}
        _darkMode={_darkMode}
        _showAdContainer={_showAdContainer}
        _setLaunage={_setLaunage}
        _showTemplateModal={_showTemplateModal}
      />
      <SignMenu
        userInfo={userStore}
        _routePush={_routePush}
        _signOut={_signOut}
        _updateUserInfo={_updateUserInfo}
      />
    </Container.HeaderContainer>
  );
};

export default React.memo(Header);
