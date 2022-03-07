import { signOut } from "@/api/PostAPI";
import { Container } from "@/common/components";
import useAction from "@/common/hooks/useAction";
import { IComponent } from "@/common/interface";
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "@/core";
import { RoutePath } from "@/route/routes";
import _ from "lodash";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IconsMenu, SignMenu } from "./Menu";

/**
 * @description Header Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Header: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const { initUserInfoAction } = useAction();
  const navigate = useNavigate();
  
  const routePush = useCallback(
    (route: string) => {
      navigate(route);
    },
    []
  );

  const { i18n } = useTranslation();
  const setLanguage = useCallback(
    (lng: string) => {
      setLocalStorageItem({ lng });
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const _signOut = async () => {
    try {
      const token = getLocalStorageItem("token");

      if (!_.isEmpty(token)) {
        await signOut();
        removeLocalStorageItem("token");
        initUserInfoAction();
        routePush(RoutePath.SIGN_IN);
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
    } catch (error: unknown) {
      console.log("_signOut Error", error);
    }
  };

  return (
    <Container.HeaderContainer>
      <IconsMenu routePush={routePush} setLanguage={setLanguage} />
      <SignMenu
        routePush={routePush}
        _signOut={_signOut}
      />
    </Container.HeaderContainer>
  );
};

export default React.memo(Header);
