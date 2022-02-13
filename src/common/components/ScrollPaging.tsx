import _ from "lodash";
import React, { useCallback, useEffect, useRef } from "react";
import { Container } from ".";

type ScrollPagingType = {
  children: React.ReactElement;
  target: {
    callback: Function;
    skip: number;
  };
  observerOption?: {
    threshold?: number;
  };
}

/**
 * ScrollPaging
 * @description 스크롤을 감지하여 페이징
 * @param {ScrollPagingType} props
 * @returns {React.ReactElement}
 */
const ScrollPaging: React.FC<ScrollPagingType> = (
  props: ScrollPagingType
): React.ReactElement => {
  const {
    children,
    target: { callback },
    observerOption,
  } = props;
  
  const component: React.MutableRefObject<any> = useRef<HTMLDivElement>();
  
  const onPagingEnd = useCallback(
    ([entry]: IntersectionObserverEntry[]): void => {
      // ref가 화면에 완전히 표시 될때 (threshold === 1)
      if (entry.isIntersecting) {
        try {
          if (_.isFunction(callback)) {
            callback();
          }
        } catch (error: unknown) {
          console.log("Paging Callback Error", error);
        }
      }
    },
    [callback]
  );

  useEffect(() => {
    const { current } = component;
    let observer: IntersectionObserver;

    if (!_.isUndefined(current)) {
      const threshold = observerOption?.threshold ?? 1;
      observer = new IntersectionObserver(onPagingEnd, { threshold });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [onPagingEnd, observerOption?.threshold]);

  return (
    <Container.LayoutContainer ref={component}>
      {children}
    </Container.LayoutContainer>
  );
};

export default React.memo(ScrollPaging);
