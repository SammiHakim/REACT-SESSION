import Counter from "../counter/Counter";
import ClassCounter from "../classComponent/ClassCounter";
import { useState } from "react";
import { MyComponent } from "../classComponent/ClassCounter";
import VaccineCompnent from "../vaccineComponent/VaccineCompnent";
import { Add } from "../addComponent/Add";
import GetVal from "../vaccineComponent/GetVal";
import CompnetA from "../contextExample/CompnetA";
import { createContext } from "react";
import ToDo from "../todo-list/ToDo";
import { useSelector, useDispatch } from "react-redux";
import Product from "../products/Product";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Cart } from "../products/Cart";
export const NameContext = createContext();
function App() {
  const [showComponent, setShowComponent] = useState("");
  const [valueTwo, setValueTwo] = useState(true);
  const [name, setName] = useState("FOSS Workshop");
  const dispatch = useDispatch();
  return (
    <div
      style={{
        position: "relative",
        top: "50%",
      }}
    >
      {/* <Routes>
        <Route path="/">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <select
        onChange={(e) => setShowComponent(e.target.value)}
        name="components"
        id="components"
      >
        <option value="Functional Component">Functional Component</option>
        <option value="Class Component">Class Component</option>
      </select>
      <div>
        {showComponent === "Functional Component" && <Counter />}
        <br />
        {showComponent === "Class Component" && <MyComponent />}
      </div> */}
      {/* <MyComponent /> */}
      {/* <VaccineCompnent /> */}
      {/* {valueTwo ? <Add name={"Foss Workshop"} /> : ""}
      <button onClick={() => setValueTwo(!valueTwo)}>Switch</button> */}
      {/* <GetVal /> */}
      {/* <NameContext.Provider value={name}>
        <CompnetA />
      </NameContext.Provider> */}
      {/* <ToDo /> */}
      {/* <div style={{ marginLeft: "40px" }}>{count}</div>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Subtract</button> */}
    </div>
  );
}

export { App };

// npm install redux react-redux
//actions => function type:incr , reducer:switch , store = createStore(rootReducer)

//state - store - action dispatch - redcuer => update state => store > component useSelector
