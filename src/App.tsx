import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import useAction from "./common/hooks/useAction";
import useAuth from "./common/hooks/useInitUserProfile";
import "./core/i18n";
import Route from "./route";
import { setDefaultLanguage, setWindowFunction } from "./utils";

const App = (): React.ReactElement => {
  const { initUserInfoAction, showModalAction } = useAction();
  useAuth();
  
  const initialize = (): void => {
    setWindowFunction({ initUserInfoAction, showModalAction });
    setDefaultLanguage();
  };

  useEffect(() => {
    initialize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Router>
      <Route />
    </Router>
  )
};

export default App;
