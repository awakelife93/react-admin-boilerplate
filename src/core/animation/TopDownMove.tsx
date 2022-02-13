import { useCallback, useEffect, useRef, useState } from "react";
import { CommonAnimationReturn, MoveOptionIE } from "./type";

/**
 * @description
 * Component가 Unmount할 때 까지 특정 딜레이 주기로 포지션 이동 Animation
 */
const TopDownMove = (
  option: MoveOptionIE = {
    delay: 500,
    direction: "Y",
    position: 10,
    endPosition: 15,
    style: {},
  }
): CommonAnimationReturn => {
  const component: React.MutableRefObject<HTMLDivElement | undefined> = useRef<HTMLDivElement>();
  const [animationObject, setAnimationObject] = useState({
    isMove: false,
    position: option.position,
  });

  const move = useCallback(() => {
    if (animationObject.isMove === false) {
      setAnimationObject({
        isMove: true,
        position: option.endPosition,
      });
    } else {
      setAnimationObject({
        isMove: false,
        position: option.position,
      });
    }
  }, [animationObject.isMove, option.endPosition, option.position]);

  useEffect(() => {
    const timeoutId: NodeJS.Timeout = setTimeout(() => move(), option.delay);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [animationObject.isMove, move, option.delay]);

  return {
    ref: component,
    style: {
      transform: `translate${option.direction}(${animationObject.position}px)`,
      ...option.style,
    },
  };
};

export default TopDownMove;
