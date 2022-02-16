import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "../../core/i18n";
import { ReduxStoreType } from "../../redux/type";
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
const Layout: React.FC<LayoutIE> = (): React.ReactElement => {
  const {
    reduxStore: {
      globalStore: { modalItem },
    }
  } = useSelector((state: ReduxStoreType) => state);
  
  return (
      <Container.LayoutContainer>
        {modalItem.isShowModal && (
          <ModalLayout modalItem={modalItem} />
        )}
        <Container.RowContainer
          style={{ alignItems: "", justifyContent: "", alignContent: "" }}
        >
          <SideMenu />
          <Container.ColumnContainer style={{ width: "100%" }}>
            <HeaderLayout />
            <BodyLayout>
              <AuthGuard>
                <Outlet />
              </AuthGuard>
            </BodyLayout>
            <BottomLayout />
          </Container.ColumnContainer>
        </Container.RowContainer>
      </Container.LayoutContainer>
  );
};

export default Layout;
