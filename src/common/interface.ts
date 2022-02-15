import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ReduxActionType } from "../redux/type";
import { RouteType } from "../route/routes";

/**
 * 감싸는 컨테이너 레벨 인터페이스
 */
export interface LayoutIE
  extends ReduxActionType,
    RouteComponentProps,
    RouteType {}

/**
 * 컨테이너안에 구성되는 컴포넌트 인터페이스
 */
export interface ComponentIE extends LayoutIE {
  // 단순 HTML을 Return 하는 경우를 대비하여 - ReactElement
  // 컴포넌트 객체를 던질 경우를 대비하여 - FC
  children?: React.ReactElement | React.FC<any>;
}
