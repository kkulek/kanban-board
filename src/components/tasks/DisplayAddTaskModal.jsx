import React from "react";
import {Label} from "../elements/Label";
import {Input} from "../elements/Input";
import {Button} from "../elements/Button";
import {Modal} from "../elements/Modal";

export function DisplayAddTaskModal({input, handleOnClose, handleInput, handleSubtaskChange, handleSubmit, handleAddSubtask, handleRemoveSubtask}){
    return (
        <Modal onClick={handleOnClose}>
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
                <Button type="submit" cta="Create Task" color="blue" submit={handleSubmit}/>
            </form>
        </Modal>
    )
}