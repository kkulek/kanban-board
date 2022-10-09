import React from "react";
import Modal from "react-modal";

export function DisplayTask({visible, task, onClose}) {
    if(!visible) return null;

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center">
                <div className="bg-white p-2 rounded">
                    <h3>Tytuł: {task.title}</h3>
                    <p>Opis: {task.description}</p>
                    <p>ID: {task.id}</p>
                    <p>Subtask: {task.subtasks}</p>
                    <button onClick={onClose}>X</button>
                </div>
            </div>
        </div>
    )
}