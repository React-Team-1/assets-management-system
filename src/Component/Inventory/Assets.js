import React from 'react'
import {Link} from "react-router-dom"



export default function Assets(props) {
    return (
            
                     <div className="Items">
                        <div className="product">
                            <h5>{props.ItemNo}<Link to="/EditItems">{props.serialNumber}</Link></h5>
                        </div>
                        <div className="product" id="product-imgDIV">
                            <img src={props.assetImg} alt="speaker"/>

                        </div>

                        <div className="product">
                            <h5 id="desc">{props.assetName}</h5>
                        </div>
                     
                        <div className="product">
                            <h5 id="brand">{props.assetBrand}</h5>
                        </div>

                        <div className="product">
                          <div className="Product-category">
                          <h5  >{props.assetCategory}</h5>
                            <h6 id="owner">{props.assetOwner}</h6>
                          
                          </div>
                          </div>
                          <div className="product">
                          <div className="Product-Location">
                          <h5  >{props.assetsLocation}</h5>
                            <h6 id="area">{props.area}</h6>
                          
                          </div>
                          </div>
                     
                    </div>
               
                
        
       
    )
}
