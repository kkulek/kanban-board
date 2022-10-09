import React from "react";

export function SmallTaskCard({taskList}){
    return (
    <div className="flex-col">
        {taskList.map(x => (
            <div className="px-4 py-2 my-5 bg-blue-400">
                <h3 className="font-bold">{x.title}</h3>
                <p className="font-light">{x.description}</p>
            </div>
        ))}
    </div>
    )
}