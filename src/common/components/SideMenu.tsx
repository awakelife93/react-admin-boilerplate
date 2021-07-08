import _ from "lodash";
import { Link } from "react-router-dom";
import { Container, Label } from ".";
import routes, { RouteIE } from "../../route/routes";

const SideMenu = () => {
  return (
    <Container.LayoutContainer
      style={{
        width: 200,
        backgroundColor: "white",
      }}
    >
      <Container.ColumnContainer>
        {!_.isEmpty(routes) &&
          routes.map((route: RouteIE, idx: number) => {
            return (
              <Link
                key={`sideMenu_key_${idx}`}
                to={route.path}
                style={{ marginBottom: 10 }}
              >
                {route.title}
              </Link>
            );
          })}
      </Container.ColumnContainer>
    </Container.LayoutContainer>
  );
};

export default SideMenu;
