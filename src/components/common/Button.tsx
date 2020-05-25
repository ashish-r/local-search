import React from "react"

export interface ITextInputProps{
    value: string
    onClick?: () => void
    className?: string
    isLoading?: boolean
}

const Button = ({
    value,
    onClick,
    className,
    isLoading,
}: ITextInputProps) => {
    const onClickHandler = () => {
        onClick && onClick()
    }
    return (
        <input 
            type="submit" 
            className={`button ${className || ''}`}
            value={isLoading ? 'Loading...' : value} 
            onClick={onClickHandler} 
            data-test="button"
        />
    )
}

export default Button
