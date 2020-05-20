import React, { useState } from "react"

export interface ITextInputProps{
    id: string
    name: string
    placeholder?: string
    onChange?: (value: string) => void
    defaultValue?: string
}

const TextInput = (props: ITextInputProps) => {
    const [value, setValue] = useState(props.defaultValue || '')
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        props.onChange && props.onChange(e.target.value)
    }
    return (
        <input 
            type="text" 
            id={props.id} 
            name={props.name} 
            placeholder={props.placeholder} 
            onChange={onChange}
            value={value}
        />
    )
}

export default TextInput
