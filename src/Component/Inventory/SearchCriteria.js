import React from 'react'
import { Col, Container } from 'react-bootstrap';
import CategoryComp from './CategoryComp';
import Row from 'react-bootstrap/Row'

export default function SearchCriteria(props) {
    return (



         <Container fluid>
            <Row>
               
                  <Col  xs={6} md={2}>
                         <div > <CategoryComp 
                          categories={props.category} 
                          cTitle ="Category" type="Select Category"/></div>
                  </Col>
                   <Col  xs={6} md={2}>
                        <div> <CategoryComp cTitle ="Type" type="ItemType"/></div>
                   </Col>

                   <Col  xs={6} md={2}>
                         <div> <CategoryComp cTitle ="Brand" type="Select Brand"/></div>
                   </Col>

                   <Col  xs={6} md={2}>
                         <div> <CategoryComp cTitle ="Ownership" type="Select Owner"/></div>
                   </Col>

                   <Col  xs={6} md={2}>
                      <div><CategoryComp cTitle ="Status" type="Select Status"/></div>
                   </Col>

                   <Col  xs={6} md={2}>
                        <div className="submitDiv">
                            <input  type="submit" value="Search"/>   
                        </div>
                   </Col>
               
            </Row>

         </Container>
    //     <div className="Search-Criterias">
        
    //     <CategoryComp cTitle ="Item Type" type="Item Type"/>
    //     <CategoryComp cTitle ="Brand" type="Select Brand"/>
    //     <CategoryComp cTitle ="Ownership" type="Select Owner"/>
    //     <CategoryComp cTitle ="Status" type="Select Status"/>

    //     {/* Search button starts here */}
    //     <div className="submitDiv">
    //     <input  type="submit" value="Search"/>
    //     </div>
    // </div>
    )
}
