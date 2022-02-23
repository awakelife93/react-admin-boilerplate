import styled from "styled-components";
import { CommonColor } from "../styles";
import {
  CommonComponentType,
  DynamicColorComponentType,
  ScrollComponentType
} from "./type";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */

export interface ILayoutContainer extends Partial<CommonComponentType> {}
export const LayoutContainer = styled.div`
  position: ${(props: ILayoutContainer) => props.style?.position ?? ""};
  top: ${(props: ILayoutContainer) => props.style?.top ?? "0px"};
  bottom: ${(props: ILayoutContainer) => props.style?.bottom ?? "0px"};
  left: ${(props: ILayoutContainer) => props.style?.left ?? "0px"};
  right: ${(props: ILayoutContainer) => props.style?.right ?? "0px"};
`;

export interface IBodyContainer extends Partial<CommonComponentType> {}
export const BodyContainer = styled.div`
  width: ${(props: IBodyContainer) => props.style?.width ?? "100%"};
  height: ${(props: IBodyContainer) => props.style?.height ?? "100%"};
  min-height: ${(props: IBodyContainer) => props.style?.minHeight ?? "100vh"};
  padding: ${(props: IBodyContainer) => props.style?.padding ?? "0px"};
  background-color: ${(props: IBodyContainer) =>
    props.style?.backgroundColor ?? CommonColor.BODY_COLOR};
`;

export interface IHeaderContainer extends Partial<CommonComponentType> {}
export const HeaderContainer = styled.div`
  width: ${(props: IHeaderContainer) => props.style?.width ?? "100%"};
  height: ${(props: IHeaderContainer) => props.style?.height ?? "80px"};
  padding: ${(props: IHeaderContainer) => props.style?.padding ?? "20px"};
  font-size: ${(props: IHeaderContainer) => props.style?.fontSize ?? "30px"};
  font-weight: ${(props: IHeaderContainer) =>
    props.style?.fontWeight ?? "bold"};
  display: ${(props: IHeaderContainer) => props.style?.display ?? "flex"};
  justify-content: ${(props: IHeaderContainer) =>
    props.style?.justifyContent ?? "space-between"};
  align-items: ${(props: IHeaderContainer) =>
    props.style?.alignItems ?? "center"};
  background-color: ${(props: IHeaderContainer) =>
    props.style?.backgroundColor ?? CommonColor.HEADER_COLOR};
`;

export interface IBottomContainer extends Partial<CommonComponentType> {}
export const BottomContainer = styled.footer`
  width: ${(props: IBottomContainer) => props.style?.width ?? "100%"};
  height: ${(props: IBottomContainer) => props.style?.height ?? "100px"};
  padding: ${(props: IBottomContainer) => props.style?.padding ?? "20px"};
  background-color: ${(props: IBottomContainer) =>
    props.style?.backgroundColor ?? CommonColor.BOTTOM_COLOR};
  font-size: ${(props: IBottomContainer) => props.style?.fontSize ?? "30px"};
  font-weight: ${(props: IBottomContainer) =>
    props.style?.fontWeight ?? "bold"};
`;

interface IRowContainer extends Partial<CommonComponentType> {}
export const RowContainer = styled.div`
  display: ${(props: IRowContainer) => props.style?.display ?? "flex"};
  align-items: ${(props: IRowContainer) =>
    props.style?.alignItems ?? "center"};
  justify-content: ${(props: IRowContainer) =>
    props.style?.justifyContent ?? "center"};
  align-content: ${(props: IRowContainer) =>
    props.style?.alignContent ?? "center"};
  align-self: ${(props: IRowContainer) => props.style?.alignSelf ?? ""};
  flex-direction: ${(props: IRowContainer) =>
    props.style?.flexDirection ?? "row"};
`;

interface IColumnContainer extends Partial<CommonComponentType>, Partial<ScrollComponentType> {}
export const ColumnContainer = styled.div`
  display: ${(props: IColumnContainer) => props.style?.display ?? "flex"};
  justify-content: ${(props: IColumnContainer) =>
    props.style?.justifyContent ?? "center"};
  align-content: ${(props: IColumnContainer) =>
    props.style?.alignContent ?? "center"};
  align-items: ${(props: IColumnContainer) =>
    props.style?.alignItems ?? "center"};
  flex-direction: ${(props: IColumnContainer) =>
    props.style?.flexDirection ?? "column"};
  margin-left: ${(props: IColumnContainer) => props.style?.marginLeft};

  /* Chrome/Safari */
  /******************************************************************************/
  /* scroll style */
  ::-webkit-scrollbar {
    width: ${(props: IColumnContainer) => props.scrollStyles?.width ?? "6px"};
  }

  /* scroll을 감싸는 컨테이너 */
  ::-webkit-scrollbar-track {
    background-color: ${(props: IColumnContainer) =>
      props.trackStyles?.backgroundColor ?? CommonColor.TRANS_PARENT};
  }

  /* 움직이는 scroll 객체 */
  ::-webkit-scrollbar-thumb {
    border-radius: ${(props: IColumnContainer) =>
      props.thumbStyles?.borderRadius ?? "4px"};
    background-color: ${(props: IColumnContainer) =>
      props.thumbStyles?.backgroundColor ?? "rgba(0, 0, 0, 0.24)"};
  }
  /******************************************************************************/

  /* FireFox */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width */
  /******************************************************************************/
  scrollbar-width: thin;
  scrollbar-color: ${(props: IColumnContainer) =>
    `${props.thumbStyles?.backgroundColor ?? CommonColor.WHITE} ${
      props.trackStyles?.backgroundColor ?? CommonColor.BLACK
    }`};
  /******************************************************************************/
`;

interface IDynamicColorContainer extends Partial<CommonComponentType>, Partial<DynamicColorComponentType> {}
export const DynamicColorContainer = styled.div`
  &:hover {
    background-color: ${(props: IDynamicColorContainer) =>
      props.hoverBackgroundColor};
  }
  &:active {
    background-color: ${(props: IDynamicColorContainer) =>
      props.activeBackgroundColor};
  }
  background-color: ${(props: IDynamicColorContainer) =>
    props.defaultBackgroundColor};
`;
