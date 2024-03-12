import React, { useState } from 'react';
import './TaskList.css';
import TaskCard from '../components/TaskCard';
import { useTitle } from '../hooks/useTitle';

export const TaskList = (props) => {
    useTitle("Task List");

    const [tasks, setTasks] = useState([{id: 1, name: "Record Lectures", completed: false}, 
                                    {id: 2, name: "Edit Lectures", completed: true}, 
                                    {id: 3, name: "Watch Lectures", completed: false},
                                    {id: 4, name: "Delete Lectures", completed: true},
                                ]);

    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <>
            <div className="App">
                <h1>Task List - {props.title}</h1>
                <ul>
                    <button onClick={() => setShow(!show)} className="trigger">Toggle</button>
                    { show && tasks.map((task) => (
                        <TaskCard task={task} handleDelete={handleDelete}/>
                    ))}
                </ul>
            </div>
        </>
    )
}