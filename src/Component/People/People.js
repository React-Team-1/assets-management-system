import React, { Component } from 'react'
import Navbar from "./../About/Navbar/Navbar"
import SearchComponent from "../Inventory/SearchComponent"
import { Row,Col } from 'react-bootstrap'
import "./People.css"
import SelectComponent from "./SelectComponent"
import AssetsHeader from "./../Inventory/AssetsHeader"
import Persons from "./Persons"
import Footer from '../About/Footer';



export default class People extends Component {
    state ={
        AssetsHeader:["Pictures","Name ID","Email","Phone Number","Specialization Track"]
    }



    render() {
        return (
            <div className="people-container">
                 <Navbar/>

                  <div className="searchDiv">
                     <SearchComponent holder="Search Person By Name or Track"/>
                  </div>

                 <Row className="people-row ">
                    <Col xs={3}   className="people-col">
                         <Row className="Row people-details">
                                    <h4>Summary</h4>
                         </Row>
                         <Row className="Row people-details">
                                <div>
                                   30 Trainees
                                </div>
                         </Row>
                         <Row className="Row people-details">
                                <div>
                                    18 Males
                                </div>
                         </Row>

                         <Row className="Row people-details">
                                <div>
                                   12 Females
                                </div>
                         </Row>


                        <Row className="Filter-section">
                            
                         

                        <SelectComponent
                            caption="Gender"
                            optionToSelect={["male","female","other"]}
                        />

                        <SelectComponent
                            caption="Specialization"
                            optionToSelect={["Media & Design","Software Dev","SaleForce","Datascience"]}

                        />

                        
                        <SelectComponent
                            caption="Batch"
                            optionToSelect={["Batch 1","Batch 2","Batch 3","Batch 4"]}

                        />


                     <Col>
                     <div className="btn-div">
                         <button>Filter</button>
                         <button>Export</button>
                     </div>
                         
                     </Col>

                           
                        </Row>
                    </Col>
                    <Col    className="people-col">
                        <Row>
                            <div className="people-header">
                                {this.state.AssetsHeader.map((val,index)=>{
                                    if(index === 0){
                                    return <AssetsHeader style={{marginLeft:"40px"}} title={val}/>
                                    }else if(index === 2)
                                    {
                                        return <AssetsHeader style={{marginLeft:"30px"}} title={val}/>
                                    }
                                    else if(index === 3){
                                        return <AssetsHeader style={{marginLeft:"40px"}} title={val}/>
                                    }
                                    else{
                                    return <AssetsHeader style={{marginLeft:"10px"}} title={val}/>
                                    }
                                })} 
                            </div>

                            <div  className="result">
                                  <Persons
                                      imgSrc ="Assets/personAvatar.png"
                                      personName = "Kwabena Agyepong"
                                      email = "justice.ajah@amalitech.org"
                                      phone = "0502535645"
                                      track ="Media & Design"
                                  />

                                <Persons
                                      imgSrc ="Assets/personAvatar.png"
                                      personName = "Justice Ajah"
                                      email = "KwabenaAgyei@amalitech.org"
                                      phone = "050345443"
                                      track ="Software Engineering"
                                  />
                            </div>
                           

                        </Row>
                    </Col>
                 </Row>
                 <Footer/>
            </div>
        )
    }
}
