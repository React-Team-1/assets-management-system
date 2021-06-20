import React from 'react'
import "./SuccessCheck.css"

export default function SuccessCheck() {
    return (
         <div className="checkContainer hide">

            <div className="check_mark">
                    <div className="sa-icon sa-success animate">
                        <span className="sa-line sa-tip animateSuccessTip"></span>
                        <span className="sa-line sa-long animateSuccessLong"></span>
                        <div className="sa-placeholder"></div>
                        <div className="sa-fix "></div>
                    </div>
             </div>

         </div>
            
        
        
    )
}

// $("button").click(function() {
//     $(".sa-success").addClass("hide");
//     setTimeout(function() {
//       $(".sa-success").removeClass("hide");
//     }, 10);
//   });