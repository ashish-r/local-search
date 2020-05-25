import React, { useState } from "react"

export interface ISwitchProps{
    defaultChecked: boolean
    disabled?: boolean
    id: string
    name: string
    switchText: string[]
    onChange:(isSelected: boolean) => void
}

const Switch = (props: ISwitchProps) => {
    const [checked, setChecked] = useState(props.defaultChecked)

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked(!checked)
        props.onChange && props.onChange(!checked)
    }

    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                name={props.name}
                className="toggle-switch__checkbox"
                id={props.id}
                defaultChecked={checked}
                onChange={onChange}
            />
            {props.id ? (
                <label className="toggle-switch__label" htmlFor={props.id}>
                <span
                    className={
                        `toggle-switch__inner ${
                            props.disabled ? 'toggle-switch__inner--disabled' : ''
                        }`
                    }
                    data-yes={props.switchText[0]}
                    data-no={props.switchText[1]}
                />
                <span
                    className={
                        `toggle-switch__slider ${
                            props.disabled ? 'toggle-switch__slider--disabled' : ''
                        }`
                    }
                />
                </label>
            ) : null}
        </div>
    )
}

export default Switch

