import React from "react";

export function DisplayTaskModal({task, handleOnClose, showTask, handleDelete}) {
    if (!showTask) return null;

    return (
        <div id="task-modal" onClick={handleOnClose}
             className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
             flex justify-center items-center">
            <div className="bg-gray-700 p-2 rounded w-4/5 text-white flex-col gap-5 p-8 max-w-lg">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl mr-2">
                        {task.input.title}</h3>
                    <button onClick={() => handleDelete(task.id)}>X</button>
                </div>
                <p className="font-light text-base mt-4 text-gray-300">{task.input.description}</p>
                <p className="font-bold mt-4">Subtask ( of {task.input.subtasks.length})</p>
                {task.input.subtasks.map(x => (
                    <div className="mt-2"
                        key={x.id}>
                        <label className="flex items-center gap-4 bg-gray-800 p-2 text-sm font-bold">
                            <input type="checkbox" className="h-4 w-4 rounded-full shadow"/>
                            {x.name}
                        </label>
                        </div>
                ))}
                <p className="mt-4">Current Status</p>
            </div>
        </div>
    )
}