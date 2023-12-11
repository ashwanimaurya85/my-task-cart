import React from "react";
import TaskCard from "./TaskCard";
function IndividualList({title,tasks,handleDelete,moveCard,updateTask}){


    return(
       <div className="list">
<h2>{title}</h2>
{
    (tasks.length>0)?tasks.map((task,index)=>{
return(


    <TaskCard  key={index} task={task} handleDelete={handleDelete} moveCard={moveCard} updateTask={updateTask}/>
)

    })
    :<p>no items in the list</p>
}

       </div>
    )
}
export default IndividualList