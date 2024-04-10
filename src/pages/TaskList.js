import React, { useState } from 'react';
import './TaskList.css';
import TaskCard from '../components/TaskCard';
import { useTitle } from '../hooks/useTitle';
import { BoxCard } from '../components/BoxCard';

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
                        <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
                    ))}
                </ul>
                <BoxCard result="success">
                    <p className="title">Lorem ipsum dolor sit amet.</p>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, similique!</p>
                </BoxCard>
                <BoxCard result="warning">
                    <p className="title">Lorem, ipsum dolor.</p>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </BoxCard>
                <BoxCard result="alert">
                    <p className="title">Lorem, ipsum.</p>
                    <p className="description">Lorem ipsum dolor sit amet.</p>
                </BoxCard>
            </div>
        </>
    )
}