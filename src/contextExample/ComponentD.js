import React from "react";
import { NameContext } from "../main/App";
import { useContext } from "react";
const ComponentD = () => {
  const value = useContext(NameContext);
  console.log("Component D");
  return <div>{value}</div>;
};

export default ComponentD;
