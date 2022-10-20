import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {addDoc, collection, doc, updateDoc} from "firebase/firestore";
import {db} from "../../firebase";

export function useForm(task) {
    let DEFAULT_TASK;

    task ? DEFAULT_TASK = {
            title: task.input.title,
            description: task.input.description,
            subtasks:
                task.input.subtasks.map(subtask => {
                    return {
                        name: subtask.name
                    }
                }),
            column: task.input.column,
            id: task.input.id
        }

        : DEFAULT_TASK = {
            title: '',
            description: '',
            subtasks: [],
            column: ''
        }

    const [input, setInput] = useState(DEFAULT_TASK);

    function handleInput(event) {
        const {name, value} = event.target

        setInput(prevState => ({
            ...prevState,
            [name]: value,
            id: uuidv4()
        }))
    }

    function handleSelect(event) {
        setInput(prevState => ({
            ...prevState,
            column: event.value
        }))
    }

    const handleSubtaskChange = index => event => {
        const newSubtasks = input.subtasks.map((subtask, subtaskIndex) => {
            if (index !== subtaskIndex) return subtask;
            return {...subtask, name: event.target.value, id: uuidv4(), completed: false};
        });

        setInput(prevState => (
            {...prevState, subtasks: newSubtasks}
        ))
    }

    function handleAddSubtask() {
        if (input.subtasks.length < 5) {
            setInput(prevState => ({
                ...prevState,
                subtasks: input.subtasks.concat({name: "", completed: false})
            }))
        }
    }

    const handleRemoveSubtask = index => () => {
        setInput(prevState => ({
            ...prevState,
            subtasks: input.subtasks.filter((_, subtaskIndex) => index !== subtaskIndex)
        }))
    }

    //
    // const validate = (values) => {
    //     const errors = {}
    //
    //     if (!values.title.length < 5) {
    //         errors.title = "Task title is required"
    //     }
    //
    //     return errors
    // }
    //
    //
    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && isSubmit) {
    //
    //     }
    // }, [errors])


    const handleSubmitTask = async () => {
        // setErrors(validate(input));
        // setIsSubmit(true)

        if (input.title !== "") {
            await addDoc(collection(db, "todos"), {
                input,
                completed: false,
            });
            setInput(DEFAULT_TASK);
        }
    }

    const handleEditTask = async (id) => {
        await updateDoc(doc(db, "todos", id), {
            input,
            completed: false,
        });
    }

    function handleCheckboxChange() {
        // console.log('zmiana checkboxa')
    }

    return {
        input,
        handleEditTask,
        handleInput,
        handleSubtaskChange,
        handleAddSubtask,
        handleRemoveSubtask,
        handleSubmitTask,
        handleSelect,
        handleCheckboxChange
    }
}