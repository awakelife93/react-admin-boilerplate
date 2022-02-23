import styled from "styled-components";
import { CommonColor } from "../styles";
import { CommonComponentType } from "./type";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface ICommonSelectBox extends Partial<CommonComponentType> {}
export const CommonSelectBox = styled.select`
  width: ${(props: ICommonSelectBox) => props.style?.width ?? "300px"};
  height: ${(props: ICommonSelectBox) => props.style?.height ?? "40px"};
  padding: ${(props: ICommonSelectBox) => props.style?.padding ?? "0px"};
  margin: ${(props: ICommonSelectBox) => props.style?.margin ?? "0px"};
  border: ${(props: ICommonSelectBox) =>
    props.style?.border ?? `1px solid ${CommonColor.GRAY}`};
  border-radius: ${(props: ICommonSelectBox) =>
    props.style?.borderRadius ?? "0.25em"};
  margin-bottom: ${(props: ICommonSelectBox) =>
    props.style?.marginBottom ?? "0px"};
`;
