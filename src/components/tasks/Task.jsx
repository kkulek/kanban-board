import React, {useState} from "react";
import {DisplayTaskModal} from "./DisplayTaskModal";
import {SmallTaskCard} from "./SmallTaskCard";
import {deleteDoc, doc, updateDoc, setDoc, query, collection, onSnapshot, addDoc} from "firebase/firestore";
import {db} from "../../firebase";
import {Droppable, Draggable} from "react-beautiful-dnd";
import {v4 as uuidv4} from "uuid";

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

        const taskId = task.input.id
        const firebaseTaskId = task.id

        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({
                    ...doc.data(),
                })
            })

            const targetToDo = todosArray.filter(x => x.input.id === taskId)
            const subtasks = targetToDo[0].input.subtasks
            const targetSubtask = subtasks.filter(x => x.id === subtask)[0]
            targetSubtask.completed = !targetSubtask.completed
            const {completed, input: {column, description, title}} = targetToDo[0]

            const wyslijTo = async (id) => {
                    await updateDoc(doc(db, "todos", id), {
                        completed: completed,
                        input: {
                            column: column,
                            description: description,
                            title: title,
                            id: uuidv4(),
                            subtasks: subtasks
                         }
                     }).catch(error => {
                         throw new Error(`Error: ${error}`)
                    });
            }
            wyslijTo(firebaseTaskId)
        });
        return () => unsub();
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