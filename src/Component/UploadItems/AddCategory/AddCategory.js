import React from 'react'
import "./AddCategory.css"

export default function AddCategory() {
    return (
        <div  className="catdiv">
            <h2>Add Category</h2>
            <div className="input-area">
                <input type='text' id="input-area-txt" placeholder="Category Name"/><br/>
                <button>submit</button>
            </div>
           

        </div>
          
          

    )
}
