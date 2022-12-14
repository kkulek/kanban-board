import React, {useState, useEffect} from "react";
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
    const [el, setEl] = useState(false);
    const [sub, setSub] = useState(false);
    const [idFirebase, setIdFirebase] = useState(null);

    // console.log("Task");

    useEffect(() => {
        // console.log('El:')
        // console.log(el)
        // console.log("el");
        // const subtasks = el.input.subtasks;
        // const targetSubtask = {...subtasks.filter(x => x.id === sub)};
        // targetSubtask.completed = !targetSubtask.completed;
        // const updateTask = async (target) => {
        //     await updateDoc(doc(db, "todos", target),
        //         targetSubtask
        //     ).catch(error => {
        //         throw new Error(`Error: ${error}`)
        //     });
        // }
        // updateTask(idFirebase);
    }, [el]);

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
        setIdFirebase(task.id)
        // console.log("handleCheckSubtask");
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (taskId === doc.data().input.id) {
                    setEl({...doc.data()});
                    setSub(subtask);
                    // console.log("znaleziony");
                    // console.log(subtask)
                }
                // console.log(doc.data().input);
            })
        })
        // return () => unsub();
    }
    //
    // console.log('status')
    // console.log(status)

    return (
        <div className="flex-col">
            <Droppable droppableId={status}>
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