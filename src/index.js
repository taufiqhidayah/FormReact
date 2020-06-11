import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import ImmutableForm from "./ImmutableForm";
import ImmutableValues from "./ImmutableValues";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Immutable JS Example</h2>
      <ImmutableForm onSubmit={showResults} />
      <ImmutableValues form="immutableExample" />
    </div>
  </Provider>,
  rootEl
);
