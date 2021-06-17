import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {Link} from "react-router-dom"
import {Col} from "react-bootstrap"




export default function Assets(props) {
    return (
            
      

          <Row className="Items-rowContainer">
               <Col  xs={6} md={2} className="item-colums">
                  <h5>{props.ItemNo}<Link to="/ViewItem">{props.serialNumber}</Link></h5>
               </Col>

               <Col  xs={6} md={2} className="item-colums">
                    <img src={props.assetImg} alt="Assets picture"/>
               </Col>

               <Col  xs={6} md={2} className="item-colums">
                    <h5 id="">{props.assetName}</h5>
               </Col>

               <Col  xs={6} md={2} className="item-colums">
                    <h5 style={{marginLeft:"30px"}} id="">{props.assetBrand}</h5>
               </Col>

                <Col  xs={6} md={2} className="item-colums ">
                    <h5 style={{marginLeft:"30px"}} >{props.assetCategory}</h5>
                    <h6  style={{marginLeft:"30px"}} id="owner">{props.assetOwner}</h6>
                </Col>

                <Col  xs={6} md={2} className="item-colums">
                    <h5 style={{marginLeft:"48px"}}>{props.Status}</h5>
                    <h6  onClick={props.click} onMouseOver={props.statusHover} onMouseOut={props.statusHover}  style={{marginLeft:"30px"}} id="status" >{props.stat}</h6>
                </Col>
                
              

         </Row>

 
         
      
            
                  // <tr className="responsive-sm ">
                  //   <td  className=""><h5>{props.ItemNo}<Link to="/ViewItem">{props.serialNumber}</Link></h5></td>
                  //   <td  className="">  <img src={props.assetImg} alt="speaker"/></td>
                  //   <td  className="">  <h5 id="">{props.assetName}</h5></td>
                  //   <td  className=""> <h5 id="">{props.assetBrand}</h5></td>
                  //   <td  className="">  <h5  >{props.assetCategory}</h5>
                  //       <h6 id="">{props.assetOwner}</h6>
                  //   </td>

                  //     <td className="py-3 px-md-5">
                  //         <h5>{props.assetsLocation}</h5>
                  //         <h6 id="">{props.area}</h6>
                  //     </td>
                  // </tr>
          
    
                    //  <div className="Items">
                    //     <div className="product">
                    //         <h5>{props.ItemNo}<Link to="/ViewItem">{props.serialNumber}</Link></h5>
                    //     </div>
                    //     <div className="product" id="product-imgDIV">
                    //         <img src={props.assetImg} alt="speaker"/>

                    //     </div>

                    //     <div className="product">
                    //         <h5 id="desc">{props.assetName}</h5>
                    //     </div>
                     
                    //     <div className="product">
                    //         <h5 id="brand">{props.assetBrand}</h5>
                    //     </div>

                    //     <div className="product">
                    //       <div className="Product-category">
                    //       <h5  >{props.assetCategory}</h5>
                    //         <h6 id="owner">{props.assetOwner}</h6>
                          
                    //       </div>
                    //       </div>
                    //       <div className="product">
                    //       <div className="Product-Location">
                    //       <h5  >{props.assetsLocation}</h5>
                    //         <h6 id="area">{props.area}</h6>
                          
                    //       </div>
                    //       </div>
                     
                    // </div>
               
                
        
       
    )
}
