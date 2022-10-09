import React from "react";

export function Button({cta, type, color, submit}){
    return (
    <button type={type} onClick={(e) => {
        e.preventDefault();
        submit()
    }}
            className={`bg-${color}-500 rounded text-white px-2 py-1`}
    >{cta}</button>
    )
}