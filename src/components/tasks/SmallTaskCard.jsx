import React, {useState} from "react";
import {DisplayTask} from "./DisplayTask";

export function SmallTaskCard({taskList}) {
    const [showTask, setShowTask] = useState(false);

    function openTaskInModal() {
        setShowTask(true)
    }

    function handleOnClose() {
        setShowTask(false)
    }

    return (
        <>
        <div className="flex-col">
            {taskList.map(task => (
                <div key={task.id}
                     onClick={() => openTaskInModal()}
                     className="px-4 py-2 my-5 bg-blue-400 cursor-pointer">
                    <h3 className="font-bold">{task.title}</h3>
                    <p className="font-light">{task.description}</p>
                    <DisplayTask
                        onClose={handleOnClose}
                        visible={showTask}
                        task={task}/>
                </div>
            ))}
        </div>
        </>
    )
}