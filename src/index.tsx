import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import ActionProvider from "./common/contexts/ActionContext";
import "./index.css";
import reduxSelector from "./redux";
import { ReduxType } from "./redux/type";
import reportWebVitals from "./reportWebVitals";

const useRedux: ReduxType = "toolkit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReduxProvider store={reduxSelector[useRedux]()}>
    <ActionProvider useRedux={useRedux}>
      <App />
    </ActionProvider>
  </ReduxProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
