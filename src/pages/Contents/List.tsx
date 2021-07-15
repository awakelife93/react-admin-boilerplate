import _ from "lodash";
import { Table } from "react-bootstrap";
import { ContentsIE } from "../../api/GetAPI/interface";

const List = ({ contents }: { contents: ContentsIE[] }): React.ReactElement => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>제목</th>
          <th>부제목</th>
          <th>이미지 유무</th>
        </tr>
      </thead>
      <tbody>
        {!_.isEmpty(contents) &&
          contents.map((cont: ContentsIE, index: number) => {
            return (
              <tr key={`user_List_Key${index}`}>
                <td>{cont.contId}</td>
                <td>{cont.contTitle}</td>
                <td>{cont.contSubTitle}</td>
                <td>{_.isEmpty(cont.contImageLink) ? "없음" : "있음"}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};
export default List;
