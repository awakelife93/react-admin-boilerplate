import _ from "lodash";
import React, { useCallback, useEffect } from "react";
import { findUserProfile } from "../../api/GetAPI";
import { UserInfoIE } from "../../api/interface";
import { getLocalStorageItem, initWindowFunc } from "../../core";
import { connectWrapper } from "../../redux";
import { Container, SideMenu } from "../components";
import ModalLayout from "../components/Modal";
import AuthGuard from "../guards/AuthGuard";
import { LayoutIE } from "../interface";
import BodyLayout from "./Body";
import BottomLayout from "./Bottom";
import HeaderLayout from "./Header";

/**
 * Layout (최상단 컴포넌트)
 * @param {redux} props
 * @returns {React.FC}
 * @description
 * 라우팅이 되거나, Store의 데이터 감지를 통해 스타일을 제작하여 전체에게 뿌린다.
 * 해당 컴포넌트만 Redux에 연결하여 props로 자식 컴포넌트 전체 (페이지)에 뿌린다.
 * 그 외에 독립되는 컴포넌트는 connectWrapper로 연결
 */
const Layout: React.FC<LayoutIE> = (props: LayoutIE): React.ReactElement => {
  const {
    reduxStore: {
      userStore,
      globalStore: { modalItem },
    },
    Component,
    showModalAction,
    setUserInfoAction,
    initUserInfoAction,
  } = props;

  const initUserProfile = useCallback(async () => {
    const profile: UserInfoIE = await findUserProfile();

    setUserInfoAction({
      isLogin: true,
      info: { ...profile },
    });
  }, [setUserInfoAction]);

  // init
  useEffect(() => {
    // generate global function
    if (_.isEmpty(window.globalFunc)) {
      initWindowFunc({
        initUserInfoAction,
        showModalAction,
      });
    }

    const token = getLocalStorageItem("token");
    // 로그인이 된 상태라면
    if (!_.isNull(token) && !userStore.user.isLogin) {
      initUserProfile();
    }
  }, [
    userStore.user.isLogin,
    initUserInfoAction,
    showModalAction,
    initUserProfile,
  ]);

  return (
    <Container.LayoutContainer>
      {modalItem.isShowModal && (
        <ModalLayout
          {...props}
          children={modalItem.children}
          childrenProps={modalItem.childrenProps}
          style={{ ...modalItem.style }}
          option={modalItem.option}
          buttonItem={modalItem.buttonItem}
          titleItem={modalItem.titleItem}
        />
      )}
      <Container.RowContainer
        style={{ alignItems: "", justifyContent: "", alignContent: "" }}
      >
        <SideMenu />
        <Container.ColumnContainer style={{ width: "100%" }}>
          <HeaderLayout {...props} />
          <BodyLayout {...props}>
            <AuthGuard {...props}>
              <Component {...props} />
            </AuthGuard>
          </BodyLayout>
          <BottomLayout {...props} />
        </Container.ColumnContainer>
      </Container.RowContainer>
    </Container.LayoutContainer>
  );
};

export default connectWrapper(Layout);
