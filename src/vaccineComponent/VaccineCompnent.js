import React, { useEffect, useState } from "react";
import { mockData } from "./mockData";
const VaccineCompnent = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${props.pincode}&date=03-07-2022`
      );
      if (response.status === 200) {
        const data = await response.json();
        setData([...data.sessions, ...mockData]);
      } else {
        throw Error("Please enter valid pincode");
      }
    } catch (e) {
      setData([]);
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>VaccineCompnent</div>
      <div>
        {data.length ? (
          data.map((item, ind) => {
            return (
              <div key={`val-${ind}`}>
                <span>Total - {item.available_capacity} </span>
                <span>Dose 1 -{item.available_capacity_dose1}</span>
                <span>Dose 2 -{item.available_capacity_dose2}</span>
                <span>Vaccine Type - {item.vaccine}</span>
              </div>
            );
          })
        ) : error ? (
          <div>{error}</div>
        ) : (
          "Loading...."
        )}
      </div>
    </>
  );
};

export default VaccineCompnent;

//Promises
//Async/Await
//then catch
