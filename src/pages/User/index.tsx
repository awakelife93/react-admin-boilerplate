import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { isTemplateExpression } from "typescript";
import { deleteUser } from "../../api/DeleteAPI";
import { findUser, findUserCount } from "../../api/GetAPI";
import { UserInfoIE } from "../../api/interface";
import { Button, Container, PagingBar } from "../../common/components";
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
    getUserCount();
    getUserList(0);
  }, []);
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

  return (
    <Container.LayoutContainer>
      <Button.SubMitButton
        onClick={() => onDetailClick({ type: "CREATE" })}
        style={{ margin: 0, marginBottom: 10 }}
      >
        계정 생성
      </Button.SubMitButton>
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
