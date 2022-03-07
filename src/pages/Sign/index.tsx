import { IUserInfo } from "@/api/interface";
import { signIn } from "@/api/PostAPI";
import { Button, Container, InputBox, Label } from "@/common/components";
import useAction from "@/common/hooks/useAction";
import { IComponent } from "@/common/interface";
import { UnknownObject } from "@/common/type";
import { I18nCommandEnum, setLocalStorageItem } from "@/core";
import { RoutePath } from "@/route/routes";
import { validationObject } from "@/utils";
import _ from "lodash";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

/**
 * @description SignIn Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const SignIn: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const { t } = useTranslation();
  const { setUserInfoAction } = useAction();
  
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.addEventListener("keypress", checkKeyPress);
    return () => window.removeEventListener("keypress", checkKeyPress);
  });

  const showMessageModal = useCallback((message: string): void => {
    if (_.isFunction(window.globalFunc.showModalAction)) {
      window.globalFunc.showModalAction({
        type: "MESSAGE",
        item: {
          childrenProps: { message },
        },
      });
    }
  }, []);

  const validationItem = useCallback(
    (item: UnknownObject) => {
      if (!validationObject(item)) {
        showMessageModal("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
        return false;
      }

      return true;
    },
    []
  );

  const navigate = useNavigate();
  const _signIn = useCallback(async (): Promise<void | boolean> => {
    const item = { email, password };

    if (validationItem(item)) {
      try {
        const userInfo: IUserInfo = await signIn({ email, password });

        if (_.isUndefined(userInfo)) {
          showMessageModal("로그인 정보를 다시 한번 확인 해주시기 바랍니다.");
          return false;
        } else {
          setLocalStorageItem({ token: userInfo.token });
          setUserInfoAction({
            user: {
              isLogin: true,
              info: {
                userId: userInfo.userId,
                email: userInfo.email,
                name: userInfo.name,
              },
            }
          });
          navigate(RoutePath.DASHBOARD);
        }
      } catch (error: any) {
        switch (error.status) {
          case 401: {
            showMessageModal("잘못된 이메일, 비밀번호 입니다.");
            return false;
          }
          case 403: {
            showMessageModal("권한이 없는 계정입니다.");
            return false;
          }
          case 404: {
            showMessageModal("계정이 없습니다.");
            return false;
          }
        }
      }
    }
  }, [email, password]);

  const checkKeyPress = useCallback(
    (event: KeyboardEvent): void => {
      if (_.isString(event.code) && event.code === "Enter") {
        _signIn();
      }
    },
    []
  );

  return (
    <Container.RowContainer
      style={{ display: "flex", justifyContent: "center" }}
    >
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => setemail(e.target.value)}
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
