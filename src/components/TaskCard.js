import React from 'react'

function TaskCard({ id, task, handleDelete }) {
  return (
    <li className={task.completed ? "completed" : "incomplete"}>
        <span>{id} - {task.name}</span>
        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
    </li>
  )
}

export default TaskCard