import React, {useContext} from "react";
import {Modal} from "../elements/Modal";
import {EditTask} from "./EditTask";
import {GlobalProvider} from "../GlobalState";

export function DisplayTaskModal({task, handleOnClose, showTask, handleDelete, editTask, handleEdit, handleCheckSubtask}) {
    if (!showTask) return null;
    console.log("DisplayTaskModal");
    return (
        <Modal onClick={handleOnClose}>

            {editTask ? (
                    <GlobalProvider task={task}>
                        <EditTask handleOnClose={handleOnClose} task={task}/>
                    </GlobalProvider>
                )
                : (
                    <div key={task.id}>
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-xl mr-2">
                                {task.input.title}</h3>
                            <div>
                                <button className="block text-xs mb-2" onClick={() => handleDelete(task.id)}>delete
                                </button>
                                <button className="block text-xs" onClick={handleEdit}>edit</button>
                            </div>
                        </div>
                        <p className="font-light text-base mt-4 text-gray-300">{task.input.description}</p>
                        <p className="font-bold mt-4">Subtask (completed  {task.input.subtasks.filter(x => x.completed === true).length} of  {task.input.subtasks.length})</p>
                        {task.input.subtasks.map(subtask => (
                            <div className="mt-2"
                                 key={subtask.name}>
                                <label className="flex items-center gap-4 bg-gray-800 p-2 text-sm font-bold">
                                    <input type="checkbox" className="h-4 w-4 rounded-full shadow"
                                           onChange={() => handleCheckSubtask(subtask.id, task)}
                                           checked={subtask.completed}
                                    />
                                    {subtask.name}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
        </Modal>
    )
}