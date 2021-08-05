import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteUser } from "../../api/DeleteAPI";
import { findUser, findUserCount } from "../../api/GetAPI";
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
   * 초기 로드
   */
  useEffect(() => {
    getUserList({ skip: 0 });
  }, []);

  /**
   * 상태별 로드 데이터
   */
  useEffect(() => {
    getUserList({ skip: 0, searchKeyword, userEmailSort, userNicknameSort });
  }, [searchKeyword, userEmailSort, userNicknameSort]);

  /**
   * init
   */
  const init = useCallback((): void => {
    setActive(1);
    getUserList({ skip: 0 });
  }, []);

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
      const users = await findUser({
        skip,
        searchKeyword,
        userEmailSort,
        userNicknameSort,
      });
      setUsers(users[0]);
      setTotalCount(users[1]);
    },
    [users.length]
  );

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
    [searchKeyword, userEmailSort, userNicknameSort]
  );

  /**
   * 상세
   */
  const history = useHistory();
  const onDetailClick = useCallback(
    ({ type, item }: { type: PageType; item?: UserInfoIE }): void => {
      history.push(RoutePath.USER_DETAIL, { ...item, type });
    },
    []
  );

  /**
   * 삭제
   */
  const onDeleteClick = useCallback(async (userId: number): Promise<void> => {
    await deleteUser({ userId });
    init();
  }, []);

  /**
   * 검색
   */
  const onSearchKeyword = useCallback((searchKeyword: string): void => {
    setActive(1);
    setSearchKeyword(searchKeyword);
  }, []);

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
