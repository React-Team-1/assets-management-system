
import React, { Component } from 'react'
import {connect} from "react-redux"

 class CategoryComp extends Component {
    render() {
        // console.log(this.props.categories)
        return (
            
            
                <div className="Category-Search">
                <label>{this.props.cTitle}</label>
                     <select >
                     {
                        this.props.categories ? this.props.categories.map((category,index)=>{
                                const categoryName = category.category_name;
                                const catFinal = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
                            return <option key={index++} value={catFinal}>{catFinal}</option>
                        }):""
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