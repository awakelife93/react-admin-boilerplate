import { Provider } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Layout from "../common/layouts";
import routes, { RouteIE } from "./routes";
import { configureStore } from "../redux";

const store = configureStore();

const RouteComponent = () => {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Switch>
          {routes.map((route: RouteIE, idx: number) => {
            return (
              <Route
                key={`route_key_${idx}`}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps) => {
                  return <Layout {...props} {...route} />;
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
};

export default RouteComponent;
