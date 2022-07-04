import React, { useState } from "react";
import VaccineCompnent from "./VaccineCompnent";
const GetVal = () => {
  const [pincode, setPincode] = useState();
  const [submit, setSetSubmit] = useState(false);
  const handlePincode = (e) => {
    setPincode(e.target.value);
  };
  return (
    <>
      <input type="number" value={pincode} onChange={handlePincode} />
      <button onClick={() => setSetSubmit(true)}>Submit</button>
      <button
        onClick={() => {
          setSetSubmit(false);
          setPincode(0);
        }}
      >
        Reset
      </button>
      {submit && <VaccineCompnent pincode={pincode} />}
    </>
  );
};

export default GetVal;
