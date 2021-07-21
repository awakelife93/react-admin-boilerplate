import _ from "lodash";
import { Table } from "react-bootstrap";
import { UserInfoIE } from "../../api/interface";
import { Button } from "../../common/components";

const List = ({
  users,
  onDeleteClick,
  onDetailClick,
}: {
  users: UserInfoIE[];
  onDeleteClick: Function;
  onDetailClick: Function;
}): React.ReactElement => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>이메일</th>
          <th>닉네임</th>
          <th colSpan={2}>권한</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(users) &&
          users.map((user: UserInfoIE, index: number) => {
            return (
              <tr key={`user_List_Key${index}`}>
                <td>{user.userId}</td>
                <td>{user.userEmail}</td>
                <td>{user.userNickname}</td>
                {user.userRoles.map((roles: any, index2: number) => {
                  return (
                    <td key={`user_List_Role_Key${index2}`}>
                      {roles.role.roleName}
                    </td>
                  );
                })}
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() =>
                      onDetailClick({ type: "MODIFY", item: user })
                    }
                  >
                    수정
                  </Button.TextButton>
                </td>
                <td>
                  <Button.TextButton
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => onDeleteClick(user.userId)}
                  >
                    삭제
                  </Button.TextButton>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};
export default List;
