import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ReduxIE } from "../redux/interface";
import { RouteIE } from "../route/routes";

/**
 * 상세 화면을 구성하는 타입
 */
export type PageType = "CREATE" | "MODIFY";

/**
 * 리스트 정렬 타입
 */
export type SortType = "DESC" | "ASC" | undefined;

/**
 * 감싸는 컨테이너 레벨 인터페이스
 */
export interface LayoutIE extends ReduxIE, RouteComponentProps, RouteIE {}

/**
 * 컨테이너안에 구성되는 컴포넌트 인터페이스
 */
export interface ComponentIE extends LayoutIE {
  // 단순 HTML을 Return 하는 경우를 대비하여 - ReactElement
  // 컴포넌트 객체를 던질 경우를 대비하여 - FC
  children?: React.ReactElement | React.FC<any>;
}
