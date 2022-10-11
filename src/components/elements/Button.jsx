import React from "react";

export function Button({cta, type, color, submit}){
    return (
    <button type={type} onClick={(e) => {
        e.preventDefault();
        submit()
    }}
            className={`bg-${color}-500 rounded-2xl text-white px-3 py-2 w-full`}
    >{cta}</button>
    )
}