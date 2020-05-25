import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'

import Header from '../Header'
import { findByTestAttr } from '../../../utils/common'

describe('Header Component', () => {
    let component: ShallowWrapper
    beforeEach(() => {
        component = shallow(
            <Header/>
        )
    })
    it('Should render without errors', () => {
        const button = findByTestAttr(component, 'site-header')
        expect(button.length).toEqual(1)
    })
})
