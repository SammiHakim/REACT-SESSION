import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./main/App";
import { Add } from "./addComponent/Add";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/* <Add name={"FOSS WORKSHOP"} /> */}
  </>
);
