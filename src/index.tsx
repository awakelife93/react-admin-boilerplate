import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import ActionProvider from "./common/contexts/ActionContext";
import "./index.css";
import { configureStore } from "./redux";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ReduxProvider store={configureStore()}>
    <ActionProvider>
      <App />
    </ActionProvider>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
