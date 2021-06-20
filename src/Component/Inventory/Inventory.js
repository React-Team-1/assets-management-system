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
import { connect } from 'react-redux'
import {getAssets} from '../../store/asmActions'
import UploadItems from '../UploadItems/UploadItem'
import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/dom'
import Loading from '../Spinner/Loading'
import SearchDiv from './SearchDiv'




class Inventory extends Component {
     index = 0;
       constructor(props){
       super(props);

       this.state ={
           AssetsHeader:["No/Serial Number","Picture","Assets","Type/Brand","Category/Ownership","Location/Area"]
       }

       
     
   }
     


     render(){
        
        let searchIcon = <FontAwesomeIcon icon={faSearch} />
        // let CaretDownIcon = <FontAwesomeIcon icon={faCaretDown} />
        return (
           <div  className="container-div">
           
           <Navbar/>
           
           
            <div className="Inventory-Container">

     
          
               <SearchDiv
                addItem= "Add NewItem"
                uploadItem = "Upload Item"
                click ={this.showBackDrop}
               />
    
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
                       
                            <div className="text-center"> 
                               {!this.props.loading ?  null : <Loading /> }
                            </div>
                           
                           
                           { !this.props.assets == "" ? this.props.assets.map(this.displayAssetsInStore) :<h4 style={{textAlign:"center"}}>{this.props.errorMsg} </h4>}
                            


                        
                         </div>
                    </div>
    
                </div>
                
    
                
              </div>
    
    
                <Footer/>
            </div>
        )
     }



     
     checkAssetStatusHandler =  (e) =>{
    
        if(e.type === "mouseover"){
          this.assignAssetTextEventHandler(e)
         
        }
    
       if(e.type === "mouseout"){
        this.assignAssetTextEventHandler(e)
       }
    
    
    }
    
    assignAssetTextEventHandler(e){
      console.log("I was called");
    
         if(e.target.innerText === "in-store"){
             e.target.innerText = "Assign";
         }else if(e.target.innerText === "Assign"){
            e.target.innerText = "in-store"
         }else if(e.target.innerText === "issued"){
           e.target.innerText = "return"
         }else if(e.target.innerText === "return"){
             e.target.innerText = "issued"
         }
    
       
    }
  
  
    

  

     
    displayAssetsInStore = (asset,index)=>{
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
            // statusHover = {this.checkAssetStatusHandler.bind(this)}
        

        /> 

        )
   }



  



componentDidMount(){

    if(typeof this.props.assets === "undefined"){
        this.props.getAssets();
    }
   

}

}




const mapStateToProps =(state)=>{
    return{
        assets:state.assets.Instore,
        loading:state.assets.loading,
        errorMsg: state.assets.error
    }
}

const mapDispatchToProps= dispatch =>{
    return{
    //    getAssets: data => dispatch({type:"UPDATE_ASSETS",payload:data})
          getAssets: () => dispatch( getAssets() )
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Inventory) 