import React from "react";
import ComponentD from "./ComponentD";
const ComponentC = () => {
  console.log("Component C");
  return (
    <div>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
