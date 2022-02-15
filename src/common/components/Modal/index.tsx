import _ from "lodash";
import { useEffect } from "react";
import { removeBodyScroll, revertBodyScroll } from "../../../utils";
import { Container, Icon } from "../../components";
import useAction from "../../hooks/useAction";
import { CommonColor } from "../../styles";
import MessageLayout from "./layout/Message";
import { ModalType, ShowModalActionType } from "./type";

export const _showModalAction = ({
  next,
  type,
  item,
}: ShowModalActionType): void => {
  // 넘겨 받은 children이 없거나, type을 주었을 경우 그것에 맞는 레이아웃 제공
  if (_.isEmpty(item.children) || !_.isEmpty(type)) {
    switch (type) {
      case "MESSAGE":
        item.children = MessageLayout;
        break;
    }
  }

  next({
    isShowModal: true,
    ...item
  });
};

const Modal: React.FC<ModalType> = (props: ModalType) => {
  const {
    modalItem: {
      children,
      childrenProps,
      style,
      option,
    },
  } = props;
  const { initShowModalAction }= useAction();
  
  useEffect(() => {
    removeBodyScroll();

    if (option.isKeyClose) {
      window.addEventListener("keydown", checkKeyPress);
    }

    return () => {
      if (option.isKeyClose) {
        window.removeEventListener("keydown", checkKeyPress);
      }
      revertBodyScroll();
    };
  });

  const checkKeyPress = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      _closeModal();
    }
  };

  const _closeModal = () => {
    if (_.isFunction(initShowModalAction)) {
      initShowModalAction();
    }
  };

  const ChildrenComponent = children;
  return (
    <Container.LayoutContainer>
      {/* dim area */}
      <Container.LayoutContainer
        style={{
          backgroundColor: CommonColor.WHITE,
          border: `1px solid ${CommonColor.DARK}`,
          position: "fixed",
          opacity: 0.3,
          zIndex: 1,
        }}
        onClick={() => {
          if (option.isDimClose) _closeModal();
        }}
      />
      {/* modal area */}
      <Container.LayoutContainer
        style={{
          ...style,
          backgroundColor: CommonColor.WHITE,
          border: `1px solid ${CommonColor.DARK}`,
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
          <ChildrenComponent
            {...childrenProps}
            _closeModal={_closeModal}
          />
        </Container.LayoutContainer>
      </Container.LayoutContainer>
    </Container.LayoutContainer>
  );
};

export default Modal;
