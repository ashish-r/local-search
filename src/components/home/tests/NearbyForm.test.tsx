import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'

import NearbyForm from '../NearbyForm'
import { findByTestAttr } from '../../../utils/common'

describe('Button Component', () => {
    let component: ShallowWrapper
    let mockFunc = jest.fn()
    beforeEach(() => {
        component = shallow(
            <NearbyForm
                onSubmit={mockFunc}
            />
        )
    })
    it('Should render without errors', () => {
        const nearbyForm = findByTestAttr(component, 'nearbyForm')
        const nearbyFormDD = findByTestAttr(component, 'nearbyFormDD')
        const nearbyFormTextInput = findByTestAttr(component, 'nearbyFormTextInput')
        const nearbyFormSwitch = findByTestAttr(component, 'nearbyFormSwitch')
        const nearbyFormButton = findByTestAttr(component, 'nearbyFormButton')
        expect(nearbyForm.length).toEqual(1)
        expect(nearbyFormDD.length).toEqual(1)
        expect(nearbyFormTextInput.length).toEqual(1)
        expect(nearbyFormSwitch.length).toEqual(1)
        expect(nearbyFormButton.length).toEqual(1)
    })
    it('Should trigger onSubmit func with form data', () => {
        const dummyFormData = {type: 'bank', searchKey: 'yolo', opennow: true}
        const nearbyFormDD = findByTestAttr(component, 'nearbyFormDD') as ShallowWrapper<any>
        nearbyFormDD.prop('onChange')(dummyFormData.type)
        component.update() 
        const nearbyFormTextInput = findByTestAttr(component, 'nearbyFormTextInput') as ShallowWrapper<any>
        nearbyFormTextInput.prop('onChange')(dummyFormData.searchKey)
        component.update()
        const nearbyFormSwitch = findByTestAttr(component, 'nearbyFormSwitch') as ShallowWrapper<any>
        nearbyFormSwitch.prop('onChange')(dummyFormData.opennow)
        component.update()
        const nearbyFormButton = findByTestAttr(component, 'nearbyFormButton')
        nearbyFormButton.simulate('click')
        expect(mockFunc.mock.calls.length).toEqual(1)
        expect(mockFunc).toHaveBeenCalledWith({ ...dummyFormData })
    })
})
