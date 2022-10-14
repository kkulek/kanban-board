import React, {useState} from "react";
import {Modal} from "../elements/Modal";
import {EditTask} from "./EditTask";

export function DisplayTaskModal({task, handleOnClose, showTask, handleDelete, editTask, handleEdit}) {
    if (!showTask) return null;

    return (
        <Modal onClick={handleOnClose}>

            {!editTask ? (
                <>
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xl mr-2">
                            {task.input.title}</h3>
                        <div>
                            <button className="block text-xs mb-2" onClick={() => handleDelete(task.id)}>delete</button>
                            <button className="block text-xs" onClick={handleEdit}>edit</button>
                        </div>

                    </div>
                    <p className="font-light text-base mt-4 text-gray-300">{task.input.description}</p>
                    <p className="font-bold mt-4">Subtask ( of {task.input.subtasks.length})</p>
                    {task.input.subtasks.map(x => (
                        <div className="mt-2"
                             key={x.id}>
                            <label className="flex items-center gap-4 bg-gray-800 p-2 text-sm font-bold">
                                <input type="checkbox" className="h-4 w-4 rounded-full shadow"/>
                                {x.name}
                            </label>
                        </div>
                    ))}
                    <p className="mt-4">Current Status</p>
                </>
            ) : (
                <EditTask handleOnClose={handleOnClose} task={task}/>
            ) }




        </Modal>
    )
}