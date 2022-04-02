import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";
console.log(store.getState()); ///cannot read properties of undefined get State

const root = document.querySelector("#root");
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  root
);
