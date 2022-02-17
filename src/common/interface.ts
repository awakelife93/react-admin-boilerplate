import React from "react";

/**
 * 감싸는 컨테이너 레벨 인터페이스
 */
export interface LayoutIE {}

/**
 * 컨테이너안에 구성되는 컴포넌트 인터페이스
 */
export interface ComponentIE {
  // * 단순 HTML을 Return 하는 경우를 대비하여 - ReactElement
  // * 컴포넌트 객체를 던질 경우를 대비하여 - FC
  children?: React.ReactElement | React.FC<any>;
}
