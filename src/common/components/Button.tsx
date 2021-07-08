import styled from "styled-components";
import { CommonComponentIE } from "./interface";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface SubMitButtonIE extends CommonComponentIE {}
export const SubMitButton = styled.button`
  width: ${(props: SubMitButtonIE) => props.style?.width ?? "150px"};
  height: ${(props: SubMitButtonIE) => props.style?.height ?? "40px"};
  margin: ${(props: SubMitButtonIE) => props.style?.margin ?? "20px"};
  color: ${(props: SubMitButtonIE) => props.style?.color ?? "black"};
  background-color: ${(props: SubMitButtonIE) =>
    props.style?.backgroundColor ?? "black"};
  border: ${(props: SubMitButtonIE) => props.style?.border ?? "none"};
  border-radius: ${(props: SubMitButtonIE) =>
    props.style?.borderRadius ?? "0.25em"};
`;

interface TextButtonIE extends CommonComponentIE {}
export const TextButton = styled.button`
  background-color: ${(props: TextButtonIE) =>
    props.style?.backgroundColor ?? "black"};
  border: ${(props: TextButtonIE) => props.style?.border ?? "none"};
  color: ${(props: TextButtonIE) => props.style?.color ?? "white"};
  font-size: ${(props: TextButtonIE) => props.style?.fontSize ?? "15px"};
`;
