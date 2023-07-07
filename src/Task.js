import React from 'react'

const Task = (props) => {
  return (
    <div className="todolists">
    <p style={{textDecoration : props.completed ? "line-through" : "none", fontWeight: "bold",fontSize: "25px"}}>{props.taskName}</p>
    <button onClick={() => props.completeTask(props.id)}>Complete</button>
    <button onClick={() => props.deleteTask(props.id)}>X</button>
  </div>
  )
}

export default Task
