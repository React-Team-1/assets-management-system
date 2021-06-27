
import React, { Component } from 'react'
import {connect} from "react-redux"

 class CategoryComp extends Component {
    render() {
        console.log(this.props.categories)
        return (
           
            
                <div className="Category-Search">
                <label>{this.props.cTitle}</label>
                     <select >
                     {
                         //else if the category title is category
                        this.props.cTitle == "Category" ?
                           
                           //if true it then checks if category has a value in it
                            this.props.categories ? 
                                    this.props.categories.map((category,index)=>{
                                            const categoryName = category.category_name;
                                            const catFinal = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
                                        return <option key={index++} value={catFinal}>{catFinal}</option>
                                    })
                            :""

                         //else if the category title is Type
                        :this.props.cTitle == "Type" ?
                        
                            //if true it then checks if category has a value in it
                            this.props.categories ?
                                    this.props.categories.map((category,index)=>{;
                                        const brandName = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
                                         return <option key={index++} value={brandName}>{brandName}</option>
                                    })
                            :""
                        
                         //else if the category title is brands
                        :this.props.cTitle == "Brand" ?
                        
                            //if true it then checks if category has a value in it
                            this.props.categories ?
                                    this.props.categories.map((category,index)=>{;
                                        const brandName = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
                                         return <option key={index++} value={brandName}>{brandName}</option>
                                    })
                            :""
                        
                        :   
                        //else if the category title is Owner
                        this.props.cTitle == "Ownership" ?
                        
                            //if true it then checks if category has a value in it
                            this.props.categories ?
                                    this.props.categories.map((category,index)=>{;
                                        const brandName = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
                                         return <option key={index++} value={brandName}>{brandName}</option>
                                    })
                            :""
                        
                        :  //else if the category title is status
                        this.props.cTitle == "Status" ?
                        
                            //if true it then checks if category has a value in it
                            this.props.categories ?
                                    this.props.categories.map((category,index)=>{;
                                        const ownerName = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
                                         return <option key={index++} value={ownerName}>{ownerName}</option>
                                    })
                            :""
                        
                        :  <option>No value </option>

                        

                        
                     }
                        
                     </select>
                </div>
          
        )
    }


}

// const mapStateToProps = (state)=>{
//      return{
//           categories: state.categories.category
//      }
// }


export default CategoryComp