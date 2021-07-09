import { useEffect, useState } from "react";
import _ from "lodash";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

import { Container, Label, InputBox, Button } from "../../common/components";
import { ComponentIE } from "../../common/interface";
import { setLocalStorageItem } from "../../core";
import { I18nCommandEnum } from "../../core/i18n/type";
import { signIn } from "../../api/PostAPI";
import { UserInfoIE } from "../../api/interface";
import { RoutePath } from "../../route/routes";
import { validationObject } from "../../utils";
import { useCallback } from "react";

/**
 * @description SignIn Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */

const SignIn: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const { t } = useTranslation();

  // Input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.addEventListener("keypress", checkKeyPress);
    return () => window.removeEventListener("keypress", checkKeyPress);
  });

  const checkKeyPress = (event: any) => {
    if (_.isString(event.code) && event.code === "Enter") {
      _signIn();
    }
  };

  const _showMessageModal = (message: string) => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        type: "MESSAGE",
        item: {
          childrenProps: { message },
        },
      });
    }
  };

  const validationItem = useCallback(
    (item: any) => {
      if (!validationObject(item)) {
        _showMessageModal("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
        return false;
      }

      return true;
    },
    [email, password]
  );

  const history = useHistory();
  const _signIn = async () => {
    const { setUserInfoAction } = props;
    const item = { email, password };

    if (validationItem(item) === true) {
      try {
        const userInfo: UserInfoIE = await signIn({ email, password });

        if (_.isUndefined(userInfo)) {
          _showMessageModal("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
          return false;
        } else {
          setLocalStorageItem({ token: userInfo.token });
          setUserInfoAction({
            isLogin: true,
            info: {
              id: userInfo.id,
              email: userInfo.email,
              nickname: userInfo.nickname,
            },
          });
          history.push(RoutePath.DASHBOARD);
        }
      } catch (e) {
        switch (e.status) {
          case 401: {
            _showMessageModal("잘못된 이메일, 비밀번호 입니다.");
            return false;
          }
          case 404: {
            _showMessageModal("계정이 없습니다.");
            return false;
          }
        }
      }
    }
  };

  return (
    <Container.RowContainer>
      <Container.ColumnContainer>
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel>{t(I18nCommandEnum.EMAIL)}</Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={t(I18nCommandEnum.EMAIL)}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel>{t(I18nCommandEnum.PASSWORD)}</Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={t(I18nCommandEnum.PASSWORD)}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button.SubMitButton
          style={{
            margin: 10,
          }}
          onClick={_signIn}
        >
          {t(I18nCommandEnum.SIGN_IN)}
        </Button.SubMitButton>
      </Container.ColumnContainer>
    </Container.RowContainer>
  );
};

export default SignIn;
