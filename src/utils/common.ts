import {ShallowWrapper, ReactWrapper} from 'enzyme'

export function findByTestAttr(
    component: ShallowWrapper | ReactWrapper,
    attr: string
): ShallowWrapper | ReactWrapper {
    return component.find(`[data-test='${attr}']`)
}