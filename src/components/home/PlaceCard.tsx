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
            <div className="card-containts">
                <div
                    className="card-image-wrapper" 
                    style={{backgroundImage: `url(${data.photo || data.icon})`}} >
                </div>
        
                <div style={{flex: 3}}>
                    <h3>{data.name}</h3>
                    <p className="rating">
                        Ratings: {data.rating} ({data.totalRatings} votes)
                    </p>
                    <p className="open-info">{data.openNow ? 'OPEN' : 'CLOSED'}</p>
                </div>
            </div>
            <p className="card-footer">{data.vicinity}</p>
        </div>
    )
}

export default PlaceCard
