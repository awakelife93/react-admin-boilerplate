import { useState, useEffect, useRef } from "react";
import { CommonAnimationReturnIE, MoveOptionIE } from "./interface";

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
): CommonAnimationReturnIE => {
  const component: React.MutableRefObject<any> = useRef<HTMLDivElement>();
  const [animationObject, setAnimationObject] = useState({
    isMove: false,
    position: option.position,
  });

  const move = () => {
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
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (component.current) {
      timeoutId = setTimeout(() => move(), option.delay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [animationObject.isMove]);

  return {
    ref: component,
    style: {
      transform: `translate${option.direction}(${animationObject.position}px)`,
      ...option.style,
    },
  };
};

export default TopDownMove;
