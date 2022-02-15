import { CSSProperties } from "styled-components";
import { UnknownObject } from "../../type";

type ModalTemplateType = "MESSAGE";

export type ModalItem = {
  isShowModal?: boolean;
  children: React.FC<any>;
  childrenProps?: {
    message?: string;
  };
  style?: CSSProperties;
  titleItem?: {
    title?: string;
    subTitle?: string;
    titleStyle?: UnknownObject;
    subTitleStyle?: UnknownObject;
  };
  buttonItem?: {
    title?: string;
    next?: Function;
    containerStyleItems: {
      hoverBackgroundColor?: string;
      defaultBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
  }[];
  option: {
    isDimClose?: boolean;
    isKeyClose?: boolean;
  };
};

export type ModalType = {
  modalItem: ModalItem;
};

export type ShowModalActionType = {
  next: Function;
  type: ModalTemplateType;
  item: ModalItem;
};
