import { removeUser } from "@/api/DeleteAPI";
import { findUser } from "@/api/GetAPI";
import { IUserInfo } from "@/api/interface";
import { Button, Container, PagingBar, SearchBar } from "@/common/components";
import { IComponent } from "@/common/interface";
import { CommonColor } from "@/common/styles";
import { PageType, SortType } from "@/common/type";
import { RoutePath } from "@/route/routes";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "./List";

/**
 * @description User Component
 * @param {IComponent} props
 * @returns {React.ReactElement}
 */
const User: React.FC<IComponent> = (
  props: IComponent
): React.ReactElement => {
  const [users, setUsers] = useState<IUserInfo[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [emailSort, setEmailSort] = useState<SortType>(undefined);
  const [nameSort, setNameSort] = useState<SortType>(undefined);

  /**
   * User 정보들을 가져온다.
   */
  const getUserList = useCallback(
    async ({
      skip,
      searchKeyword,
      emailSort,
      nameSort,
    }: {
      skip: number;
      searchKeyword?: string;
      emailSort?: SortType;
      nameSort?: SortType;
    }): Promise<void> => {
      const _users = await findUser({
        skip,
        searchKeyword,
        emailSort,
        nameSort,
      });
      setUsers(_users[0]);
      setTotalCount(_users[1]);
    },
    []
  );

  /**
   * 초기 로드
   */
  useEffect(() => {
    getUserList({ skip: 0 });
  }, []);

  /**
   * 상태별 로드 데이터
   */
  useEffect(() => {
    getUserList({ skip: 0, searchKeyword, emailSort, nameSort });
  }, [searchKeyword, emailSort, nameSort]);

  /**
   * init
   */
  const init = useCallback((): void => {
    setActive(1);
    getUserList({ skip: 0 });
  }, []);

  /**
   * Page Click Event
   */
  const onPageClick = useCallback(
    (page: number): void => {
      setActive(page + 1);
      getUserList({
        skip: page * 20,
        searchKeyword,
        emailSort,
        nameSort,
      });
    },
    [searchKeyword, emailSort, nameSort]
  );

  /**
   * 정렬
   */
  const onSortClick = useCallback((entity: string, type: SortType): void => {
    setActive(1);
    if (entity.match("email")) {
      setEmailSort(type);
      setNameSort(undefined);
    }
    if (entity.match("name")) {
      setNameSort(type);
      setEmailSort(undefined);
    }
  }, []);

  /**
   * 상세
   */
  const navigate = useNavigate();
  const onDetailClick = useCallback(
    ({ type, item }: { type: PageType; item?: IUserInfo }): void => {
      navigate(RoutePath.USER_DETAIL, { state: { ...item, type }});
    },
    []
  );

  /**
   * 삭제
   */
  const onDeleteClick = useCallback(
    async (userId: number): Promise<void> => {
      await removeUser({ userId });
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
          계정 생성
        </Button.DynamicColorButton>
        <SearchBar next={onSearchKeyword} />
      </Container.RowContainer>
      <List
        emailSort={emailSort}
        nameSort={nameSort}
        users={users}
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

export default User;
