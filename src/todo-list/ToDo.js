import React, { useState } from "react";
import DisplayList from "./DisplayList";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (list.length) {
      setList([...list, { task: task, id: list.length }]);
      setTask("");
    } else {
      setList([{ task: task, id: 0 }]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    let newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
  };

  const handleEdit = (payload) => {
    let newList = list.map((item) => {
      if (item.id === payload.id) {
        return payload;
      } else {
        return item;
      }
    });
    setList(newList);
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        <DisplayList list={list} delete={handleDelete} edit={handleEdit} />
      </div>
    </div>
  );
};

export default ToDo;
