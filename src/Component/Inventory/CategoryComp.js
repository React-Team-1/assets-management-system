import React from 'react'

export default function CategoryComp(props) {
    return (
        <div className="Category-Search">
        <label>{props.cTitle}</label>
             <select >
                 <option value="Choose Category">{props.type}</option>
             </select>
        </div>
    )
}
