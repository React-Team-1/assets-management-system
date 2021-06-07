import React from 'react'

export default function Details(props) {
    return (
        <div className="Asset-detail">
            <p>{props.title}: <span>{props.No}</span></p>
            <p>{props.title2}: <span>{props.Name}</span></p>
            <p>{props.title3}: <span>{props.Brand}</span></p>
            <p>{props.title4}: <span>{props.Category}</span></p>
            <p>{props.title5}: <span id="ownership">{props.Ownership}</span></p>
            <p>{props.title6}: <span>{props.PurchaseDate}</span></p>
            <p>{props.title7}: <span>{props.Status}</span></p>
            <p>{props.title8}: <span>{props.Location}</span></p>
        </div>
    )
}