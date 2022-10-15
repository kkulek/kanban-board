import React from "react";
import {Modal} from "../elements/Modal";
import {Form} from "../elements/Form";

export function DisplayAddTaskModal({handleOnClose}) {

    return (
        <Modal onClick={handleOnClose}>
            <Form />
        </Modal>
    )
}