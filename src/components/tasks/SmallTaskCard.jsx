import React, {useState} from "react";
import {DisplayTask} from "./DisplayTask";

export function SmallTaskCard({taskList}) {
    const [showTask, setShowTask] = useState(false);

    function openTaskInModal(task) {
        setShowTask(true)
    }

    function handleOnClose() {
        setShowTask(false)
    }

    return (
        <>
            <div className="flex-col">
                {taskList.map(task => (
                    <>
                        <div key={task.id}
                             onClick={() => openTaskInModal(task)}
                             className="px-4 py-2 my-5 bg-blue-400 cursor-pointer">
                            <h3 className="font-bold">{task.title}</h3>
                            <p className="font-light">{task.description}</p>
                        </div>
                        {showTask && (
                                <div key={task.title} onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                                    flex justify-center items-center">
                                    <div className="bg-white p-2 rounded">
                                        <h3>Tytuł: {task.title}</h3>
                                        <p>Opis: {task.description}</p>
                                        <p>ID: {task.id}</p>
                                        <p>Subtask: {task.subtasks}</p>
                                        <h1>asd</h1>
                                        <button onClick={handleOnClose}>X</button>
                                    </div>
                                </div>
                        )}
                    </>
                ))}
            </div>
        </>
    )
}