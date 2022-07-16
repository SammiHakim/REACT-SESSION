import React from "react";
import ComponentC from "./ComponentC";
const ComponentB = () => {
  console.log("Component B");
  return (
    <div>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
