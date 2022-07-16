import React from "react";
import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducerFunc = (action) => {
  switch (action.type) {
    case "increment":
      return { count: initialState.count + 1 };
    default:
      return initialState;
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return <div>ReducerExample</div>;
};
// onclick = {dispatch({type:'increment',paload:5})}
export default ReducerExample;
