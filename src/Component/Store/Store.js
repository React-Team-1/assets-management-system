import React, {Component} from 'react'
import "./Store.css"
import SearchComponent from "../Inventory/SearchComponent"
import SearchCriteria from '../Inventory/SearchCriteria'
import Assets from "../Inventory/Assets"
import Navbar from "../About/Navbar/Navbar"
import Footer from "../About/Footer"
import { connect } from 'react-redux'
import Loading from '../Spinner/Loading'
import { getAssets } from '../../store/asmActions'



class Store extends Component{


  constructor(props){
    super(props)
     
  }
  

  componentDidMount(){
    if(typeof this.props.assets === "undefined"){
        this.props.getAssets();
    }
 }

  render(){

    console.log(this.props.assets)
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

      

       <div className="item-Result">

       <div className="text-center"> 
            {!this.props.loading ?  null : <Loading /> }
       </div>

       { !this.props.assets == "" ? this.props.assets.map(this.displayAssetsInStore) : ""}
      
       </div>
            


            
        </div>

        <Footer/>
        </div>
    )
  }

   checkAssetStatusHandler = (e) => {
   
      if(e.type === "mouseover"){
        this.assignAssetTextEventHandler(e)
       
      }

     if(e.type === "mouseout"){
      this.assignAssetTextEventHandler(e)
     }


  }

  assignAssetTextEventHandler = (e)=>{
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


  displayAssetsInStore = (asset,index) => {
    console.log(this)
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
        statusHover = {this.checkAssetStatusHandler.bind(this)}
        click = {(e)=>{
          // alert("I have been clicked");
          if(e.target.innerText === "return"){
               alert("Asset returned sucessfully")
          }else if(e.target.innerText == "Assign"){
                alert("Asset assigned successfully")
          }
        }}

    /> 

    )
   }


  
 
    
}






const mapStateToProps= (state)=>{
  console.log(state.assets.Instore)
  return{
    assets:state.assets.Instore,
    loading:state.assets.loading
}
}

const mapDispatchToProps = dispatch =>{
  return{
     getAssets:() => dispatch ( getAssets() )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Store)
