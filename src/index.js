import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "Redux/store";
import "antd/dist/antd.css";
import "./App.less";
import { ParentWrapper } from "Styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ParentWrapper>
        <App />
      </ParentWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
