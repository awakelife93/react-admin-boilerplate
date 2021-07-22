import _ from "lodash";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import { UserInfoIE } from "../../api/interface";
import { updateUser } from "../../api/PatchAPI";
import { signUp } from "../../api/PutAPI";
import {
  Button,
  Container,
  InputBox,
  Label,
  CommonRender,
} from "../../common/components";
import { ComponentIE } from "../../common/interface";
import { I18nCommandEnum } from "../../core";
import { RoutePath } from "../../route/routes";
import { validationObject } from "../../utils";

/**
 * @description User Detail Component
 * @param {ComponentIE} props
 * @param {UserDetailPropsIE} location
 * @returns {React.ReactElement}
 */
interface UserDetailPropsIE extends UserInfoIE {
  type: "CREATE" | "MODIFY";
}

const UserDetail: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state as UserDetailPropsIE;

  // Input
  const [userEmail, setEmail] = useState("");
  const [userNickname, setNickname] = useState(state.userNickname ?? "");
  const [userPw, setPassword] = useState("");
  const [userRoleIds, setUserRole] = useState<number[]>(
    state.type === "MODIFY"
      ? state.userRoles.map((roles) => roles.role.roleId)
      : []
  );

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
        _showMessageModal("회원가입 정보를 다시 한번 확인 해주시기 바랍니다.");
        return false;
      }

      return true;
    },
    [userPw]
  );

  const history = useHistory();
  const _signUp = async () => {
    const item = { userEmail, userNickname, userPw, userRoleIds };

    if (validationItem(item) === true) {
      try {
        await signUp(item);
        history.push(RoutePath.USER);
      } catch (e) {
        switch (e.status) {
          // 이메일 중복
          case 409: {
            _showMessageModal(
              "중복된 이메일이 있습니다. 다른 이메일을 사용해주시기 바랍니다."
            );
            return false;
          }
        }
      }
    }
  };

  const _updateUser = async () => {
    const item = { userId: state.userId, userNickname, userPw, userRoleIds };
    try {
      await updateUser(item);
      history.push(RoutePath.USER);
    } catch (e) {
      console.log("_updateUser Error", e);
    }
  };

  const onClickRoleBox = (roleId: number) => {
    if (userRoleIds.indexOf(roleId) !== -1) {
      const _userRole = userRoleIds.filter((_roleId: number) => {
        return roleId !== _roleId;
      });
      setUserRole(_userRole);
    } else {
      setUserRole([...userRoleIds, roleId]);
    }
  };

  const createTypeRender = () => {
    return (
      <Container.ColumnContainer>
        {/**********************************************************/}
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
        {/**********************************************************/}
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel>{t(I18nCommandEnum.NICKNAME)}</Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={t(I18nCommandEnum.NICKNAME)}
          onChange={(e) => setNickname(e.target.value)}
        />
        {/**********************************************************/}
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
          type={"password"}
          placeholder={t(I18nCommandEnum.PASSWORD)}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/**********************************************************/}
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel>{t(I18nCommandEnum.ROLE)}</Label.CommonLabel>
        </Container.RowContainer>
        <CommonRender.DefaultUserRoleFC
          style={{ marginBottom: 15 }}
          userRoleIds={userRoleIds}
          onClickUserRole={(roleId: number) => onClickRoleBox(roleId)}
        />
        {/**********************************************************/}
        <Button.SubMitButton
          style={{
            margin: 10,
          }}
          onClick={_signUp}
        >
          {t(I18nCommandEnum.CREATE)}
        </Button.SubMitButton>
      </Container.ColumnContainer>
    );
  };

  const modifyTypeRender = () => {
    return (
      <Container.ColumnContainer>
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel>{t(I18nCommandEnum.NICKNAME)}</Label.CommonLabel>
        </Container.RowContainer>
        <InputBox.CommonInputBox
          style={{
            padding: 5,
            marginBottom: 15,
          }}
          placeholder={t(I18nCommandEnum.NICKNAME)}
          value={userNickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        {/**********************************************************/}
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
          type={"password"}
          placeholder={t(I18nCommandEnum.PASSWORD)}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/**********************************************************/}
        <Container.RowContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Label.CommonLabel>{t(I18nCommandEnum.ROLE)}</Label.CommonLabel>
        </Container.RowContainer>
        <CommonRender.DefaultUserRoleFC
          style={{ marginBottom: 15 }}
          userRoleIds={userRoleIds}
          onClickUserRole={(roleId: number) => onClickRoleBox(roleId)}
        />
        {/**********************************************************/}
        <Button.SubMitButton
          style={{
            margin: 10,
          }}
          onClick={_updateUser}
        >
          {t(I18nCommandEnum.MODIFY)}
        </Button.SubMitButton>
      </Container.ColumnContainer>
    );
  };
  return (
    <Container.RowContainer style={{ justifyContent: "flex-start" }}>
      {state.type === "CREATE" ? createTypeRender() : modifyTypeRender()}
    </Container.RowContainer>
  );
};

export default UserDetail;
