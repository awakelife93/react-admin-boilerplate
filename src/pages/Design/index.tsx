import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  removeComponent,
  removeLayout,
  removeStyle,
  removeTheme
} from "../../api/DeleteAPI";
import {
  findComponent,
  findLayout,
  findStyle,
  findTheme
} from "../../api/GetAPI";
import {
  Button,
  Container,
  PagingBar,
  SearchBar
} from "../../common/components";
import {
  ComponentIE
} from "../../common/interface";
import { CommonColor } from "../../common/styles";
import {
  DesignType,
  PageType,
  SortType
} from "../../common/type";
import { RoutePath } from "../../route/routes";
import List from "./List";
import Tap from "./Tap";

/**
 * @description Design Component
 * todo: 서버와 클라이언트에 isActive도 추가해두기
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Design: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const [designType, setDesignType] = useState<DesignType>("component");
  const [designs, setDesigns] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [nameSort, setNameSort] = useState<SortType>(undefined);

  /**
   * Type별 디자인 정보들을 가져온다.
   */
  const getDesignList = useCallback(
    async ({
      skip,
      type,
      searchKeyword,
      nameSort,
    }: {
      skip: number;
      type: DesignType;
      searchKeyword?: string;
      nameSort?: SortType;
    }) => {
      let designs: any;
      switch (type) {
        case "component":
          designs = await findComponent({
            skip,
            searchKeyword,
            nameSort,
          });
          break;
        case "layout":
          designs = await findLayout({
            skip,
            searchKeyword,
            nameSort,
          });
          break;
        case "style":
          designs = await findStyle({
            skip,
            searchKeyword,
            nameSort,
          });
          break;
        case "theme":
          designs = await findTheme({
            skip,
            searchKeyword,
            nameSort,
          });
          break;
      }

      setDesigns(designs[0]);
      setTotalCount(designs[1]);
    },
    []
  );

  /**
   * 초기 로드
   */
  useEffect(() => {
    getDesignList({ skip: 0, type: designType });
  }, []);

  /**
   * 상태별 로드 데이터
   */
  useEffect(() => {
    getDesignList({
      skip: 0,
      type: designType,
      searchKeyword,
      nameSort,
    });
  }, [designType, searchKeyword, nameSort]);

  /**
   * init
   */
  const init = useCallback((): void => {
    setActive(1);
    getDesignList({ skip: 0, type: designType });
  }, [designType]);

  /**
   * Page Click Event
   */
  const onPageClick = useCallback(
    (page: number) => {
      setActive(page + 1);
      getDesignList({ skip: page * 20, type: designType });
    },
    []
  );

  /**
   * 정렬
   */
  const onSortClick = useCallback((type: SortType): void => {
    setActive(1);
    setNameSort(type);
  }, []);

  /**
   * 상세
   */
  const history = useHistory();
  const onDetailClick = useCallback(
    ({
      type,
      item,
      designType,
    }: {
      type: PageType;
      item?: any;
      designType: DesignType;
    }): void => {
      history.push(RoutePath.DESIGN_DETAIL, { ...item, type, designType });
    },
    [history]
  );

  /**
   * 삭제
   */
  const onDeleteClick = useCallback(
    async (_id: number): Promise<void> => {
      try {
        switch (designType) {
          case "component":
            await removeComponent({ _id });
            break;
          case "layout":
            await removeLayout({ _id });
            break;
          case "style":
            await removeStyle({ _id });
            break;
          case "theme":
            await removeTheme({ _id });
            break;
        }
        init();
      } catch (e) {
        console.log("onDeleteClick Error", e);
      }
    },
    [designType, init]
  );

  /**
   * 검색
   */
  const onSearchKeyword = useCallback((searchKeyword: string): void => {
    setActive(1);
    setSearchKeyword(searchKeyword);
  }, []);

  /**
   * Type별 초기화
   */
  const onTypeClick = (type: DesignType): void => {
    setDesigns([]);
    setActive(1);
    setDesignType(type);
  };

  return (
    <Container.LayoutContainer>
      <Tap type={designType} onTypeClick={onTypeClick} />
      <Container.RowContainer style={{ justifyContent: "space-between" }}>
        <Button.DynamicColorButton
          style={{ marginBottom: 10 }}
          hoverBackgroundColor={CommonColor.HEADER_COLOR}
          activeBackgroundColor={CommonColor.BODY_COLOR}
          defaultBackgroundColor={CommonColor.TRANS_PARENT}
          onClick={() => onDetailClick({ type: "CREATE", designType })}
        >
          {designType.toUpperCase()} 생성
        </Button.DynamicColorButton>
        <SearchBar next={onSearchKeyword} />
      </Container.RowContainer>
      <List
        nameSort={nameSort}
        designs={designs}
        onSortClick={onSortClick}
        onDeleteClick={onDeleteClick}
        onDetailClick={onDetailClick}
        type={designType}
      />
      <PagingBar
        totalCount={totalCount}
        limit={20}
        active={active}
        onPageClick={onPageClick}
      />
    </Container.LayoutContainer>
  );
};

export default Design;
