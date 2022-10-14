import React from "react";

export function Modal({onClick, children}){
    return (
    <>
        <div id="task-modal" onClick={onClick}
             className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
             flex justify-center items-center">
            <div className="bg-gray-700 p-2 rounded w-4/5 text-white flex-col gap-5 p-8 max-w-lg">
                {children}
        </div>
        </div>
    </>
    )
}