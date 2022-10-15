import React from "react";
import {Modal} from "../elements/Modal";
import {Form} from "../elements/Form";

export function EditTask({handleOnClose, task}) {

    return (
        <Modal onClick={handleOnClose}>
            <Form editTask task={task}/>
        </Modal>
    )
}