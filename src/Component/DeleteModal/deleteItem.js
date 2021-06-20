import React from 'react'
import "./deleteItem.css"
import Close from "./../ClosePopup/close"
import Loading from '../Spinner/Loading'



 const deleteItem = (props)=>{
    return (
        <div className="deleteContainer hide">

        {
            props.isLoading?<div style={{textAlign:"center"}}> <Loading /> </div>
            :<div>
                <Close click={props.click}/>
                    <h3>Are you sure you want to delete?</h3>
                    
                    <div className="delete-div">
                            <button onClick={props.yesclick} id="btnFdelete" >Yes</button>
                    </div>
             </div>
        }
        </div>
    )
}

export default deleteItem
