import { Button, Container, Label, MenuBox } from "@/common/components";
import { CommonColor } from "@/common/styles";
import { I18nCommandEnum } from "@/core";
import { ReduxStoreType } from "@/redux/type";
import { RoutePath } from "@/route/routes";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

type SignMenuType = {
  routePush: (routePath: RoutePath) => void;
  _signOut: VoidFunction;
}

/**
 * @description Header Sign Component
 * @param {SignMenuType} props
 * @returns {React.ReactElement}
 */
const SignMenu: React.FC<SignMenuType> = (
  props: SignMenuType
): React.ReactElement => {
  const {
    routePush,
    _signOut,
  } = props;
  const {
    reduxStore: {
      userStore: {
        user: {
          isLogin,
          info: {
            name
          }
        }
      }
    }
  } = useSelector((state: ReduxStoreType) => state);

  const { t } = useTranslation();
  return (
    <Container.LayoutContainer>
      {!isLogin && (
        <Container.RowContainer>
          <Button.TextButton
            style={{
              color: CommonColor.WHITE,
            }}
            onClick={() => routePush(RoutePath.SIGN_IN)}
          >
            {t(I18nCommandEnum.SIGN_IN)}
          </Button.TextButton>
        </Container.RowContainer>
      )}
      {isLogin && (
        <Container.RowContainer>
          <MenuBox
            children={
              <Label.CommonLabel
                style={{
                  color: CommonColor.WHITE,
                  margin: 0,
                  cursor: "pointer",
                }}
              >
                {name}
              </Label.CommonLabel>
            }
            menuContainerStyle={{
              backgroundColor: CommonColor.WHITE,
              border: `1px solid ${CommonColor.DARK}`,
              borderRadius: 15,
              width: 150,
              height: 30,
              right: 10,
              position: "absolute",
              top: 60,
              padding: 10,
            }}
            menuItemStyle={{
              fontSize: 15,
              marginBottom: 5,
            }}
            renderType={"column"}
            renderItems={[
              {
                displayName: t(I18nCommandEnum.SIGN_OUT),
                value: () => _signOut(),
              },
            ]}
            onClick={(action: Function) => {
              if (_.isFunction(action)) action();
            }}
          />
        </Container.RowContainer>
      )}
    </Container.LayoutContainer>
  );
};

export default React.memo(SignMenu);
