import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function SearchComponent() {
    let searchIcon = <FontAwesomeIcon icon={faSearch} />
    return (
        <div className="Search-Assets">
            <input  type="text" placeholder="Search by Assets Tag Number | Serial Number"/>
            <i className="Store-icon" id="asset-searchIcon">{searchIcon}</i>
        </div>
    )
}
