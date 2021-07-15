import { useCallback, useEffect, useState } from "react";
import { findUser, findUserCount } from "../../api/GetAPI";
import { UserInfoIE } from "../../api/interface";
import { Container, PagingBar } from "../../common/components";
import { defaultPagingCount } from "../../common/const";
import { ComponentIE } from "../../common/interface";
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

  // init
  useEffect(() => {
    if (totalCount === 0) {
      getUserCount();
    }

    if (users.length === 0) {
      getUserList(0);
    }
  }, [users.length, totalCount]);

  /**
   * User List의 Total Count를 가져온다.
   */
  const getUserCount = useCallback(async () => {
    const totalCount = await findUserCount();
    setTotalCount(totalCount);
  }, [totalCount]);

  /**
   * User 정보들을 가져온다.
   */
  const getUserList = useCallback(
    async (skip: number) => {
      const users = await findUser(skip);
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
      getUserList(page * defaultPagingCount);
    },
    [active]
  );

  return (
    <Container.LayoutContainer>
      <List users={users} />
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
