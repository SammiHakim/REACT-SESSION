import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./main/App";
import { Add } from "./addComponent/Add";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    {/* <Add name={"FOSS WORKSHOP"} /> */}
  </>
);
