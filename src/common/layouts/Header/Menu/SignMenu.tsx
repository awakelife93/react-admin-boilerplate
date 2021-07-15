import React from "react";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { I18nCommandEnum } from "../../../../core/i18n/type";
import { UserStoreIE } from "../../../../redux/interface";
import { RoutePath } from "../../../../route/routes";
import { Button, Container, Label, MenuBox } from "../../../components";
import { CommonColor } from "../../../styles";

interface SignMenuIE {
  userInfo: UserStoreIE;
  _routePush: Function;
  _signOut: Function;
}

/**
 * @description Header Sign Component
 * @param {SignActionIE} props
 * @returns {React.ReactElement}
 */
const SignMenu: React.FC<SignMenuIE> = (
  props: SignMenuIE
): React.ReactElement => {
  const {
    _routePush,
    _signOut,
    userInfo: { user },
  } = props;

  const { t } = useTranslation();
  return (
    <Container.LayoutContainer>
      {user.isLogin === false && (
        <Container.RowContainer>
          <Button.TextButton
            style={{
              color: CommonColor.WHITE,
            }}
            onClick={() => _routePush(RoutePath.SIGN_IN)}
          >
            {t(I18nCommandEnum.SIGN_IN)}
          </Button.TextButton>
        </Container.RowContainer>
      )}
      {user.isLogin === true && (
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
                {user.info.userNickname}
              </Label.CommonLabel>
            }
            menuContainerStyle={{
              backgroundColor: CommonColor.WHITE,
              border: `1px solid ${CommonColor.DARK}`,
              borderRadius: 15,
              width: 150,
              height: 30,
              marginRight: 115,
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
