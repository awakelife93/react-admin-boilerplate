import { IUserInfo } from "@/api/interface";
import { TableButton, TableSort } from "@/common/components";
import { SortType } from "@/common/type";
import _ from "lodash";
import { Table } from "react-bootstrap";

const List = ({
  emailSort,
  nameSort,
  users,
  onSortClick,
  onDeleteClick,
  onDetailClick,
}: {
  emailSort: SortType;
  nameSort: SortType;
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
            sort={emailSort}
            title={"이메일"}
            next={(sort: SortType) => onSortClick("email", sort)}
          />
          <TableSort
            sort={nameSort}
            title={"닉네임"}
            next={(sort: SortType) => onSortClick("name", sort)}
          />
          <th>권한</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(users) &&
          users.map((user: IUserInfo, index: number) => {
            return (
              <tr key={`user_List_Key${index}`}>
                <td>{user.userId}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
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
