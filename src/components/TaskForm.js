import React, { useState } from "react";
import {toast} from "react-toastify";
function  TaskForm ({addTask}){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [list, setList] = useState("select");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (title !== "" && desc !== "" && list !== "select") {
        addTask({
          id: crypto.randomUUID(),
          title: title,
          description: desc,
          list: list,
        });
        setTitle("");
        setDesc("");
        setList("select");
      } else {
        toast.warning("all the fields are mandatory!",{
            theme: "light",
        }) 
        };
      }
    
  
    return (
      <div className="TaskForm">
        <h2>Add Task</h2>
        <form>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <select
            id="list"
            name="list"
            value={list}
            onChange={(e) => setList(e.target.value)}
          >
            <option value="select" disabled>
              ---Select---
            </option>
            <option value="list1">List 1</option>
            <option value="list2">List 2</option>
            <option value="list3">List 3</option>
          </select>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default TaskForm;
  