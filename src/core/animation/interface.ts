import React from "react";
import { CSSProperties } from "styled-components";

export interface AnimationOptionIE {
  delay?: number;
  duration?: number;
  style?: CSSProperties;
}

export interface MoveOptionIE extends AnimationOptionIE {
  direction: string;
  position: number;
  endPosition: number;
}

export interface CommonAnimationReturnIE {
  ref: React.MutableRefObject<any>;
  style: CSSProperties;
}
