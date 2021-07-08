import React from "react";
import { CSSProperties } from "styled-components";
import { ComponentIE } from "../../interface";

export interface ShowModalActionIE {
  next?: Function;
  type: "MESSAGE";
  children?: React.FC<any>;
  item?: {
    childrenProps?: any;
    style?: CSSProperties;
    option?: {
      dimClose?: boolean;
      keyClose?: boolean;
    };
  };
}

export interface ModalIE extends ComponentIE {
  children: React.FC<any>;
  childrenProps: any;
  style: CSSProperties;
  option: {
    dimClose?: boolean;
    keyClose?: boolean;
  };
}
