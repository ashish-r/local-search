import React from 'react'
import { IPlacesResult } from '../../interfaces/common'

const PlaceCard = ({
    data, displayMarkerCard
}: {
    data: IPlacesResult
    displayMarkerCard?: (id: string) => void
}) => {
    return (
        <div className="card" onClick={() => displayMarkerCard && displayMarkerCard(data.id)}>
            <div className="card__containts">
                <div
                    className="card__image-wrapper" 
                    style={{backgroundImage: `url(${data.photo || data.icon})`}} >
                </div>
        
                <div className="card__rating-container">
                    <h3>{data.name}</h3>
                    <p className="card__rating">
                        Ratings: {data.rating} ({data.totalRatings} votes)
                    </p>
                    <p className="card__open-info">{data.openNow ? 'OPEN' : 'CLOSED'}</p>
                </div>
            </div>
            <p className="card__footer">{data.vicinity}</p>
        </div>
    )
}

export default PlaceCard
