import React from "react";

export function SmallTaskCard({task, openTaskInModal}) {
    return (
        <div onClick={() => openTaskInModal(task)}
             className="px-4 py-6 mt-2 mb-5 bg-gray-700 cursor-pointer rounded-lg hover:translate-y-0.5 ease-in-out duration-150">
            <h3 className="font-bold text-white text-m">{task.input.title}</h3>
            <p className="font-light text-gray-400 text-sm">{task.input.description}</p>
        </div>
    )
}