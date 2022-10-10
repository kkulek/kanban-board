import React, {useState} from "react";
import {DisplayTask} from "./DisplayTask";

export function SmallTaskCard({taskList}) {
    const [showTask, setShowTask] = useState(false);

    function openTaskInModal(task) {
        console.log(task.input.id)
        setShowTask(true)
    }

    function handleOnClose(event) {
        if (event.target.id === 'task-modal')
        setShowTask(false)
    }

    return (
        <>
            <div className="flex-col">
                {taskList.map(task => (
                    <>
                        <div key={task.input.id}
                             onClick={() => openTaskInModal(task)}
                             className="px-4 py-2 my-5 bg-blue-400 cursor-pointer">
                            <h3 className="font-bold">{task.input.title}</h3>
                            <p className="font-light">{task.input.description}</p>
                        </div>
                        {showTask && (
                                <div id="task-modal" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                                    flex justify-center items-center">
                                    <div className="bg-white p-2 rounded">
                                        <h3>Tytuł: {task.input.title}</h3>
                                        <p>Opis: {task.input.description}</p>
                                        <p>ID: {task.input.id}</p>
                                        <p>Subtask: {task.input.subtasks}</p>
                                    </div>
                                </div>
                        )}
                    </>
                ))}
            </div>
        </>
    )
}