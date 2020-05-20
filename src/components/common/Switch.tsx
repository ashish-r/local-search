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
        <div className={"toggle toggle-switch"}>
            <input
                type="checkbox"
                name={props.name}
                className="toggle-switch-checkbox"
                id={props.id}
                defaultChecked={checked}
                onChange={onChange}
            />
            {props.id ? (
                <label className="toggle-switch-label" htmlFor={props.id}>
                <span
                    className={
                    props.disabled
                        ? "toggle-switch-inner toggle-switch-disabled"
                        : "toggle-switch-inner"
                    }
                    data-yes={props.switchText[0]}
                    data-no={props.switchText[1]}
                />
                <span
                    className={
                    props.disabled
                        ? "toggle-switch-switch toggle-switch-disabled"
                        : "toggle-switch-switch"
                    }
                />
                </label>
            ) : null}
        </div>
    )
}

export default Switch

