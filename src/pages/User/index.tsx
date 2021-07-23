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
import { ComponentIE } from "../../common/interface";
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

  useEffect(() => {
    if (totalCount === 0) {
      getUserCount();
    }

    if (users.length === 0) {
      getUserList(0);
    }
  }, [users.length, totalCount]);

  // init
  const init = useCallback(() => {
    setActive(1);
    getUserCount();
    getUserList(0);
  }, []);
  /**
   * User List의 Total Count를 가져온다.
   */
  const getUserCount = useCallback(
    async (searchKeyword?: string) => {
      const totalCount = await findUserCount({ searchKeyword });
      setTotalCount(totalCount);
    },
    [totalCount]
  );

  /**
   * User 정보들을 가져온다.
   */
  const getUserList = useCallback(
    async (skip: number, searchKeyword?: string) => {
      const users = await findUser({ skip, searchKeyword });
      setUsers(users);
    },
    [users.length]
  );

  /**
   * Page Click Event
   */
  const onPageClick = useCallback(
    (page: number) => {
      setActive(page + 1);
      getUserList(page * defaultPagingCount, searchKeyword);
    },
    [active, searchKeyword]
  );

  const history = useHistory();
  const onDetailClick = useCallback(
    ({ type, item }: { type: "CREATE" | "MODIFY"; item?: UserInfoIE }) => {
      history.push(RoutePath.USER_DETAIL, { ...item, type });
    },
    []
  );

  const onDeleteClick = useCallback(async (userId: number) => {
    await deleteUser({ userId });
    init();
  }, []);

  const onSearchKeyword = useCallback(async (searchKeyword: string) => {
    setActive(1);
    setSearchKeyword(searchKeyword);
    getUserList(0, searchKeyword);
    getUserCount(searchKeyword);
  }, []);

  // todo: 정렬 기능
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
        users={users}
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
