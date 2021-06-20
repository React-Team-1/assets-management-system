import React from 'react'
import { Row,Col } from 'react-bootstrap'
import "./People.css"

export default function SelectComponent(props) {
    return (
        <Row className="filter-contents">
            <Col>
                {props.caption}
                <select className="Select">
                    {
                        props.optionToSelect.map((each)=>{
                            return <option value={each}>{each}</option>
                        })
                    }
                    {/* <option value={props.optionToSelect[0]}>{props.optionToSelect[0]}</option>
                    <option value={props.optionToSelect[1]}>{props.optionToSelect[1]}</option>
                    <option value={props.optionToSelect[2]}>{props.optionToSelect[2]}</option>
                    <option value={props.optionToSelect[3]}>{props.optionToSelect[3]}</option>
                 */}

                
                </select>
            </Col>
       </Row>
    )
}
