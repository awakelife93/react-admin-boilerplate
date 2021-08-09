import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteUser } from "../../api/DeleteAPI";
import { findUser } from "../../api/GetAPI";
import { UserInfoIE } from "../../api/interface";
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
 * @description User Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const User: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const [users, setUsers] = useState<UserInfoIE[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [userEmailSort, setUserEmailSort] = useState<SortType>(undefined);
  const [userNicknameSort, setUserNicknameSort] = useState<SortType>(undefined);

  /**
   * User 정보들을 가져온다.
   */
  const getUserList = useCallback(
    async ({
      skip,
      searchKeyword,
      userEmailSort,
      userNicknameSort,
    }: {
      skip: number;
      searchKeyword?: string;
      userEmailSort?: SortType;
      userNicknameSort?: SortType;
    }): Promise<void> => {
      const _users = await findUser({
        skip,
        searchKeyword,
        userEmailSort,
        userNicknameSort,
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
  }, [getUserList]);

  /**
   * 상태별 로드 데이터
   */
  useEffect(() => {
    getUserList({ skip: 0, searchKeyword, userEmailSort, userNicknameSort });
  }, [searchKeyword, userEmailSort, userNicknameSort, getUserList]);

  /**
   * init
   */
  const init = useCallback((): void => {
    setActive(1);
    getUserList({ skip: 0 });
  }, [getUserList]);

  /**
   * Page Click Event
   */
  const onPageClick = useCallback(
    (page: number): void => {
      setActive(page + 1);
      getUserList({
        skip: page * defaultPagingCount,
        searchKeyword,
        userEmailSort,
        userNicknameSort,
      });
    },
    [searchKeyword, userEmailSort, userNicknameSort, getUserList]
  );

  /**
   * 정렬
   */
  const onSortClick = useCallback((entity: string, type: SortType): void => {
    setActive(1);
    if (entity.match("userEmail")) {
      setUserEmailSort(type);
      setUserNicknameSort(undefined);
    }
    if (entity.match("userNickname")) {
      setUserNicknameSort(type);
      setUserEmailSort(undefined);
    }
  }, []);

  /**
   * 상세
   */
  const history = useHistory();
  const onDetailClick = useCallback(
    ({ type, item }: { type: PageType; item?: UserInfoIE }): void => {
      history.push(RoutePath.USER_DETAIL, { ...item, type });
    },
    [history]
  );

  /**
   * 삭제
   */
  const onDeleteClick = useCallback(
    async (userId: number): Promise<void> => {
      await deleteUser({ userId });
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
          계정 생성
        </Button.SubMitButton>
        <SearchBar next={onSearchKeyword} />
      </Container.RowContainer>
      <List
        userEmailSort={userEmailSort}
        userNicknameSort={userNicknameSort}
        users={users}
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

export default User;
