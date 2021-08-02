import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ReduxIE } from "../redux/interface";
import { RouteIE } from "../route/routes";

export type SortType = "DESC" | "ASC";
export interface LayoutIE extends ReduxIE, RouteComponentProps, RouteIE {}

export interface ComponentIE extends LayoutIE {
  // 단순 HTML을 Return 하는 경우를 대비하여 - ReactElement
  // 컴포넌트 객체를 던질 경우를 대비하여 - FC
  children?: React.ReactElement | React.FC<any>;
}
