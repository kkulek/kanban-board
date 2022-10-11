import React, {useState} from "react";
import {Input} from "../elements/Input";
import {Label} from "../elements/Label";
import {Button} from "../elements/Button";
import {v4 as uuidv4} from "uuid";

import {db} from "../../firebase";
import {collection, addDoc} from 'firebase/firestore'
import {Subtask} from "./Subtask";

export function AddTask() {
    const DEFAULT_TASK = {
        title: '',
        description: '',
        subtasks: [{name: ""}, {name: ""}],
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

    const handleSubtaskChange = index => event => {
        const newSubtasks = input.subtasks.map((subtask, sindex) => {
            if (index !== sindex) return subtask;
            return {...subtask, name: event.target.value, id: uuidv4(), completed: false};
        });

        setInput(prevState => (
            {
                ...prevState,
                subtasks: newSubtasks
            }
        ))
    }

    function handleAddSubtask() {
        setInput({subtasks: input.subtasks.concat({ name: "" })});
    }

    const handleSubmit = async () => {
        if (input !== "") {
            await addDoc(collection(db, "todos"), {
                input,
                completed: false,
            });
            setInput(DEFAULT_TASK);
        }
    }

    return (
        <form>
            <Label label="Title" htmlFor="title"/>
            <Input name="title" value={input.title} placeholder="e.g. Create an e-mail newsletter"
                   onChange={handleInput}/>

            <Label label="Description" htmlFor="description"/>
            <Input name="description" value={input.description}
                   placeholder="e.g. Black Friday discount with a company's video"
                   onChange={handleInput}/>

            <Label label="Subtasks" htmlFor="subtasks"/>
            {input.subtasks.map((subtask, index) => (
                <Input key={index} type="text" placeholder={`Subtask ${index + 1}`}
                       value={subtask.name}
                       onChange={handleSubtaskChange(index)}
                />
            ))}

            <button type="button" onClick={handleAddSubtask}>Add subtask</button>

            {/*<Subtask name="subtasks" onChange={handleInput}/>*/}


            <Button type="submit" cta="Create Task" color="blue" submit={handleSubmit}/>
        </form>
    )
}