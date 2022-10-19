import React from "react";
import {AddTask} from "../tasks/AddTask";

export function Footer(){
    return (
        <footer className="sticky bottom-0 flex justify-center p-6 bg-gray-800">
            <AddTask/>
        </footer>
    )
}