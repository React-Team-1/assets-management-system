import React from 'react'
import './card.css'


const card = (props) => {
    return (
        
    <div className='card-image'>
        <div className='card-container'>

            <div className='card-content'>
                <div className='card-title'>
                <h2>{props.title}</h2> 
                </div>

                <div className='card-body'>
                    <p>{props.textBody}</p>
                </div>
            
            </div>
        
            
        </div>
    </div>
    )
}

export default card
