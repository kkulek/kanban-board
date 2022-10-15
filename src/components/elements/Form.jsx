import React, {useContext} from "react";
import {Label} from "./Label";
import {Input} from "./Input";
import {Button} from "./Button";
import {GlobalContext} from "../GlobalState";

export function Form({editTask, task}){

    const {
        input,
        handleInput,
        handleSubtaskChange,
        handleAddSubtask,
        handleRemoveSubtask,
        handleEditTask,
        handleSubmitTask
    } = useContext(GlobalContext)

    return (
        <form>
            <Label label="Title" htmlFor="title"/>
            <Input onChange={handleInput} name="title" value={input.title}
                   placeholder="e.g. Create an e-mail newsletter"
            />
            <Label label="Description" htmlFor="description"/>
            <Input onChange={handleInput} name="description" value={input.description}
                   placeholder="e.g. Black Friday discount with a company's video"/>

            <Label label="Subtasks" htmlFor="subtasks"/>
            {input.subtasks.map((subtask, index) => (
                <div key={index} className="flex gap-2 mb-3">
                    <Input type="text" placeholder={`Subtask ${index + 1}`}
                           value={subtask.name}
                           onChange={handleSubtaskChange(index)}/>
                    <button type="button" onClick={handleRemoveSubtask(index)}>X</button>
                </div>
            ))}
            <button type="button"
                    onClick={handleAddSubtask}
                    className="block w-full bg-white rounded-2xl px-3 py-2 text-black"
            >+ Add New Subtask
            </button>
            <h3>Placeholder for status</h3>
            {editTask
                ? (<Button type="submit" cta="Edit Task" color="blue"
                           submit={() => handleEditTask(task.id)}/>)
                : (<Button type="submit" cta="Create Task" color="blue"
                           submit={handleSubmitTask}/>)}
        </form>

    )
}