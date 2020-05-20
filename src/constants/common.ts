import { PlaceTypes } from "../interfaces/common"

export const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY as string
export const MAX_RADIUS = '500'
export const AVAILABLE_PLACE_TYPES: Array<{label: string, value: PlaceTypes}> = [
    {
        label: 'ATM',
        value: 'atm'
    },
    {
        label: 'Bank',
        value: 'bank'
    },
    {
        label: 'Bus Station',
        value: 'bus_station'
    },
    {
        label: 'Local Government Office',
        value: 'local_government_office'
    },
    {
        label: 'Pharmacy',
        value: 'pharmacy'
    },
    {
        label: 'Train Station',
        value: 'train_station'
    }
]
