import React, { Component } from 'react'
import "./Inventory.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import AssetsHeader from './AssetsHeader';
import Assets from "./Assets"
import SearchCriteria from "./SearchCriteria"
import SearchComponent from './SearchComponent';
import Footer from '../About/Footer';
import Navbar from "../About/Navbar/Navbar"
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
import UploadItems from '../UploadItems/UploadItem'
import  BackDrop from './../Backdrop/backDrop'



class Inventory extends Component {
   constructor(props){
       super(props)
     
   }

     render(){
        
        let searchIcon = <FontAwesomeIcon icon={faSearch} />
        // let CaretDownIcon = <FontAwesomeIcon icon={faCaretDown} />
        return (
           <div  className="container-div">
           <Navbar/>
            <div className="Inventory-Container">
             
            
          
                <div className="Search-Assets-Div">
                    <SearchComponent />
    
                      <div className="Upload-addDiv">
    
                      <Link to="#">Add NewItem</Link>
                      <Link to="/UploadItems" onClick={this.showBackDrop}>Upload Item</Link>
    
                          
                      </div>    
                </div>
    
              <SearchCriteria />
    
    
               
                <div className="Item-Result">
                     <div className="Item-searchResult">
    
                    <AssetsHeader title="No/Serial Number"/>
                    <AssetsHeader title="Picture"/>
                    <AssetsHeader title="Asset Tag/Description"/>
                    {/* <AssetsHeader title="result-caption"/>*/} 
                    <AssetsHeader title="Type/Brand"/>
                    <AssetsHeader title="Category/Ownership"/>
                    <AssetsHeader title="Location/Area"/>
                    
    
                    </div> 
    
                
    
                    <div className="result">
                        <div className="result-Item">
                        
                         {
                            this.props.asset.map(this.displayAssetsInStore)
                             
                         }
                        
                        
    
                       
                        
                        
                         </div>
                    </div>
    
                </div>
                
    
                
              </div>
    
    
                <Footer/>
            </div>
        )
     }

     
     displayAssetsInStore(asset){

    return (
        <Assets 
        key ={asset.ItemNo}
        ItemNo = {asset.ItemNo}
        serialNumber={"/"+asset.serialNumber}
        assetImg = {asset.Img}
        assetName = {asset.assetName}
        assetBrand ={asset.assetBrand}
        assetCategory= {asset.Category}
        assetOwner={asset.assetOwner}
        Status= {asset.status}
        stat= {asset.stat}

    /> 

    )
   }


     

}

const mapStateToProps =(state)=>{
    return{
        asset:state.assets.available
    }
}
export default connect(mapStateToProps)(Inventory) 