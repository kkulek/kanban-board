import React from "react";
import {DisplayTask} from "./DisplayTask";

export function SmallTaskCard({taskList}){
    function openTaskInModal(task) {
        DisplayTask(task)
    }

    return (
    <div className="flex-col">
        {taskList.map(task => (
            <div key={task.id}
                 onClick={() => openTaskInModal(task)}
                className="px-4 py-2 my-5 bg-blue-400 cursor-pointer">
                <h3 className="font-bold">{task.title}</h3>
                <p className="font-light">{task.description}</p>
            </div>
        ))}
    </div>
    )
}