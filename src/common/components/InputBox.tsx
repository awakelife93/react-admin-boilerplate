import styled from "styled-components";
import { CommonColor } from "../styles";
import { CommonComponentType } from "./type";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface InputBoxIE extends Partial<CommonComponentType> {}
export const CommonInputBox = styled.input`
  width: ${(props: InputBoxIE) => props.style?.width ?? "300px"};
  height: ${(props: InputBoxIE) => props.style?.height ?? "40px"};
  padding: ${(props: InputBoxIE) => props.style?.padding ?? "0px"};
  margin: ${(props: InputBoxIE) => props.style?.margin ?? "0px"};
  border: ${(props: InputBoxIE) =>
    props.style?.border ?? `1px solid ${CommonColor.GRAY}`};
  border-radius: ${(props: InputBoxIE) =>
    props.style?.borderRadius ?? "0.25em"};
  margin-bottom: ${(props: InputBoxIE) => props.style?.marginBottom ?? "0px"};
`;

interface RadioBoxIE extends Partial<CommonComponentType> {}
export const RadioBox = styled.input.attrs((props) => ({
  type: "radio",
}))``;
