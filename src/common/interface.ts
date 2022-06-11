import React from "react";

/**
 * 감싸는 컨테이너 레벨 인터페이스
 */
export interface ILayout {}

/**
 * 컨테이너안에 구성되는 컴포넌트 인터페이스
 */
export interface IComponent {
  children?: React.ReactElement;
}
