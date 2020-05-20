import React, { useState } from 'react'
import { IFormState } from '../../interfaces/common'
import Switch from '../common/Switch'
import TextInput from '../common/TextInput'
import Dropdown from '../common/Dropdown'
import Button from '../common/Button'
import { AVAILABLE_PLACE_TYPES } from '../../constants/common'

const NearByForm = (
    {
        onSubmit,
        isLoading
    }: {
        onSubmit: (data: IFormState) => void
        isLoading: boolean
    }
) => {
    const [formData, setFormData] = useState<IFormState>({type: AVAILABLE_PLACE_TYPES[0].value})

    const submitForm = () => {
        onSubmit(formData)
    }

    const setValue = (key: keyof IFormState, value: string | boolean) => {
        setFormData({...formData, [key]: value || undefined})
    } 
    
    return (
        <div className="side-container">
            <div className="form-element">
                <Dropdown
                    id="type-select"
                    name="type"
                    labelKey="label"
                    valueKey="value"
                    options={AVAILABLE_PLACE_TYPES}
                    placeholder="Select Type"
                    onChange={(value) => setValue('type', value)}
                />
            </div>
            <div className="form-element">
                <TextInput
                    id="keyword-input"
                    name="keyword"
                    placeholder="Enter Keyword (Optional)"
                    onChange={(value) => setValue('searchKey', value)}
                />
            </div>
            <div className="form-element">
                <span>Only Open Places: &nbsp;&nbsp;</span>
                <Switch 
                    id="is-open-only-switch"
                    defaultChecked={false}
                    name="isOpenOnly"
                    onChange={(value) => setValue('opennow', value)}
                    switchText={['Yes', 'No']}
                />
            </div>
            <div>
                <Button value="Search" onclick={submitForm}/>
            </div>
        </div>
    )
}

export default NearByForm
