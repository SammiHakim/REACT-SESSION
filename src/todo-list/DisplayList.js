import React, { useState } from "react";

const DisplayList = (props) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const [id, setId] = useState(null);
  return (
    <div>
      {props.list.length > 0 &&
        props.list.map((item) => {
          return (
            <div>
              <div key={item.id}>
                {item.task}{" "}
                <button onClick={() => props.delete(item.id)}>Delete</button>
                <button
                  onClick={() => {
                    setEdit(true);
                    setValue(item.task);
                    setId(item.id);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      {edit && props.list.length > 0 ? (
        <>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => {
              props.edit({ task: value, id: id });
              setValue("");
              setEdit(false);
            }}
          >
            Update
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DisplayList;
