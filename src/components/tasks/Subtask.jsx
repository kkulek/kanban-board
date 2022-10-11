import React, {useState} from "react";
import {Input} from "../elements/Input";

export function Subtask({name, onChange, value}) {
    const [addSubtask, setAddSubtask] = useState([]);

    const subtaskId = () => addSubtask.length + 1

    function handleOnClick(e) {
        e.preventDefault()
        setAddSubtask(prevState => [...prevState, {
            id: subtaskId(),
        }])
    }

    return (
        <>
            <Input name={name + 1}
                   onChange={onChange}
                   value={value}
                   placeholder="e.g. Choose a title"/>

            <Input name={name + 2}
                   onChange={onChange}
                   value={value}
                   placeholder="e.g. Write an e-mail body"/>

            {addSubtask.map((subtask, index) => (
                    <Input key={index} name={name + (index + 3)} onChange={onChange} value={value} placeholder="Another subtask." />
            ))}
            <button onClick={handleOnClick}>Add subtask</button>
        </>
    )
}