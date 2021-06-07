import React, {Component} from 'react'
import "./Store.css"
import SearchComponent from "../Inventory/SearchComponent"
import SearchCriteria from '../Inventory/SearchCriteria'
import Assets from "../Inventory/Assets"
import Navbar from "../About/Navbar/Navbar"
import Footer from "../About/Footer"
import { connect } from 'react-redux'



class Store extends Component{

  render(){
    return (
      <div className="container-div">
       <Navbar/>
        <div className="StoreWrapper">
       

       <div className="searchDiv">
         <SearchComponent promptText=""/>
       </div>


       <div className="SearchItemCriteria">
          <SearchCriteria/>
       </div>

      

       <div className="Result">
           
           {
             this.props.asset.map(this.displayAssetsInStore)
           }

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
        assetsLocation= {asset.assetsLocation}
        area= {asset.area}

    /> 

    )
   }
    
}




const mapStateToProps= (state)=>{
  return{
    asset:state.assets.available
}
}


export default connect(mapStateToProps)(Store)
