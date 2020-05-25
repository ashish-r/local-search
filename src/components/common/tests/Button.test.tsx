import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'

import Button from '../Button'
import { findByTestAttr } from '../../../utils/common'

describe('Button Component', () => {
    let component: ShallowWrapper
    let mockFunc = jest.fn()
    beforeEach(() => {
        component = shallow(
            <Button
                value="Click Here"
                onClick={mockFunc}
            />
        )
    })
    it('Should render without errors', () => {
        const button = findByTestAttr(component, 'button')
        expect(button.length).toEqual(1)
    })
    it('Should render correct text', () => {
        const button = findByTestAttr(component, 'button')
        expect(button.prop('value')).toEqual('Click Here')
    })
    it('Should trigger onClick func passed in prop', () => {
        const button = findByTestAttr(component, 'button')
        button.simulate('click')
        expect(mockFunc.mock.calls.length).toEqual(1)
    })
})
