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
            className="bg-blue-500 rounded text-white px-5 py-2 drop-shadow-md ease-linear border-b-4 hover:border-red-300 ease-linear duration-300 sticky top-0">
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