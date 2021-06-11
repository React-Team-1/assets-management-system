import React from 'react'

export default function AssetsHeader(props) {
    console.log(props.style)
    let unique = props.style;
        return(
            <div className="result-caption">
            {props.style === unique  ? <h4 style={props.style}>{props.title}</h4> :<h4> {props.title}</h4>}
            </div>
        )
      
}
