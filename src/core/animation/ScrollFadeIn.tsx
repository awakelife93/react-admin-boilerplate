import _ from "lodash";
import { useCallback, useEffect, useRef } from "react";
import { AnimationOption, CommonAnimationReturn } from "./type";

/**
 * @description
 * Scroll을 감지하여 FadeIn Animation
 */
const ScrollFadeIn = (
  option: AnimationOption = {
    delay: 0,
    duration: 1,
    style: {},
  }
): CommonAnimationReturn => {
  const component: React.MutableRefObject<HTMLDivElement | undefined> = useRef<HTMLDivElement>();

  const onScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = component;
      
      if (!_.isUndefined(current) && entry.isIntersecting) {
        current.style.transitionDuration = `${option.duration}s`;
        current.style.transitionDelay = `${option.delay}s`;
        current.style.opacity = "1";
      }
    },
    [option.delay, option.duration]
  );

  useEffect(() => {
    const { current } = component;
    let observer: IntersectionObserver;

    if (!_.isUndefined(current)) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: component,
    style: { opacity: 0, ...option.style },
  };
};

export default ScrollFadeIn;
