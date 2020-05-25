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
    className?: string
}

const Dropdown = ({
    options,
    labelKey,
    valueKey,
    id,
    name,
    placeholder,
    defaultValue,
    onChange,
    className,
}: IDropdownProps) => {
    const [value, setValue] = useState(defaultValue)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
        onChange && onChange(e.target.value)
    }

    const selectOptions = options.map(data => (
        <option 
            key={data[valueKey]} 
            value={data[valueKey]}
        >
            {data[labelKey]}
        </option>
    ))

    return (
        <select 
            id={id} 
            name={name} 
            onChange={handleChange} 
            value={value}
            className={`dropdown ${
                className || ''
            }`}
            data-test="dropdown"
        >
            {placeholder && (<option disabled>{placeholder}</option>)}
            {selectOptions}
        </select>
    )
}

export default Dropdown
