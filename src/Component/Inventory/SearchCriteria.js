import React from 'react'
import CategoryComp from './CategoryComp';

export default function SearchCriteria() {
    return (
        <div className="Search-Criterias">
        <CategoryComp cTitle ="Category" type="Select Category"/>
        <CategoryComp cTitle ="Item Type" type="Item Type"/>
        <CategoryComp cTitle ="Brand" type="Select Brand"/>
        <CategoryComp cTitle ="Ownership" type="Select Owner"/>
        <CategoryComp cTitle ="Status" type="Select Status"/>

        {/* Search button starts here */}
        <div className="submitDiv">
        <input  type="submit" value="Search"/>
        </div>
    </div>
    )
}
