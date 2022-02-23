import styled from "styled-components";
import { CommonComponentType } from "./type";

/**
 * @description
 * 따로 style을 정의하지 않아도 기본적인 골격을 유지하는 스타일들만 작성하자.
 * 다크모드등 다양한 조건에서 변경해야하는 스타일들을 props로 받는다.
 * 상속받는 default style이 아닌 필수적인 스타일은 requireStyle로 정의
 */
interface ICommonImage extends Partial<CommonComponentType> {}
export const CommonImage = styled.img`
  width: ${(props: ICommonImage) => props.style?.width ?? "100%"};
  height: ${(props: ICommonImage) =>
    props.style?.height ?? `${document.documentElement.clientHeight - 20}px`};
`;
interface IBackgroundImage extends Partial<CommonComponentType> {
  requireStyle: {
    backgroundImage: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
  };
}
export const BackGroundImage = styled.div`
  height: ${(props: IBackgroundImage) => props.style?.height ?? "300px"};
  background-image: ${(props: IBackgroundImage) =>
    props.requireStyle.backgroundImage};
  background-repeat: ${(props: IBackgroundImage) =>
    props.requireStyle?.backgroundRepeat};
  background-size: ${(props: IBackgroundImage) =>
    props.requireStyle?.backgroundSize};
`;
