import React from 'react'

export default function HistoryComponent(props) {
    return (

                    <div className="history-div">

                      <div className="AssetsComments">
                        <p>{props.dateIssued}</p> <span>{props.date}</span>
                       </div>
                      
                      <div className="AssetsComments">
                         <p>{props.dateReceived}</p> <span>{props.receivedDate}</span>
                       </div>
                      <div className="AssetsComments">
                        <p>{props.receipientId}</p> <span>{props.receipient}</span>
                      </div>
                     

                      <div className="AssetsComments">
                            <p>{props.commentsText} </p><span>{props.comments}</span>
                      </div>
                            <p id="receiver">{props.receiver }<span> {props.receiverName}</span></p>
                            <hr />

                    </div>
                      
      
    )
}
