import React from "react";
import {Modal} from "../elements/Modal";
import {Label} from "../elements/Label";
import {Input} from "../elements/Input";
import {Button} from "../elements/Button";


export function EditTask({task, handleOnClose}){
    return (

        <Modal onClick={handleOnClose}>
            <form>
                <h1>Test</h1>
                {console.log(task)}
            </form>
        </Modal>

    )
}