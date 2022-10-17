import React, {useState} from "react";
import {DisplayTaskModal} from "./DisplayTaskModal";
import {SmallTaskCard} from "./SmallTaskCard";
import {deleteDoc, doc, updateDoc, setDoc} from "firebase/firestore";
import {db} from "../../firebase";
import {Droppable, Draggable} from "react-beautiful-dnd";

export function Task({taskList, status}) {
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

    const handleCheckSubtask = async (subtask, task) => {
        console.log(`Subtask: ${subtask}, Task: ${task}`)
        const targetTask = doc(db, "todos", task)
        console.log(targetTask)
    }

    return (
        <div className="flex-col bg-gray-700 p-2">
            <Droppable droppableId={status + 1}>
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {taskList.filter(task => task.input.column === status).map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided) => (
                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <SmallTaskCard task={task} openTaskInModal={openTaskInModal}/>
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
                {showTask && (
                    <DisplayTaskModal
                        handleOnClose={handleOnClose}
                        task={clickedTask}
                        showTask={showTask}
                        handleEdit={handleEdit}
                        editTask={editTask}
                        handleDelete={handleDelete}
                        handleCheckSubtask={handleCheckSubtask}

                    />
                )}
        </div>
    )
}