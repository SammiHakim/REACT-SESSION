import React from "react";
import { useState } from "react";
import ShowCount from "./ShowCount";

function Counter() {
  let [counter, setCounter] = useState(0);
  const [childVal, setChildVal] = useState("");
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const showChildValue = (val) => {
    setChildVal(val);
  };
  return (
    <div style={{ marginLeft: "40%" }}>
      <div>Counter Component</div>
      <ShowCount count={counter} showChild={showChildValue} />
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <p>{childVal}</p>
    </div>
  );
}

export default Counter;

//ceate react app
//json
//node modules
//index app

//Use plain javascript to increase and decrease the count of value and display it on dom

//1.Create React app (understand the flow of react components)
//2.Create component to display HELLO WORLD
//3.Create counter component (Increase and decrease the count from parent component and display the values from child component)
