import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'

import Switch from '../Switch'
import { findByTestAttr } from '../../../utils/common'

describe('Button Component', () => {
    let component: ShallowWrapper
    let mockFunc = jest.fn()
    beforeEach(() => {
        component = shallow(
            <Switch
                defaultChecked={false}
                onChange={mockFunc}
                id="switch"
                name="switch"
                switchText={['Yes', 'No']}
            />
        )
    })
    it('Should render without errors', () => {
        const switchComponent = findByTestAttr(component, 'switch')
        expect(switchComponent.length).toEqual(1)
    })
    it('Should trigger onChange func passed in prop', () => {
        const switchComponent = findByTestAttr(component, 'switch')
        switchComponent.simulate('change')
        expect(mockFunc.mock.calls.length).toEqual(1)
        expect(findByTestAttr(component, 'switch').prop('defaultChecked')).toEqual(true)
    })
})
