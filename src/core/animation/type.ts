import React from "react";
import { CSSProperties } from "styled-components";

export type AnimationOption = {
  delay: number;
  duration: number;
  style: CSSProperties;
};

export type CommonAnimationReturn = {
  ref: React.MutableRefObject<any>;
  style: CSSProperties;
};

export interface MoveOptionIE extends Partial<AnimationOption> {
  direction: string;
  position: number;
  endPosition: number;
}
