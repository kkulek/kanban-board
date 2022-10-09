import React, {useState} from "react";
import {Input} from "../elements/Input";
import {Label} from "../elements/Label";

export function AddTask(){
    const [input, setInput] = useState({
        title: '',
        description: '',
        subtasks: [{}],
        id: '',
        column: ''
    });

    function handleInput(event) {
        const {name, value} = event.target

        setInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
    <div>
        <Label label="Title" htmlFor="title"/>
        <Input name="title" value={input.title} placeholder="e.g. Create an e-mail newsletter"
               onChange={handleInput}/>

        <Label label="Description" htmlFor="description"/>
        <Input name="description" value={input.description} placeholder="e.g. Black Friday discount with a company's video"
               onChange={handleInput}/>
    </div>
    )
}