import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Container,
  PagingBar,
  SearchBar,
} from "../../common/components";
import { defaultPagingCount } from "../../common/const";
import { ComponentIE, PageType, SortType } from "../../common/interface";
import Tap from "./Tap";
import List from "./List";
import {
  findComponent,
  findLayout,
  findStyle,
  findTheme,
} from "../../api/GetAPI";
import { useHistory } from "react-router-dom";
import {
  removeComponent,
  removeLayout,
  removeStyle,
  removeTheme,
} from "../../api/DeleteAPI";

/**
 * @description Design Component
 * todo: 서버와 클라이언트에 isActive도 추가해두기
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
      type: "component" | "layout" | "style" | "theme";
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
  }, [getDesignList]);

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
  }, [getDesignList, designType, searchKeyword, nameSort]);

  /**
   * init
   */
  const init = useCallback((): void => {
    setActive(1);
    getDesignList({ skip: 0, type: designType });
  }, [getDesignList, designType]);

  /**
   * Page Click Event
   */
  const onPageClick = useCallback(
    (page: number) => {
      setActive(page + 1);
      getDesignList({ skip: page * defaultPagingCount, type: designType });
    },
    [active]
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
    ({ type, item }: { type: PageType; item?: any }): void => {
      // history.push(RoutePath.CONTENTS_DETAIL, { ...item, type });
      alert("개발 예정입니다.");
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
  const onTypeClick = (
    type: "component" | "layout" | "style" | "theme"
  ): void => {
    setDesigns([]);
    setActive(1);
    setDesignType(type);
  };

  return (
    <Container.LayoutContainer>
      <Tap type={designType} onTypeClick={onTypeClick} />
      <Container.RowContainer style={{ justifyContent: "space-between" }}>
        <Button.SubMitButton
          onClick={() => onDetailClick({ type: "CREATE" })}
          style={{ margin: 0, marginBottom: 10 }}
        >
          {designType.toUpperCase()} 생성
        </Button.SubMitButton>
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
        limit={defaultPagingCount}
        active={active}
        onPageClick={onPageClick}
      />
    </Container.LayoutContainer>
  );
};

export default Design;
