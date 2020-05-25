import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'

import TextInput from '../TextInput'
import { findByTestAttr } from '../../../utils/common'

describe('Button Component', () => {
    let component: ShallowWrapper
    let mockFunc = jest.fn()
    beforeEach(() => {
        component = shallow(
            <TextInput
                id="input"
                name="input"
                onChange={mockFunc}
            />
        )
    })
    it('Should render without errors', () => {
        const textInput = findByTestAttr(component, 'textInput')
        expect(textInput.length).toEqual(1)
    })
    it('Should trigger onChange func passed in prop', () => {
        const textInput = findByTestAttr(component, 'textInput')
        textInput.simulate('change', { target: { value: 'new text' } })
        expect(mockFunc.mock.calls.length).toEqual(1)
        expect(findByTestAttr(component, 'textInput').prop('value')).toEqual('new text')
    })
})
