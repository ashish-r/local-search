import React from "react"

export interface ITextInputProps{
    value: string
    onclick?: () => void
    className?: string
    isLoading?: boolean
}

const Button = (props: ITextInputProps) => {
    const onclick = () => {
        props.onclick && props.onclick()
    }
    return (
        <input 
            type="submit" 
            value={props.isLoading ? 'Loading...' : props.value} 
            onClick={onclick} 
        />
    )
}

export default Button
