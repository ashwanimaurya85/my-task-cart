import TaskForm from "./TaskForm";

import Download from "./Download";
import IndividualList from "./IndividualList";
import { useState,useEffect } from "react";
const lists = [
    { title: "List 1", listKey: "list1" },
    { title: "List 2", listKey: "list2" },
    { title: "List 3", listKey: "list3" },
  ];
  const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
      setTasks([...tasks, task]);
    };
    const handleDelete = (id) => {
      setTasks(tasks.filter((task) => task.id != id));
    };
    const moveCard = (e, index) => {
      setTasks(
        tasks.filter((task) => {
          if (index === task.id) {
            task.list = e.target.value;
          }
          return task;
        })
      );
    };
    const updateTask = (title, desc, index) => {
      setTasks(
        tasks.filter((task) => {
          if (index === task.id) {
            (task.title = title) (task.description = desc);
          }
          return task;
        })
      );
    };
    useEffect(() => {
    }, [tasks]);
    return (
      <div className="TaskList">
        <Download tasks={tasks}/>
        <h1>TASK LIST</h1>
        <TaskForm addTask={addTask} />
        <div className="lists">
          {lists.map((item, id) => (
            <IndividualList
              key={id}
              title={item.title}
              tasks={tasks.filter((task) => task.list === item.listKey)}
              handleDelete={handleDelete}
              moveCard={moveCard}
              updateTask={updateTask}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default TaskList;
  