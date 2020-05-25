import React, { useState } from "react"

export interface IDropdownProps {
    options: Array<Record<string, string>>
    labelKey: string
    valueKey: string
    id: string
    name: string
    placeholder?: string
    defaultValue?: string
    onChange?: (value: string) => void
}

const Dropdown = (props: IDropdownProps) => {
    const [value, setValue] = useState(props.defaultValue)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
        props.onChange && props.onChange(e.target.value)
    }

    let options = props.options.map(data => (
        <option 
            key={data[props.valueKey]} 
            value={data[props.valueKey]}
        >
            {data[props.labelKey]}
        </option>
    ))

    return (
        <select 
            id={props.id} 
            name={props.name} 
            onChange={handleChange} 
            value={value}
            className="dropdown"
        >
            {props.placeholder && (<option disabled>{props.placeholder}</option>)}
            {options}
        </select>
    )
}


export default Dropdown
