import React, { useEffect, useState } from "react";

const Add = (props) => {
  const [value, setValue] = useState(props.name);
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     if (count === 5) {
  //       console.log(props.name, Math.random());
  //     }
  //     // setValue("Sammi Hakim");
  //     return () => {
  //       console.log("component will unmount");
  //     };
  //   }, [count]);
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>Hello World-{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
};

export { Add };

// useEffect(callback function,[array of dependcies])
//constructor - componentDidMount
//componentDidUpdate
//componentUnMount
// first time load , array value call , unmount ret()
