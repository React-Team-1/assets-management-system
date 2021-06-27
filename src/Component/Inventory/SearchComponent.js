import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function SearchComponent(props) {
    let searchIcon = <FontAwesomeIcon icon={faSearch} />
    return (
        <div className="Search-Assets">
            <input  onChange={props.change} type="text" placeholder={typeof props.holder === "undefined" ?"Search by Assets Tag Number | Serial Number": props.holder}/>
            <i  onClick={props.click} className="Store-icon" id="asset-searchIcon">{searchIcon}</i>
        </div>
    )
}
