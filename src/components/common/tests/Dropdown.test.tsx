import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'

import Dropdown from '../Dropdown'
import { findByTestAttr } from '../../../utils/common'

const dropDownOptions = [
    {
        key: 'test 1',
        value: 'test_1',
    },
    {
        key: 'test 2',
        value: 'test_2',
    },
]

describe('Dropdown Component', () => {
    let component: ShallowWrapper
    let mockFunc = jest.fn()
    beforeEach(() => {
        component = shallow(
            <Dropdown
                id="dd"
                name="dd"
                labelKey="key"
                valueKey="value"
                options={dropDownOptions}
                onChange={mockFunc}
            />
        )
    })
    it('Should render without errors', () => {
        const dropdown = findByTestAttr(component, 'dropdown')
        expect(dropdown.length).toEqual(1)
    })
    it('Should trigger onChange func passed in prop', () => {
        const dropdown = findByTestAttr(component, 'dropdown')
        dropdown.simulate('change', { target: { value: dropDownOptions[1].value } })
        expect(mockFunc.mock.calls.length).toEqual(1)
        expect(findByTestAttr(component, 'dropdown').prop('value')).toEqual('test_2')
    })
    it('Should display options equal to options length in prop', () => {
        const dropdown = findByTestAttr(component, 'dropdown')
        expect(dropdown.children().length).toEqual(2)
    })
})
