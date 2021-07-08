import { useEffect } from "react";
import _ from "lodash";
import { Container, Icon } from "../../components";
import { removeBodyScroll, revertBodyScroll } from "../../../utils";

import MessageLayout from "./layout/Message";
import { ModalIE, ShowModalActionIE } from "./interface";

export const _showModalAction = ({
  next,
  type,
  children,
  item,
}: ShowModalActionIE): void => {
  if (_.isFunction(next)) {
    // 넘겨 받은 children이 없거나, type을 주었을 경우 그것에 맞는 레이아웃 제공
    if (_.isEmpty(children) || !_.isEmpty(type)) {
      switch (type) {
        case "MESSAGE":
          children = MessageLayout;
          break;
      }
    }

    next({
      isShowModal: true,
      children,
      childrenProps: item?.childrenProps,
      style: item?.style,
      option: item?.option,
    });
  }
};

const Modal: React.FC<ModalIE> = (props: ModalIE) => {
  const {
    childrenProps,
    style,
    option,
    reduxStore,
    initShowModalAction,
    setUserInfoAction,
  } = props;

  useEffect(() => {
    removeBodyScroll();

    if (option.keyClose === true) {
      window.addEventListener("keydown", checkKeyPress);
    }

    return () => {
      if (option.keyClose === true) {
        window.removeEventListener("keydown", checkKeyPress);
      }
      revertBodyScroll();
    };
  });

  const checkKeyPress = (event: any) => {
    if (_.isString(event.code) && event.code === "Escape") {
      _closeModal();
    }
  };

  const _closeModal = () => {
    if (_.isFunction(initShowModalAction)) {
      initShowModalAction();
    }
  };

  return (
    <Container.LayoutContainer>
      {/* dim area */}
      <Container.LayoutContainer
        style={{
          position: "fixed",
          opacity: 0.5,
          zIndex: 1,
        }}
        onClick={() => {
          if (option.dimClose === true) _closeModal();
        }}
      />
      {/* modal area */}
      <Container.LayoutContainer
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          zIndex: 1,
        }}
      >
        <Icon.IoCloseCircleOutline
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            cursor: "pointer",
          }}
          size={30}
          onClick={() => _closeModal()}
        />
        <Container.LayoutContainer style={{ padding: 30 }}>
          <props.children
            {...childrenProps}
            {...reduxStore}
            setUserInfoAction={setUserInfoAction}
            _closeModal={_closeModal}
          />
        </Container.LayoutContainer>
      </Container.LayoutContainer>
    </Container.LayoutContainer>
  );
};

export default Modal;
