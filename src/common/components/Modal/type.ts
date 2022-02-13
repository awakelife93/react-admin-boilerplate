import { CSSProperties } from "styled-components";
import { UnknownObject } from "../../type";

type ModalType = "MESSAGE";

export type ShowModalActionType = {
  next?: Function;
  type: ModalType;
  children?: React.FC<any>;
  item?: {
    childrenProps?: UnknownObject;
    style?: CSSProperties;
    titleItem?: {
      title: string;
      subTitle?: string;
      titleStyle?: CSSProperties;
      subTitleStyle?: CSSProperties;
    };
    buttonItem?: {
      title: string;
      next: Function;
      containerStyleItems?: {
        hoverBackgroundColor?: string;
        defaultBackgroundColor?: string;
        activeBackgroundColor?: string;
      };
    }[];
    option?: {
      dimClose?: boolean;
      keyClose?: boolean;
    };
  };
};
