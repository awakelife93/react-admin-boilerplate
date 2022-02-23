import styled from "styled-components";
import { CommonColor } from "../styles";
import { CommonComponentType, DynamicColorComponentType } from "./type";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface ISubMitButton extends Partial<CommonComponentType> {}
export const SubMitButton = styled.button`
  width: ${(props: ISubMitButton) => props.style?.width ?? "150px"};
  height: ${(props: ISubMitButton) => props.style?.height ?? "40px"};
  margin: ${(props: ISubMitButton) => props.style?.margin ?? "20px"};
  color: ${(props: ISubMitButton) => props.style?.color ?? CommonColor.WHITE};
  background-color: ${(props: ISubMitButton) =>
    props.style?.backgroundColor ?? CommonColor.DARK};
  border: ${(props: ISubMitButton) =>
    props.style?.border ?? `1px solid ${CommonColor.GRAY}`};
  border-radius: ${(props: ISubMitButton) =>
    props.style?.borderRadius ?? "0.25em"};
`;

interface ITextButton extends Partial<CommonComponentType> {}
export const TextButton = styled.button`
  background-color: ${(props: ITextButton) =>
    props.style?.backgroundColor ?? CommonColor.TRANS_PARENT};
  border: ${(props: ITextButton) => props.style?.border ?? "none"};
  color: ${(props: ITextButton) => props.style?.color ?? CommonColor.WHITE};
  font-size: ${(props: ITextButton) => props.style?.fontSize ?? "15px"};
`;

interface IDynamicColorButton extends Partial<CommonComponentType>, Partial<DynamicColorComponentType> {}
export const DynamicColorButton = styled.button`
  width: ${(props: ISubMitButton) => props.style?.width ?? "150px"};
  height: ${(props: ISubMitButton) => props.style?.height ?? "40px"};
  border-radius: ${(props: ISubMitButton) =>
    props.style?.borderRadius ?? "0.25em"};
  border: ${(props: ISubMitButton) =>
    props.style?.border ?? `1px solid ${CommonColor.GRAY}`};
  color: ${(props: IDynamicColorButton) =>
    props.style?.color ?? CommonColor.WHITE};
  font-size: ${(props: IDynamicColorButton) =>
    props.style?.fontSize ?? "15px"};
  background-color: ${(props: IDynamicColorButton) =>
    props.defaultBackgroundColor};
  &:hover {
    background-color: ${(props: IDynamicColorButton) =>
      props.hoverBackgroundColor};
  }
  &:active {
    background-color: ${(props: IDynamicColorButton) =>
      props.activeBackgroundColor};
  }
`;
