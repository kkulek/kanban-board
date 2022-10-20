import React from "react";
import Select from "react-select";

export function SelectStatus({handleSelect, placeholder}){

    const options = [
        {value: 'todo', label: 'Todo'},
        {value: 'active', label: 'Active'},
        {value: 'done', label: 'Done'}
    ]

    const customFontColor = {
      option: (base) => ({
            ...base,
            color: "gray"
        })
    }

    return (
        <Select options={options}
                placeholder={placeholder}
                name="column"
                onChange={handleSelect}
                className="mb-2"
                styles={customFontColor}
        />
    )
}