import _ from "lodash";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from ".";
import routes, { RouteIE } from "../../route/routes";
import { CommonColor } from "../styles";

const SideMenu: React.FC = (): React.ReactElement => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
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
            if (!_.isEmpty(route.title)) {
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
            }
          })}
      </Container.ColumnContainer>
    </Navbar>
  );
};

export default SideMenu;
