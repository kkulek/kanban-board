import React from "react";
import logo from "../../assets/logo-light.svg"
import {AddTask} from "../tasks/AddTask";

export function Header() {
    return (
        <nav className="flex justify-between mb-5">
            <img src={logo} alt="Kanban Logo"/>
            <AddTask/>
        </nav>
    )
}