import React, {useState} from "react";
import {Input} from "../elements/Input";

export function Subtask({name, onChange}) {
    const [addSubtaskField, setAddSubtaskField] = useState([]);

    const subtaskId = () => addSubtaskField.length + 1

    function handleOnClick(e) {
        e.preventDefault()
        setAddSubtaskField(prevState => [...prevState, subtaskId()])
    }

    return (
        <>
            <Input name={name + 1}
                   onChange={onChange}
                   placeholder="e.g. Choose a title"/>

            <Input name={name + 2}
                   onChange={onChange}
                   placeholder="e.g. Write an e-mail body"/>

            {addSubtaskField.map((subtask, index) => (
                    <Input key={index} name={name + (index + 3)} onChange={onChange} placeholder="Another subtask." />
            ))}
            <button onClick={handleOnClick}>Add subtask</button>
        </>
    )
}