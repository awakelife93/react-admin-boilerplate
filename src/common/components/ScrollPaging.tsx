import React from "react";
import _ from "lodash";
import { useCallback, useEffect, useRef } from "react";
import { Container } from ".";

interface ScrollPagingIE {
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
 * @param {ScrollPagingIE} props
 * @returns {React.ReactElement}
 */
const ScrollPaging: React.FC<ScrollPagingIE> = (props: ScrollPagingIE) => {
  const {
    children,
    target: { callback },
    observerOption,
  } = props;

  const component: React.MutableRefObject<any> = useRef<HTMLDivElement>();

  const onPagingEnd = useCallback(
    ([entry]: any): void => {
      // ref가 화면에 완전히 표시 될때 (threshold === 1)
      if (entry.isIntersecting) {
        try {
          if (_.isFunction(callback)) {
            callback();
          }
        } catch (e) {
          console.log("Paging Callback Error", e);
        }
      }
    },
    [callback]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (component.current) {
      const threshold = observerOption?.threshold ?? 1;
      observer = new IntersectionObserver(onPagingEnd, {
        threshold,
      });
      observer.observe(component.current);
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
