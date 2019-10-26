import React from "react";
import ReactDOM from "react-dom";
import "todomvc-app-css/index.css";
// import './index.css';
import "todomvc-common/base.css";
import App from "./App";
import AppHeader from "./components/AppHeader";

ReactDOM.render(
  <>
    <AppHeader />
    <App />
  </>,
  document.getElementById("root")
);
