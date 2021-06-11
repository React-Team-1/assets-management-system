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
import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/dom'



class Inventory extends Component {
     index = 0;
       constructor(props){
       super(props);

       this.state ={
           AssetsHeader:["No/Serial Number","Picture","Assets","Type/Brand","Category/Ownership","Location/Area"]
       }
       
     
   }
     
//    IOS Development and unreal engine

     render(){
         console.log(this.state.AssetsHeader)
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
    

                    {this.state.AssetsHeader.map((val,index)=>{
                        if(index == 1){
                           return <AssetsHeader style={{marginLeft:"40px"}} title={val}/>
                        }else{
                           return <AssetsHeader title={val}/>
                        }
                        
                    })}
               
    
                </div> 
    
                
    
                    <div className="result">
                        <div className="result-Item">
                       {
                                
                        
                            !this.props.assets == "" ? this.props.assets.map(this.displayAssetsInStore) : ""
                        
                       }


                        
                         </div>
                    </div>
    
                </div>
                
    
                
              </div>
    
    
                <Footer/>
            </div>
        )
     }

     
     displayAssetsInStore(asset,index){
    let counter = index;

    return (
        <Assets 
        key = {counter++}
        ItemNo = {counter+". "}
        serialNumber={asset.serial}
        assetImg = {'Assets/asetsImage.jpeg'}
        assetName = {asset.asset_name}
        assetBrand ={asset.brand}
        assetCategory= {asset.category}
        assetOwner={asset.owner[0].name}
        Status= {"Status"}
        stat= {asset.status}

    /> 

    )
   }

componentDidMount(){

   this.getAssets("https://rocky-falls-71050.herokuapp.com/assets",'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWQxOTY5ZDUwMjRmMDY0ZmFkYjE4ZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyeSQxMiR5RUFJWHNXMmR4eThMYzZDcmRLeHVPRjB6SnJ1aGk3RE1kOWtGam9YY0xhS2xiL2g1MGpMcSJ9LCJpYXQiOjE2MjMzMTY4NDl9.C-WYfxP-BLhdGHZL0-pUVahl6EbwR_1eDTXt-2l4hf8')

}

getAssets(url,bearerToken){
    
     axios.get(url,
    { 
        headers: {
                    Authorization: bearerToken
                },
        }
    ).then((response)=>{

        if(response.status === 200){
            // console.log("This is me", response.data.data.length);
            let returnedValues = response.data.data;
            // console.log(returnedValues.length)
            this.props.getAssets(returnedValues);
        }
            
    })

}



}





const mapStateToProps =(state)=>{
    return{
        assets:state.assets.Instore
    }
}

const mapDispatchToProps= dispatch =>{
    return{
       getAssets: data => dispatch({type:"UPDATE_ASSETS",payload:data})
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Inventory) 