import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'

import PlaceCard from '../PlaceCard'
import { findByTestAttr } from '../../../utils/common'

const placeCardProp = {
    icon: '',
    id: '',
    lat: 456,
    lng: 123,
    name: '',
    rating: 4,
    totalRatings: 100,
    vicinity: ''
}

describe('PlaceCard Component', () => {
    let component: ShallowWrapper
    let mockFunc = jest.fn()
    beforeEach(() => {
        component = shallow(<PlaceCard
            data={{...placeCardProp}}
            displayMarkerCard={mockFunc}
        />)
    })
    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'card')
        expect(wrapper.length).toEqual(1)
    })
    it('Should render image for place', () => {
        const wrapper = findByTestAttr(component, 'placeImage')
        expect(wrapper.length).toEqual(1)
    })
    it('Should display rating for place', () => {
        const wrapper = findByTestAttr(component, 'rating')
        expect(wrapper.length).toEqual(1)
    })
    it('Should display vicinity', () => {
        const wrapper = findByTestAttr(component, 'vicinity')
        expect(wrapper.length).toEqual(1)
    })
    it('Should trigger displayMarkerCard', () => {
        const card = findByTestAttr(component, 'card')
        card.simulate('click')
        expect(mockFunc.mock.calls.length).toEqual(1)
    })
})
