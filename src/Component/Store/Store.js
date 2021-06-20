import React, { Component } from 'react'
import "./Store.css"
import SearchComponent from "../Inventory/SearchComponent"
import SearchCriteria from '../Inventory/SearchCriteria'
import Assets from "../Inventory/Assets"
import Navbar from "../About/Navbar/Navbar"
import Footer from "../About/Footer"
import { connect } from 'react-redux'
import Loading from '../Spinner/Loading'
import { getAssets } from '../../store/asmActions'
import { deleteItem } from '../../store/asmActions'
import { issueAsset } from '../../store/asmActions'
import { returnAsset } from '../../store/asmActions'
import { getPeople } from '../../store/asmActions'
import Issue from "./../Issue_Return_Item/Issue"
import ReturnAsset from "./../Issue_Return_Item/Return"
import BackDrop from './../Backdrop/backDrop'
import SearchDiv from '../Inventory/SearchDiv'
import SuccessCheck from '../Checks/SuccessCheck'
import DeleteItem from '../DeleteModal/deleteItem'



class Store extends Component {


  constructor(props) {
    super(props)
    this.state = {
      issueDetails: {
        id: "",
        recipientID: "",
        issueComments: " "

      },
      
      returnDetails: {
        id: "",
        issuedID: "",
        returnComments: " "

      },

      assetID: "",

      people:[]
    }

  }


  componentDidMount() {

    if (typeof this.props.assets === "undefined") {
      this.props.getAssets();
    }

  }

  issueAsset(e) {
    let assetId = e.target.parentElement.parentElement.children[0].children[0].lastChild.innerText;
    this.setState({
      ...this.state.issueDetails,
      assetID: assetId
    })

    console.log(this.state.assetID)
    let height = window.innerHeight;
    document.querySelector(".backDrop").classList.remove("hide")
    document.querySelector(".issue_form").classList.remove("hide");
    window.scrollTo(0, height / 2 - 60)

  }

  returnAsset(e) {
    let assetId = e.target.parentElement.parentElement.children[0].children[0].lastChild.innerText;

    this.setState({
      ...this.state,
      assetID: assetId
    })

    let height = window.innerHeight;
    document.querySelector(".backDrop").classList.remove("hide")
    document.querySelector(".return_form").classList.remove("hide");
    window.scrollTo(0, height / 2 - 60)
  }


  closeIssue_AssetPopupHandler() {
    document.querySelector(".issue_form").classList.add("hide");
    document.querySelector(".backDrop").classList.add("hide");
  }


  closeReturn_AssetPopupHandler() {
    document.querySelector(".return_form").classList.add("hide");
    document.querySelector(".backDrop").classList.add("hide")
  }


  issueAssetHandler = () => {

    //disable input field
    document.querySelector("#as-id").disabled = true;

    //get input values
    const assetTagNumber = document.querySelector("#as-id").value;
    let receipientId = document.querySelector("#re-id").value;
    const comments = document.querySelector("#comments").value;
    console.log(receipientId)
    let assetId;

    this.props.assets.forEach((asset)=>{
      if(asset.tag_number === assetTagNumber){
          assetId = asset._id;
      }
    })
    

    //set issue details to state
    this.setState({
      issueDetails: {
        id: assetId,
        recipientID: receipientId,
        issueComments: comments,
        user: localStorage.getItem("currentUser")
      }
    }, () => {
      //use issue details info
      this.props.issueAsset(this.state.issueDetails);
    })

    document.querySelector(".issue_form").classList.add("hide");
    document.querySelector(".checkContainer").classList.remove("hide");
    // checkContainer

    setTimeout(()=>{
      document.querySelector(".checkContainer").classList.add("hide");
      document.querySelector(".backDrop").classList.add("hide")
      
    },5000)


    this.props.getAssets();
    

    console.log(this.state.issueDetails)
  }


