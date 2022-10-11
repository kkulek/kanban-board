import React from "react";

export function DisplayTaskModal({task, handleOnClose, showTask, handleDelete}) {
    if(!showTask) return null;

    return (
        <div id="task-modal" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center">
            <div className="bg-white p-2 rounded">
                <h3>Tytuł: {task.input.title}</h3>
                <p>Opis: {task.input.description}</p>
                <p>Subtask: {task.input.subtasks}</p>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
        </div>
    )
}