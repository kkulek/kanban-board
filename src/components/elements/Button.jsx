import React from "react";

export function Button({cta, type, color}){
    return (
    <button type={type} onClick={(e) => e.preventDefault()}
            className={`bg-${color}-500 rounded text-white px-2 py-1`}
    >{cta}</button>
    )
}