  returnAssetHandler() {
    document.querySelector("#as-id").disabled = true;
    //get input values
    const assetTagNumber = document.querySelector("#as-id").value;
    let receipientId = document.querySelector("#reAsset-id").value;
    const comments = document.querySelector("#returnComments").value;
    let assetId;
    console.log(assetTagNumber)
    


    this.props.assets.forEach((asset,index)=>{
      if(asset.tag_number === assetTagNumber && asset.history[asset.history.length-1].recipient_id === receipientId){
        console.log(asset.history)
          assetId = asset._id;
          receipientId = asset.history[asset.history.length-1]._id;

          
      }
    });

    console.log(assetId)
    this.setState({
      returnDetails: {
        id: assetId,
        issuedID: receipientId,
        returnComments: comments,
        user: localStorage.getItem("currentUser")
      }
    }, () => {
      this.props.returnAsset(this.state.returnDetails);
    })

    document.querySelector(".return_form").classList.add("hide");
    document.querySelector(".checkContainer").classList.remove("hide");
  

    setTimeout(()=>{
      document.querySelector(".checkContainer").classList.add("hide");
      document.querySelector(".backDrop").classList.add("hide")
      
    },5000)


    this.props.getAssets();



  }

  closeDeleteAssetHandler(){
    document.querySelector(".deleteContainer").classList.add("hide");
    document.querySelector(".backDrop").classList.add("hide");
  }

  deleteYesClickHandler(e){
    let assetTagNumber = this.state.deleteAssetID;
    let assetID;

    this.props.assets.forEach((asset)=>{
          if(asset.tag_number === assetTagNumber){
              assetID = asset._id;
          }
    })

    let currentUser = localStorage.getItem("currentUser");
    
    this.props.deleteItem({assetID,currentUser})

    // Refresh assets
      this.props.getAssets();
  

  
      document.querySelector(".deleteContainer").classList.add("hide");
      document.querySelector(".checkContainer").classList.remove("hide");


    setTimeout(()=>{
      document.querySelector(".checkContainer").classList.add("hide");
      document.querySelector(".backDrop").classList.add("hide")
      
    },2000);


   

  }


  findUser(emailAddress){
    //  this.state.people
    for(let  i = 0; i < this.state.people.length; i++){
         if(emailAddress === this.state.people[i].email){
             return emailAddress
         }
    }

     return null
  }


  render() {
    {
        if(this.props.people){
          this.props.people.forEach((person)=>{
            if(this.findUser(person.email) === null){
              this.state.people.push(person)
              console.log(person)
            }
           
        })
      
      }

      console.log(this.state.people)
      
  }



    return (
      <div className="container-div">
        <BackDrop />
        <Navbar />
        <DeleteItem  
        isLoading ={this.props.loading}
        yesclick={(e)=>{this.deleteYesClickHandler(e)}}
         click={this.closeDeleteAssetHandler}/>

        <Issue 
              people={(e)=>{
                this.props.getPeople()
                this.suggestPeople(e)
                }}

                assetId={this.state.assetID} 
                submit={() => this.issueAssetHandler()} 
                click={(e) => { this.closeIssue_AssetPopupHandler() }}
                isLoading ={this.props.loading}
         />

        <ReturnAsset 
                  people={(e)=>{
                          this.props.getPeople()
                          this.suggestPeople(e)
                          }}
                  isLoading={this.props.loading} 
                  assetId={this.state.assetID} 
                  submit={() => this.returnAssetHandler()} 
                  click={(e) => {
                    this.closeReturn_AssetPopupHandler()
        }} />

        <SuccessCheck/>
        

        <div className="StoreWrapper">


          <div className="searchDiv">
            <SearchComponent promptText="" />
          </div>



          <div className="SearchItemCriteria">
            <SearchCriteria />
          </div>



          <div className="item-Result">
            {
              !this.props.loading ? 
              !this.props.assets == "" ? this.props.assets.map(this.displayAssetsInStore) : <h4 style={{ textAlign: "center" }}> No Asset in Database </h4>
               :<div className="text-center"> <Loading /> </div>
            }
            

          </div>




        </div>

        <Footer />
      </div>
    )
  }

  checkAssetStatusHandler = (e) => {
    // alert("Hello")
    if (e.type === "mouseover") {
      this.assignAssetTextEventHandler(e)

    }

    if (e.type === "mouseout") {
      this.assignAssetTextEventHandler(e)
    }


  }

