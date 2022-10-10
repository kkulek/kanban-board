import React from "react";

export function SmallTaskCard({task, openTaskInModal}){
    return (
        <div onClick={() => openTaskInModal(task)}
             className="px-4 py-2 my-5 bg-blue-400 cursor-pointer">
            <h3 className="font-bold">{task.input.title}</h3>
            <p className="font-light">{task.input.description}</p>
        </div>
    )
}