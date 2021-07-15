import styled from "styled-components";
import { CommonColor } from "../styles";
import { CommonComponentIE } from "./interface";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */

export interface LayoutContainerIE extends CommonComponentIE {}
export const LayoutContainer = styled.div`
  position: ${(props: LayoutContainerIE) => props.style?.position ?? ""};
  top: ${(props: LayoutContainerIE) => props.style?.top ?? "0px"};
  bottom: ${(props: LayoutContainerIE) => props.style?.bottom ?? "0px"};
  left: ${(props: LayoutContainerIE) => props.style?.left ?? "0px"};
  right: ${(props: LayoutContainerIE) => props.style?.right ?? "0px"};
`;

export interface BodyContainerIE extends CommonComponentIE {}
export const BodyContainer = styled.div`
  width: ${(props: BodyContainerIE) => props.style?.width ?? "100%"};
  height: ${(props: BodyContainerIE) => props.style?.height ?? "100%"};
  min-height: ${(props: BodyContainerIE) => props.style?.minHeight ?? "100vh"};
  padding: ${(props: BodyContainerIE) => props.style?.padding ?? "0px"};
  background-color: ${(props: BodyContainerIE) =>
    props.style?.backgroundColor ?? CommonColor.BODY_COLOR};
`;

export interface HeaderContainerIE extends CommonComponentIE {}
export const HeaderContainer = styled.div`
  width: ${(props: HeaderContainerIE) => props.style?.width ?? "100%"};
  height: ${(props: HeaderContainerIE) => props.style?.height ?? "80px"};
  padding: ${(props: HeaderContainerIE) => props.style?.padding ?? "20px"};
  font-size: ${(props: HeaderContainerIE) => props.style?.fontSize ?? "30px"};
  font-weight: ${(props: HeaderContainerIE) =>
    props.style?.fontWeight ?? "bold"};
  display: ${(props: HeaderContainerIE) => props.style?.display ?? "flex"};
  justify-content: ${(props: HeaderContainerIE) =>
    props.style?.justifyContent ?? "space-between"};
  align-items: ${(props: HeaderContainerIE) =>
    props.style?.alignItems ?? "center"};
  background-color: ${(props: HeaderContainerIE) =>
    props.style?.backgroundColor ?? CommonColor.HEADER_COLOR};
`;

export interface BottomContainerIE extends CommonComponentIE {}
export const BottomContainer = styled.footer`
  width: ${(props: BottomContainerIE) => props.style?.width ?? "100%"};
  height: ${(props: BottomContainerIE) => props.style?.height ?? "100px"};
  padding: ${(props: BottomContainerIE) => props.style?.padding ?? "20px"};
  background-color: ${(props: BottomContainerIE) =>
    props.style?.backgroundColor ?? CommonColor.BOTTOM_COLOR};
  font-size: ${(props: BottomContainerIE) => props.style?.fontSize ?? "30px"};
  font-weight: ${(props: BottomContainerIE) =>
    props.style?.fontWeight ?? "bold"};
`;

interface RowContainerIE extends CommonComponentIE {}
export const RowContainer = styled.div`
  display: ${(props: RowContainerIE) => props.style?.display ?? "flex"};
  align-items: ${(props: RowContainerIE) =>
    props.style?.alignItems ?? "center"};
  justify-content: ${(props: RowContainerIE) =>
    props.style?.justifyContent ?? "center"};
  align-content: ${(props: RowContainerIE) =>
    props.style?.alignContent ?? "center"};
  align-self: ${(props: RowContainerIE) => props.style?.alignSelf ?? ""};
  flex-direction: ${(props: RowContainerIE) =>
    props.style?.flexDirection ?? "row"};
`;

interface ColumnContainerIE extends CommonComponentIE {}
export const ColumnContainer = styled.div`
  display: ${(props: ColumnContainerIE) => props.style?.display ?? "flex"};
  justify-content: ${(props: ColumnContainerIE) =>
    props.style?.justifyContent ?? "center"};
  align-content: ${(props: ColumnContainerIE) =>
    props.style?.alignContent ?? "center"};
  align-items: ${(props: ColumnContainerIE) =>
    props.style?.alignItems ?? "center"};
  flex-direction: ${(props: ColumnContainerIE) =>
    props.style?.flexDirection ?? "column"};
  margin-left: ${(props: ColumnContainerIE) => props.style?.marginLeft};
`;