  assignAssetTextEventHandler = (e) => {
    console.log("I was called");

    if (e.target.innerText === "in-store") {
      e.target.innerText = "Assign";
    } else if (e.target.innerText === "Assign") {
      e.target.innerText = "in-store"
    } else if (e.target.innerText === "issued") {
      e.target.innerText = "return"
    } else if (e.target.innerText === "return") {
      e.target.innerText = "issued"
    }


  }


  displayAssetsInStore = (asset, index) => {

    let counter = index;

    return (
      <Assets
        key={counter++}
        ItemNo={counter + ". "}
        tagNumber={asset.tag_number}
        assetImg={asset.image}
        assetName={asset.asset_name}
        assetBrand={asset.brand}
        assetCategory={asset.category}
        assetOwner={asset.owner}
        Status={"Status"}
        stat={asset.status}
        statusHover={this.checkAssetStatusHandler.bind(this)}
        click={(e) => {

          if (e.target.innerText === "return") {
            this.returnAsset(e);
          } else if (e.target.innerText == "Assign") {
            this.issueAsset(e);
          }
        }}

        delete={(e)=>{

          let assetId = e.target.parentElement.parentElement.children[0].children[0].lastChild.innerText;
           
           let height = window.innerHeight;
           document.querySelector(".backDrop").classList.remove("hide");
           document.querySelector(".deleteContainer").classList.remove("hide");
          //  deleteContainer
           window.scrollTo(0, height / 2 - 60)

           this.setState({
             ...this.state,
             deleteAssetID: assetId

           })

        }}

      />

    )
  }


  suggestPeople(e){
      
      // const input = document.querySelector("#re-id")
      const input = e.target;
      console.log(input)
      this.autocomplete(input,this.state.people)
  }

  
 autocomplete(inp, arr) {
  console.log(arr)
    
    var currentFocus = 0;
  
    inp.addEventListener("input", (e) =>{
       
        var a, b, i, val = e.target.value;
        

        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
      
        a = document.createElement("DIV");
        a.setAttribute("id", e.target.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        e.target.parentNode.appendChild(a);
       
        for (i = 0; i < arr.length; i++) {
          console.log("I am here")
     
          if (arr[i].email.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
         
            b = document.createElement("DIV");
           
            b.innerHTML = "<strong>" + arr[i].email.substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].email.substr(val.length);
       
            b.innerHTML += "<input type='hidden' value='" + arr[i].email + "'>";
      
                b.addEventListener("click", function(e) {
              
                inp.value = this.getElementsByTagName("input")[0].value;
             
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(e.target.id +"autocomplete-list");
        if (x) x = x.querySelectorAll("div");
        
        if (e.keyCode == 40) {
          
          currentFocus++;
         
          addActive(x);
        } else if (e.keyCode == 38) { 
         
          currentFocus--;
        
          addActive(x);
        } else if (e.keyCode == 13) {
      
          e.preventDefault();
          if (currentFocus > -1) {
          
            if (x) x[currentFocus].click();
          }
        }
    });

    const addActive =(x)=>{
      
  
      if (!x) return false;
     
        removeActive(x);
      
      console.log(x.length)
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
 
      console.log(x[currentFocus])
      console.log(parseInt(currentFocus))
      let currentDiv = x[currentFocus];
  
      
      console.log(currentDiv)
        currentDiv.classList.add("autocomplete-active") 
      
      
    }
    function removeActive(x) {
      
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
     
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
  

  

}




const mapStateToProps = (state) => {
  console.log(state.assets.Instore)
  return {
    assets: state.assets.Instore,
    loading: state.assets.loading,
    errorMsg: state.assets.error,
    msg: state.assets.msg,
    people: state.assets.people,
    deleteInfo: state.assets.DeleterequestInfo
    
  }
}



const mapDispatchToProps = dispatch => {
  return {
    getAssets: () => dispatch(getAssets()),
    issueAsset: (data) => dispatch(issueAsset(data)),
    returnAsset: (data) => dispatch(returnAsset(data)),
    getPeople: (data) => dispatch(getPeople(data)),
    deleteItem:(data) => dispatch(deleteItem(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Store)
