import Counter from "../counter/Counter";
import ClassCounter from "../classComponent/ClassCounter";
import { useState } from "react";
import { MyComponent } from "../classComponent/ClassCounter";
import VaccineCompnent from "../vaccineComponent/VaccineCompnent";
import { Add } from "../addComponent/Add";
import GetVal from "../vaccineComponent/GetVal";
function App() {
  const [showComponent, setShowComponent] = useState("");
  const [valueTwo, setValueTwo] = useState(true);
  return (
    <div>
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
      <GetVal />
    </div>
  );
}

export { App };