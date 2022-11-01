import React from "react";
import PurchaseRequisition from "./PurchaseRequisition";

export default function PurchaseRequisitions(props) {

    console.log(props);

  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: "30px", color: "black" }}>
        <h2 style={{ color: "black", marginLeft: "500px" }}>
          <b>Accept/Reject Purchase Requisitions</b>
        </h2>
        <div>
          {props.data.map((data, index) => {
            console.log(index);
            return <PurchaseRequisition key={index} data={data} number= {index}/>;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
