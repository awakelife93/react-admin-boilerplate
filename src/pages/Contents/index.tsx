import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeContents } from "../../api/DeleteAPI";
import { findContents } from "../../api/GetAPI";
import { ContentsType } from "../../api/GetAPI/type";
import {
  Button,
  Container,
  PagingBar,
  SearchBar
} from "../../common/components";
import { ComponentIE } from "../../common/interface";
import { CommonColor } from "../../common/styles";
import { PageType, SortType } from "../../common/type";
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
  const [contents, setContents] = useState<ContentsType[]>([]);
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
  }, []);

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
  }, [searchKeyword, contTitleSort, contSubTitleSort]);

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
    async (contId: number): Promise<void> => {
      await removeContents({ contId });
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
        contTitleSort={contTitleSort}
        contSubTitleSort={contSubTitleSort}
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
