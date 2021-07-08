import React from "react";
import _ from "lodash";
import { useCallback, useEffect, useRef } from "react";
import { Container } from ".";

/**
 * @description
 * Scroll을 감지하여 Paging
 */
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
const ScrollPaging: React.FC<ScrollPagingIE> = (props: ScrollPagingIE) => {
  const {
    children,
    target: { callback, skip },
    observerOption,
  } = props;

  const component: React.MutableRefObject<any> = useRef<HTMLDivElement>();

  const onPagingEnd = useCallback(
    ([entry]: any) => {
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
    [skip]
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
  }, [onPagingEnd]);

  return (
    <Container.LayoutContainer ref={component}>
      {children}
    </Container.LayoutContainer>
  );
};

export default React.memo(ScrollPaging);
