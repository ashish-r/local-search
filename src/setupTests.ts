import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
    adapter: new Adapter(),
})

const geolocationMock = {
    getCurrentPosition: jest.fn()
        .mockImplementationOnce((success) => Promise.resolve(
            success(
                {
                    coords: {
                        latitude: 51.1,
                        longitude: 45.3
                    }
                }
            )
        )
    )
}
;(global.navigator as any).geolocation = geolocationMock
