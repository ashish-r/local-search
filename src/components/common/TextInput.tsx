import React, { useState } from "react"

export interface ITextInputProps{
    id: string
    name: string
    placeholder?: string
    onChange?: (value: string) => void
    defaultValue?: string
    className?: string
}

const TextInput = ({
    id,
    name,
    placeholder,
    onChange,
    defaultValue,
    className,
}: ITextInputProps) => {
    const [value, setValue] = useState(defaultValue || '')
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChange && onChange(e.target.value)
    }
    return (
        <input 
            className={`text-input ${className}`}
            type="text" 
            id={id} 
            name={name} 
            placeholder={placeholder} 
            onChange={onChangeHandler}
            value={value}
        />
    )
}

export default TextInput
