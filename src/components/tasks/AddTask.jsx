import React, {useState} from "react";
import {Input} from "../elements/Input";
import {Label} from "../elements/Label";
import {Button} from "../elements/Button";
import {v4 as uuidv4} from "uuid";

import {db} from "../../firebase";
import {collection, addDoc} from 'firebase/firestore'
import {Subtask} from "./Subtask";

export function AddTask(){
    const DEFAULT_TASK = {
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
        <Input name="description" value={input.description} placeholder="e.g. Black Friday discount with a company's video"
               onChange={handleInput}/>

        <Label label="Subtasks" htmlFor="subtasks"/>
        {/*<Input name="subtasks" value={input.subtasks} placeholder="e.g. Choose a title"*/}
        {/*       onChange={handleInput}/>*/}

        <Subtask name="subtasks" onChange={handleInput} />

        <Button type="submit" cta="Create Task" color="blue" submit={handleSubmit}/>
    </form>
    )
}