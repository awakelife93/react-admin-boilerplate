import _ from "lodash";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container, Image } from ".";
import routes, { RouteIE } from "../../route/routes";
import CommonColor from "../styles/color";

const SideMenu = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      style={{
        width: 200,
        backgroundColor: CommonColor.WHITE,
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        padding: 30,
      }}
    >
      <Container.ColumnContainer>
        {!_.isEmpty(routes) &&
          routes.map((route: RouteIE, idx: number) => {
            return (
              <Link key={`sidMenu_list_Key${idx}`} to={route.path}>
                <Navbar.Brand>
                  <img
                    alt=""
                    src="/assets/images/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  {route.title}
                </Navbar.Brand>
              </Link>
            );
          })}
      </Container.ColumnContainer>
    </Navbar>
  );
};

export default SideMenu;
