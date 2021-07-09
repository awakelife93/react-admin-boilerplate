import styled from "styled-components";
import CommonColor from "../styles/color";
import { CommonComponentIE } from "./interface";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface CommonLabelIE extends CommonComponentIE {}
export const CommonLabel = styled.label`
  font-size: ${(props: CommonLabelIE) => props.style?.fontSize ?? "1rem"};
  font-weight: ${(props: CommonLabelIE) => props.style?.fontWeight ?? ""};
  color: ${(props: CommonLabelIE) => props.style?.color ?? CommonColor.BLACK};
`;
