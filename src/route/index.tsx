import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import Layout from "../common/layouts";
import { configureStore } from "../redux";
import routes, { RouteIE } from "./routes";

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
