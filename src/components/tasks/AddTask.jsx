import React, {useState} from "react";
import {DisplayAddTaskModal} from "./DisplayAddTaskModal";
import {GlobalProvider} from "../GlobalState";

export function AddTask() {
    const [showAddTask, setShowAddTask] = useState(false);

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
            <GlobalProvider>
                {showAddTask && (
                    <DisplayAddTaskModal
                        handleOnClose={handleOnClose}
                    />
                )}
            </GlobalProvider>
        </>
    )
}