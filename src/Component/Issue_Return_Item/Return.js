import React,{ Component } from 'react'
import "./Return.css"
import Close from "./../ClosePopup/close"
import * as ReactBoostrap  from "react-bootstrap"
import { connect } from 'formik'



 class Return extends Component {
    render() {
        console.log(this.props.isLoading)
        return (
        

            <div  className="return_form  hide">
                  <h3>RETURN ASSET</h3>
                  <Close click={this.props.click}/>
                  <div className="input-area">
                      <label><h5>Asset ID:</h5></label><input type='text' id="as-id" name="assetId" readOnly value={this.props.assetId} placeholder=""/>
                      <label><h5>Reciepient Email:</h5></label>

                      <div className="autocomplete" style={{width:"100%"}}>
                            <input type='text' id="reAsset-id" autoComplete="off" onChange={this.props.people} placeholder=""/>
                      </div>

                      <label><h5>Comments:</h5></label><textarea type='text' id='returnComments' rows="5" cols="50" ></textarea>
                      <br/>
                    
                      <button  onClick={this.props.submit}>
                       { this.props.isLoading ?   <ReactBoostrap.Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> :"submit"}
                      </button>
                  </div>
                 
      
              </div>
                  
          
          )
    }
}


// const mapStateToProps = state =>{
//     return{
//         isLoading:state.assets.loading
//     }
// }
export default Return


