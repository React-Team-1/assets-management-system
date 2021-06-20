import React from 'react'
import { Row,Col } from 'react-bootstrap'



export default function Persons(props) {
    return (
        <Row className="person-info">
            <Col  className="item-colums" >
                <img  style={{marginLeft:"20px"}} src={props.imgSrc} alt="Persons Image"/>
            </Col>
            <Col className="item-colums">
                <h4 style={{marginLeft:"10px"}}>{props.personName}</h4>
            </Col>
            <Col className="item-colums">
                <h4>{props.email}</h4>
            </Col>
            <Col className="item-colums">
              <h4 style={{marginLeft:"25px"}}>{props.phone}</h4>
            </Col>
            <Col className="item-colums">
              <h4>{props.track}</h4>
            </Col>
        </Row>
    )
}
