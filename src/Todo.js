import React, { useState } from "react";
import "./todo.css";
import Task from "./Task";

const Todo = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleAddButton = () => {
    const task = {
      id: todoLists.length === 0 ? 1 : todoLists[todoLists.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setTodoLists([...todoLists, task]);
    setNewTask("");
  };
  const deleteTask = (id) => {
    setTodoLists(todoLists.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    setTodoLists(
      todoLists.map((task) => {
        if(task.id === id){
          return {...task,completed:true};
        }else return task;
      })
    );
  };
  return (
    <div>
      <div className="inputs">
        <h1>To-Do</h1>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button onClick={handleAddButton}>Add Task</button>
      </div>

      <div className="lists">
        {todoLists.map((todolist) => {
          return (
            <Task
              deleteTask={deleteTask}
              taskName={todolist.taskName}
              id={todolist.id}
              completeTask={completeTask}
              completed={todolist.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
