import React from 'react'
import Requisition from './Requisition';

export default function Requisitions(props) {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: "30px", color: "black" }}>
        <h2 style={{ color: "black", marginLeft: "400px" }}>
          <b>Received Approved Purchase Requisitions</b>
        </h2>
        <div className="requisitions">
          {props.data.map((data, index) => {
            console.log(index);
            return <Requisition key={index} data={data} number= {index}/>;
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
