import React, {useState} from "react";
import {DisplayTaskModal} from "./DisplayTaskModal";
import {SmallTaskCard} from "./SmallTaskCard";

export function Task({taskList}) {
    const [showTask, setShowTask] = useState(false);
    const [clickedTask, setClickedTask] = useState(null);

    function openTaskInModal(task) {
        setClickedTask(task)
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
                    <SmallTaskCard key={task.id} task={task}
                                   openTaskInModal={openTaskInModal}/>
                ))}
                {showTask && (
                    <DisplayTaskModal handleOnClose={handleOnClose} task={clickedTask} showTask={showTask} />
                )}
            </div>
        </>
    )
}