import _ from "lodash";
import { Table } from "react-bootstrap";
import { UserInfoIE } from "../../api/interface";

const List = ({ users }: { users: UserInfoIE[] }): React.ReactElement => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>이메일</th>
          <th>닉네임</th>
          <th>등급</th>
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
                    <td key={`user_List_Role_Key${index}`}>
                      {roles.role.roleName}
                    </td>
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};
export default List;
