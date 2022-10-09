import React, {useState} from "react";
import {Input} from "../elements/Input";

export function AddTask(){
    const [input, setInput] = useState({
        title: '',
        description: ''
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
        <Input name="title" value={input.title} placeholder="e.g. Create an e-mail newsletter"
               onChange={handleInput}/>

        <Input name="description" value={input.description} placeholder="e.g. Black Friday discount with a company's video"
               onChange={handleInput}/>
    </div>
    )
}