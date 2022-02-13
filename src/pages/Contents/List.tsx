import _ from "lodash";
import { Table } from "react-bootstrap";
import { ContentsType } from "../../api/GetAPI/type";
import { TableButton, TableSort } from "../../common/components";
import { SortType } from "../../common/type";

const List = ({
  contTitleSort,
  contSubTitleSort,
  contents,
  onSortClick,
  onDeleteClick,
  onDetailClick,
}: {
  contTitleSort: SortType;
  contSubTitleSort: SortType;
  contents: ContentsType[];
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
            sort={contTitleSort}
            title={"제목"}
            next={(sort: SortType) => onSortClick("contTitle", sort)}
          />
          <TableSort
            sort={contSubTitleSort}
            title={"부제목"}
            next={(sort: SortType) => onSortClick("contSubTitle", sort)}
          />
          <th>이미지 유무</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(contents) &&
          contents.map((cont: ContentsType, index: number) => {
            return (
              <tr key={`user_List_Key${index}`}>
                <td>{cont.contId}</td>
                <td>{cont.contTitle}</td>
                <td>{cont.contSubTitle}</td>
                <td>{_.isEmpty(cont.contImageLink) ? "없음" : "있음"}</td>
                <TableButton
                  tdStyleItems={{
                    paddingRight: 1,
                  }}
                  title={"수정"}
                  next={() => onDetailClick({ type: "MODIFY", item: cont })}
                />
                <TableButton
                  title={"삭제"}
                  next={() => onDeleteClick(cont.contId)}
                />
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default List;
