export type PlaceTypes = 'bank' | 
    'atm' | 
    'pharmacy' | 
    'local_government_office' | 
    'train_station' |
    'bus_station'

export type GenericObject = Record<string, any>

export interface IPlaceSearchQueryParams {
    lat: number
    lng: number
    type: string
    searchKey?: string
    opennow?: true
}

export interface IPlaceSearchResponse {
    geometry: {
        location: {
            lat: () => number
            lng: () => number
        }
    }
    opening_hours?: {
        isOpen: () => boolean
    }
    user_ratings_total: number
    rating: number,
    icon: string
    id: string
    name: string
    vicinity: string
    photos?: Array<{
        getUrl: () => string
    }>
}

export interface IPlacesResult {
    name: string
    id: string
    icon: string
    rating: number
    totalRatings: number
    vicinity: string
    lat: number
    lng: number
    openNow?: boolean
    photo?: string
}

export type IFormState = Omit<IPlaceSearchQueryParams, 'lat' | 'lng'>
