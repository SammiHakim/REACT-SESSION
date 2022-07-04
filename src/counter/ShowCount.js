import React from "react";

const ShowCount = (props) => {
  console.log(props);
  return (
    <>
      <div>{props.count}</div>
      <button onClick={() => props.showChild("child component value")}>
        Child Value
      </button>
    </>
  );
};

export default ShowCount;
