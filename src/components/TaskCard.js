
import React, { useState,useEffect } from "react";

function TaskCard({task, handleDelete, moveCard, updateTask}){
const [edit, setEdit] = useState(false);
const [title,setTitle]=useState(task.title);
const [desc,setDesc]=useState(task.description);
const handleSave = () => {
  updateTask(title,desc,task.id);
  setEdit(false);
};
useEffect(()=>{
  setTitle(task.title);
  setDesc(task.description);
},[edit])
return (
  <div className="TaskCard">
    {edit ? (
      <>
      <b>Title:</b> <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} /><br/>
      <b>Description:</b> <input type="text" placeholder="description" value={desc} onChange={(e)=>setDesc(e.target.value)}/><br/>
      <button onClick={handleSave}>Save</button>
      </>
    ) : (
      <>
        <h3>Title: {task.title}</h3>
        <p>Description: {task.description}</p>
        <button onClick={() => setEdit(true)}>Update</button>
      </>
    )}
    <button onClick={() => handleDelete(task.id)}>Delete</button>
    <select
      id="list"
      name="list"
      value={task.list}
      onChange={(e) => moveCard(e, task.id)}
    >
      <option value="list1">List 1</option>
      <option value="list2">List 2</option>
      <option value="list3">List 3</option>
    </select>
  </div>
);
};
export default TaskCard