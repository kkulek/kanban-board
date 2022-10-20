import React from "react";
import Select from "react-select";

export function SelectStatus({handleSelect, placeholder}){

    const options = [
        {value: 'todo', label: 'Todo'},
        {value: 'active', label: 'Active'},
        {value: 'done', label: 'Done'}
    ]

    return (
        <Select options={options}
                placeholder={placeholder}
                name="column"
                onChange={handleSelect}
                className="mb-2"
        />

    )
}