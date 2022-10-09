import React from "react";

export function Input({name, value, placeholder, onChange}) {
    return (
        <form className="mb-2">
            <input type="text" placeholder={placeholder} id={name}
                   className="shadow appearance-none border rounded w-full
                   py-2 px-3 text-gray-700 leading-tight
                   focus:outline-slate-400 focus:shadow-outline"
                   onChange={onChange}
                   value={value}
                   name={name}
            />
        </form>
    )
}