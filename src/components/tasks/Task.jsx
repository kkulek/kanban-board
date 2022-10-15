import React, {useState} from "react";
import {DisplayTaskModal} from "./DisplayTaskModal";
import {SmallTaskCard} from "./SmallTaskCard";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../firebase";

export function Task({taskList}) {
    const [showTask, setShowTask] = useState(false);
    const [clickedTask, setClickedTask] = useState(null);
    const [editTask, setEditTask] = useState(false);

    function handleEdit() {
        setEditTask(true)
    }

    function openTaskInModal(task) {
        setClickedTask(task)
        setShowTask(true)
    }

    function handleOnClose(event) {
        if (event.target.id === 'task-modal')
            setShowTask(false);
    }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id))
        setShowTask(false)
    }

    return (
        <>
            <div className="flex-col">
                {taskList.map(task => (
                    <SmallTaskCard key={task.input.id} task={task} openTaskInModal={openTaskInModal}/>
                ))}
                {showTask && (
                    <DisplayTaskModal
                                      handleOnClose={handleOnClose}
                                      task={clickedTask}
                                      showTask={showTask}
                                      handleEdit={handleEdit}
                                      editTask={editTask}
                                      handleDelete={handleDelete}/>
                )}
            </div>
        </>
    )
}