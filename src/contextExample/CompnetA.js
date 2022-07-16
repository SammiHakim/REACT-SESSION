import React from "react";
import ComponentB from "./ComponentB";
const CompnetA = () => {
  console.log("Component A");
  return (
    <div>
      <ComponentB />
    </div>
  );
};

export default CompnetA;
