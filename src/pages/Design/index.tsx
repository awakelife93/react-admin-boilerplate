import { useCallback, useEffect, useState } from "react";
import { Container, PagingBar } from "../../common/components";
import { defaultPagingCount } from "../../common/const";
import { ComponentIE } from "../../common/interface";
import Tap from "./Tap";
import List from "./List";
import {
  findComponent,
  findComponentCount,
  findLayout,
  findLayoutCount,
  findStyle,
  findStyleCount,
  findTheme,
  findThemeCount,
} from "../../api/GetAPI";

/**
 * @description Design Component
 * 화면 기획 및 어떻게 테마별 디자인 및 부속 객체들을 관리할 지 정리가 안되서
 * 제일 마지막으로 미룸. (틈틈히 고민중)
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Design: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const [designType, setDesignType] = useState<
    "component" | "layout" | "style" | "theme"
  >("component");
  const [designs, setDesigns] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);

  // init
  useEffect(() => {
    if (totalCount === 0) {
      getDesignCount(designType);
    }

    if (designs.length === 0) {
      getDesignList(0, designType);
    }
  }, [designs.length, totalCount]);

  /**
   * Type별 초기화
   */
  const onTypeClick = (type: "component" | "layout" | "style" | "theme") => {
    setDesigns([]);
    setActive(1);
    setDesignType(type);

    getDesignCount(type);
    getDesignList(0, type);
  };

  /**
   * Type별 List의 Total Count를 가져온다.
   */
  const getDesignCount = useCallback(
    async (type: "component" | "layout" | "style" | "theme") => {
      let totalCount: any;
      switch (type) {
        case "component":
          totalCount = await findComponentCount();
          break;
        case "layout":
          totalCount = await findLayoutCount();
          break;
        case "style":
          totalCount = await findStyleCount();
          break;
        case "theme":
          totalCount = await findThemeCount();
          break;
      }
      setTotalCount(totalCount);
    },
    []
  );

  /**
   * Type별 디자인 정보들을 가져온다.
   */
  const getDesignList = useCallback(
    async (skip: number, type: "component" | "layout" | "style" | "theme") => {
      let designs: any;
      switch (type) {
        case "component":
          designs = await findComponent({ skip });
          break;
        case "layout":
          designs = await findLayout({ skip });
          break;
        case "style":
          designs = await findStyle({ skip });
          break;
        case "theme":
          designs = await findTheme({ skip });
          break;
      }
      setDesigns(designs);
    },
    []
  );

  /**
   * Page Click Event
   */
  const onPageClick = useCallback(
    (page: number) => {
      setActive(page + 1);
      getDesignList(page * defaultPagingCount, designType);
    },
    [active]
  );

  return (
    <Container.LayoutContainer>
      <Tap type={designType} onTypeClick={onTypeClick} />
      <List type={designType} designs={designs} />
      <PagingBar
        totalCount={totalCount}
        limit={defaultPagingCount}
        active={active}
        onPageClick={onPageClick}
      />
    </Container.LayoutContainer>
  );
};

export default Design;
