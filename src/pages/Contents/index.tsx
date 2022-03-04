import { removeContents } from "@/api/DeleteAPI";
import { findContents } from "@/api/GetAPI";
import { ContentsType } from "@/api/GetAPI/type";
import { Button, Container, PagingBar, SearchBar } from "@/common/components";
import { IComponent } from "@/common/interface";
import { CommonColor } from "@/common/styles";
import { PageType, SortType } from "@/common/type";
import { RoutePath } from "@/route/routes";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "./List";

/**
 * @description Contents Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const Contents: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const [contents, setContents] = useState<ContentsType[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [titleSort, setTitleSort] = useState<SortType>(undefined);
  const [subTitleSort, setSubTitleSort] = useState<SortType>(undefined);

  /**
   * Contents 정보들을 가져온다.
   */
  const getContentsList = useCallback(
    async ({
      skip,
      searchKeyword,
      titleSort,
      subTitleSort,
    }: {
      skip: number;
      searchKeyword?: string;
      titleSort?: SortType;
      subTitleSort?: SortType;
    }): Promise<void> => {
      const _contents = await findContents({
        skip,
        searchKeyword,
        titleSort,
        subTitleSort,
      });
      setContents(_contents[0]);
      setTotalCount(_contents[1]);
    },
    []
  );

  /**
   * 초기 로드
   */
  useEffect(() => {
    getContentsList({ skip: 0 });
  }, []);

  /**
   * 상태별 로드 데이터
   */
  useEffect(() => {
    getContentsList({
      skip: 0,
      searchKeyword,
      titleSort,
      subTitleSort,
    });
  }, [searchKeyword, titleSort, subTitleSort]);

  /**
   * init
   */
  const init = useCallback((): void => {
    setActive(1);
    getContentsList({ skip: 0 });
  }, []);

  /**
   * Page Click Event
   */
  const onPageClick = useCallback(
    (page: number): void => {
      setActive(page + 1);
      getContentsList({ skip: page * 20 });
    },
    []
  );

  /**
   * 정렬
   */
  const onSortClick = useCallback((entity: string, type: SortType): void => {
    setActive(1);
    if (entity.match("title")) {
      setTitleSort(type);
      setSubTitleSort(undefined);
    }
    if (entity.match("subTitle")) {
      setSubTitleSort(type);
      setTitleSort(undefined);
    }
  }, []);

  /**
   * 상세
   */
  const navigate = useNavigate();
  const onDetailClick = useCallback(
    ({ type, item }: { type: PageType; item?: ContentsType }): void => {
      navigate(RoutePath.CONTENTS_DETAIL, { state: { ...item, type }});
    },
    []
  );

  /**
   * 삭제
   */
  const onDeleteClick = useCallback(
    async (contentId: number): Promise<void> => {
      await removeContents({ contentId });
      init();
    },
    []
  );

  /**
   * 검색
   */
  const onSearchKeyword = useCallback((searchKeyword: string): void => {
    setActive(1);
    setSearchKeyword(searchKeyword);
  }, []);

  return (
    <Container.LayoutContainer>
      <Container.RowContainer style={{ justifyContent: "space-between" }}>
        <Button.DynamicColorButton
          style={{ marginBottom: 10 }}
          hoverBackgroundColor={CommonColor.HEADER_COLOR}
          activeBackgroundColor={CommonColor.BODY_COLOR}
          defaultBackgroundColor={CommonColor.TRANS_PARENT}
          onClick={() => onDetailClick({ type: "CREATE" })}
        >
          컨텐츠 생성
        </Button.DynamicColorButton>
        <SearchBar next={onSearchKeyword} />
      </Container.RowContainer>
      <List
        titleSort={titleSort}
        subTitleSort={subTitleSort}
        contents={contents}
        onSortClick={onSortClick}
        onDeleteClick={onDeleteClick}
        onDetailClick={onDetailClick}
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

export default Contents;
