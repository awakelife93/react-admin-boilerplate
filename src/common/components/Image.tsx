import styled from "styled-components";
import { CommonComponentType } from "./type";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface CommonImageIE extends Partial<CommonComponentType> {}
export const CommonImage = styled.img`
  width: ${(props: CommonImageIE) => props.style?.width ?? "100%"};
  height: ${(props: CommonImageIE) =>
    props.style?.height ?? `${document.documentElement.clientHeight - 20}px`};
`;
interface BackgroundImageIE extends Partial<CommonComponentType> {
  requireStyle: {
    backgroundImage: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
  };
}
export const BackGroundImage = styled.div`
  height: ${(props: BackgroundImageIE) => props.style?.height ?? "300px"};
  background-image: ${(props: BackgroundImageIE) =>
    props.requireStyle.backgroundImage};
  background-repeat: ${(props: BackgroundImageIE) =>
    props.requireStyle?.backgroundRepeat};
  background-size: ${(props: BackgroundImageIE) =>
    props.requireStyle?.backgroundSize};
`;
