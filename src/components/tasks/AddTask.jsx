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
            <button onClick={openAddTaskInModal}
            className="bg-blue-400 rounded-full text-white px-3 py-1 hover:scale-105 drop-shadow-md">
                Add New Task
            </button>
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