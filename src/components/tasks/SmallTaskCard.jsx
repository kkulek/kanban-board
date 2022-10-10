import React, {useState} from "react";
import {DisplayTask} from "./DisplayTask";

export function SmallTaskCard({taskList}) {
    const [showTaskInModal, setShowTaskInModal] = useState(false);
    const [clickedTask, setClickedTask] = useState(null);

    function openTaskInModal(task) {
        setClickedTask(task)
        setShowTaskInModal(true)
    }

    function handleOnCloseModal(event) {
        if (event.target.id === 'task-modal')
        setShowTaskInModal(false)
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
                        {showTaskInModal && (
                            <DisplayTask handleOnCloseModal={handleOnCloseModal} task={clickedTask} showTask={showTaskInModal} />
                        )}
                    </>
                ))}
            </div>
        </>
    )
}