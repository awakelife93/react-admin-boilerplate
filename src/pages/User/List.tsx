import _ from "lodash";
import { Table } from "react-bootstrap";
import { IUserInfo } from "../../api/interface";
import { TableButton, TableSort } from "../../common/components";
import { SortType } from "../../common/type";

const List = ({
  userEmailSort,
  userNicknameSort,
  users,
  onSortClick,
  onDeleteClick,
  onDetailClick,
}: {
  userEmailSort: SortType;
  userNicknameSort: SortType;
  users: IUserInfo[];
  onSortClick: Function;
  onDeleteClick: Function;
  onDetailClick: Function;
}): React.ReactElement => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <TableSort
            sort={userEmailSort}
            title={"이메일"}
            next={(sort: SortType) => onSortClick("userEmail", sort)}
          />
          <TableSort
            sort={userNicknameSort}
            title={"닉네임"}
            next={(sort: SortType) => onSortClick("userNickname", sort)}
          />
          <th>권한</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(users) &&
          users.map((user: IUserInfo, index: number) => {
            const roleName: string = user.userRoles
              .map((roles: any) => {
                return roles.role.roleName;
              })
              .join(", ");

            return (
              <tr key={`user_List_Key${index}`}>
                <td>{user.userId}</td>
                <td>{user.userEmail}</td>
                <td>{user.userNickname}</td>
                <td>{roleName}</td>
                <TableButton
                  tdStyleItems={{
                    paddingRight: 1,
                  }}
                  title={"수정"}
                  next={() => onDetailClick({ type: "MODIFY", item: user })}
                />
                <TableButton
                  title={"삭제"}
                  next={() => onDeleteClick(user.userId)}
                />
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default List;
