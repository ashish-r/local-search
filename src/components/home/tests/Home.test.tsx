import React from 'react'
import {mount, ReactWrapper} from 'enzyme'

import Home from '../Home'
import { findByTestAttr } from '../../../utils/common'

describe('Home Component', () => {
    let component: ReactWrapper
    let mockFunc = jest.fn()
    beforeEach(() => {
        component = mount(
            <Home />
        )
    })
    it('Should render without errors', () => {
        const home = findByTestAttr(component, 'home')
        const nearbyForm = findByTestAttr(component, 'nearbyFormComponent')
        const placeCardContainer = findByTestAttr(component, 'placeCardContainer')
        let map = findByTestAttr(component, 'map')
        expect(home.length).toEqual(1)
        expect(nearbyForm.length).toEqual(1)
        expect(placeCardContainer.length).toEqual(1)
        expect(map.length).toEqual(1)
        expect(placeCardContainer.text()).toEqual('Search For Your Nearby Places!')
    })
})
