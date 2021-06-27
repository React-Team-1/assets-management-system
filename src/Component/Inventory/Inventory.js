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
           AssetsHeader:["No/Serial Number","Picture","Assets","Type/Brand","Category/Ownership","Location/Area"],
           AssetType: []
       }

       
     
   }
     


     render(){

        {

            ///pushes the people and location for suggestions
            // this.available_People_Location();
      
            this.getAssetType();
           
      
      
      
          }
        
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
    
              <SearchCriteria 
               category={this.props.categories}
               type ={this.state.AssetType}

              />
    
    
               
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
            tagNumber={asset.tag_number}
            assetImg = {asset.image}
            assetName = {asset.asset_name}
            assetBrand ={asset.brand}
            assetCategory= {asset.category}
            assetOwner={asset.owner}
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



checkAssetType = (type) => {

    alert(type);


        if( this.state.AssetType.length > 0){
           

          for(let i = 0; i < this.state.AssetType.length; i++){
              
              if(type == this.state.AssetType[i]){
                  return type;
              }
          }

         }


     return null


  }



  getAssetType = () => {
    if (this.props.assets.length > 0) {
      alert("Values in asset")

        for(let i = 0; i < this.props.assets.length; i++){
           console.log(this.checkAssetType(this.props.assets[i].asset_name))
          if(this.checkAssetType(this.props.assets[i].asset_name) === null){        

            
            this.state.AssetType.push(this.props.assets[i].asset_name)



          }
      }


    }
   

     console.log(this.state.AssetType)





  }


}




const mapStateToProps =(state)=>{
    return{
        assets:state.assets.Instore,
        loading:state.assets.loading,
        errorMsg: state.assets.error,
        categories: state.categories.category,
    }
}

const mapDispatchToProps= dispatch =>{
    return{
    //    getAssets: data => dispatch({type:"UPDATE_ASSETS",payload:data})
          getAssets: () => dispatch( getAssets() )
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Inventory) 