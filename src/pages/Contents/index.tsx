import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteContents } from "../../api/DeleteAPI";
import { findContents } from "../../api/GetAPI";
import { ContentsIE } from "../../api/GetAPI/interface";
import {
  Button,
  Container,
  PagingBar,
  SearchBar,
} from "../../common/components";
import { defaultPagingCount } from "../../common/const";
import { ComponentIE, PageType, SortType } from "../../common/interface";
import { RoutePath } from "../../route/routes";
import List from "./List";

/**
 * @description Contents Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Contents: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const [contents, setContents] = useState<ContentsIE[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [contTitleSort, setContTitleSort] = useState<SortType>(undefined);
  const [contSubTitleSort, setContSubTitleSort] = useState<SortType>(undefined);

  /**
   * Contents 정보들을 가져온다.
   */
  const getContentsList = useCallback(
    async ({
      skip,
      searchKeyword,
      contTitleSort,
      contSubTitleSort,
    }: {
      skip: number;
      searchKeyword?: string;
      contTitleSort?: SortType;
      contSubTitleSort?: SortType;
    }): Promise<void> => {
      const _contents = await findContents({
        skip,
        searchKeyword,
        contTitleSort,
        contSubTitleSort,
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
  }, [getContentsList]);

  /**
   * 상태별 로드 데이터
   */
  useEffect(() => {
    getContentsList({
      skip: 0,
      searchKeyword,
      contTitleSort,
      contSubTitleSort,
    });
  }, [getContentsList, searchKeyword, contTitleSort, contSubTitleSort]);

  /**
   * init
   */
  const init = useCallback((): void => {
    setActive(1);
    getContentsList({ skip: 0 });
  }, [getContentsList]);

  /**
   * Page Click Event
   */
  const onPageClick = useCallback(
    (page: number): void => {
      setActive(page + 1);
      getContentsList({ skip: page * defaultPagingCount });
    },
    [getContentsList]
  );

  /**
   * 정렬
   */
  const onSortClick = useCallback((entity: string, type: SortType): void => {
    setActive(1);
    if (entity.match("contTitle")) {
      setContTitleSort(type);
      setContSubTitleSort(undefined);
    }
    if (entity.match("contSubTitle")) {
      setContSubTitleSort(type);
      setContTitleSort(undefined);
    }
  }, []);

  /**
   * 상세
   */
  const history = useHistory();
  const onDetailClick = useCallback(
    ({ type, item }: { type: PageType; item?: ContentsIE }): void => {
      history.push(RoutePath.CONTENTS_DETAIL, { ...item, type });
    },
    [history]
  );

  /**
   * 삭제
   */
  const onDeleteClick = useCallback(
    async (contId: number): Promise<void> => {
      await deleteContents({ contId });
      init();
    },
    [init]
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
        <Button.SubMitButton
          onClick={() => onDetailClick({ type: "CREATE" })}
          style={{ margin: 0, marginBottom: 10 }}
        >
          컨텐츠 생성
        </Button.SubMitButton>
        <SearchBar next={onSearchKeyword} />
      </Container.RowContainer>
      <List
        contTitleSort={contTitleSort}
        contSubTitleSort={contSubTitleSort}
        contents={contents}
        onSortClick={onSortClick}
        onDeleteClick={onDeleteClick}
        onDetailClick={onDetailClick}
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

export default Contents;
