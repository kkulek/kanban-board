import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

import {db} from "../../firebase";
import {collection, addDoc} from 'firebase/firestore'
import {DisplayAddTaskModal} from "./DisplayAddTaskModal";

export function AddTask() {
    const DEFAULT_TASK = {
        title: '',
        description: '',
        subtasks: [{name: ""}, {name: ""}],
        column: ''
    }

    const [input, setInput] = useState(DEFAULT_TASK);
    const [showAddTask, setShowAddTask] = useState(false);

    function handleInput(event) {
        const {name, value} = event.target

        setInput(prevState => ({
            ...prevState,
            [name]: value,
            id: uuidv4()
        }))
    }

    const handleSubtaskChange = index => event => {
        const newSubtasks = input.subtasks.map((subtask, subtaskIndex) => {
            if (index !== subtaskIndex) return subtask;
            return {...subtask, name: event.target.value, id: uuidv4(), completed: false};
        });

        setInput(prevState => (
            {...prevState, subtasks: newSubtasks}
        ))
    }

    function handleAddSubtask() {
        setInput(prevState => ({
            ...prevState,
            subtasks: input.subtasks.concat({name: ""})
        }))
    }

    const handleRemoveSubtask = index => () => {
        setInput(prevState => ({
            ...prevState,
            subtasks: input.subtasks.filter((_, subtaskIndex) => index !== subtaskIndex)
        }))
    }

    const handleSubmit = async () => {
        if (input !== "") {
            await addDoc(collection(db, "todos"), {
                input,
                completed: false,
            });
            setInput(DEFAULT_TASK);
        }
    }

    function openAddTaskInModal() {
        setShowAddTask(true)
    }

    function handleOnClose(event) {
        if (event.target.id === 'task-modal')
            setShowAddTask(false)
    }

    return (
        <>
            <button onClick={openAddTaskInModal}>Add Task</button>
            {showAddTask && (
                <DisplayAddTaskModal input={input} handleOnClose={handleOnClose} handleInput={handleInput} handleSubtaskChange={handleSubtaskChange} handleRemoveSubtask={handleRemoveSubtask} handleSubmit={handleSubmit} handleAddSubtask={handleAddSubtask}/>
            )}
        </>
    )
}