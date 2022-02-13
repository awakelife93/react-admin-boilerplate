import React from "react";
import { CSSProperties } from "styled-components";
import { ComponentIE } from "../../interface";
import { UnknownObject } from "../../type";

export interface ModalIE extends ComponentIE {
  children: React.FC<any>;
  childrenProps: UnknownObject;
  style: CSSProperties;
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
  option: {
    dimClose?: boolean;
    keyClose?: boolean;
  };
}
