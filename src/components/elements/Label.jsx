import React from "react";

export function Label({label, htmlFor}){
    return (
        <label
            htmlFor={htmlFor}
            className="block text-sm font-bold mb-1 text-gray-100 tracking-wider"
        >{label}</label>
    )
}