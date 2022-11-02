import React, { useState } from "react";
import NoticePop from "./NoticePop";
import { acceptOrRejectCustomerApprovalPendingSoq } from "../services/Procurement_Construction_Site_Management";

export default function OrderPop(props) {

  console.log(props);

  const [popup, setPopUp] = useState(false);
  const [inputField, setInputField] = useState({
    supplierOrderQuotationId: props.data.id,
    rejectedDate: new Date().toISOString().split("T")[0],
    rejectedReason: "",
    command: true,
  });


  console.log(inputField);


  const onSubmit = async () => {
    const data = inputField;
    await acceptOrRejectCustomerApprovalPendingSoq(data)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return props.trigger ? (
    <div className="popupOne">
      <div className="popup-innerThree">
        <div
          className="reference"
          style={{ fontSize: "40px", color: "#fff04d" }}
        >
          <b>Reference No:{props.data.id}</b>
        </div>
        <div className="table" style={{fontSize: "30px"}}>
          <tr>
            <td>
              <b>
                Item :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                {props.data.order.orderName}
              </b>
            </td>
            <td style={{ fontSize: "30px" }}>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <b>
                <u>Supplier Details:</u>
              </b>
            </td>
          </tr>
          <tr>
            <td>
              <b>
                Quantity:&emsp;&emsp;&emsp;&emsp; {props.data.deliverableAmount}
              </b>
            </td>
            <td>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <b>Supplier: {2}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>
                Brand:&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;{" "}
                {props.data.deliverableBrand}
              </b>
            </td>
            <td>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <b>Supplier ID: {2}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>
                Unit Price:&nbsp;&emsp;&emsp;&emsp; {props.data.pricePerUnit}
              </b>
            </td>
            <td>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <b>Company Name: {props.data.supplyBrand}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Total Amount:&emsp;&emsp;&emsp; {}</b>
            </td>
            <td>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <b>Delivered Date: {props.data.deliverableDate}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Description:&emsp;&emsp;&emsp; {}</b>
            </td>
          </tr>
        </div>
        <button
          type="button"
          class="btn btn-danger"
          style={{
            height: "60px",
            width: "150px",
            position: "fixed",
            borderRadius: "75px",
            marginLeft: "750px",
            marginTop: "80px",
            fontSize: "25px",
          }}
          onClick={() => setPopUp(true)}
        >
          <b>Reject</b>
        </button>
        <button
          type="button"
          class="btn btn-warning"
          style={{
            height: "60px",
            width: "150px",
            position: "fixed",
            borderRadius: "75px",
            marginLeft: "950px",
            marginTop: "80px",
            fontSize: "25px",
          }}
          onClick={onSubmit}
        >
          <b>Accept</b>
        </button>
        <NoticePop trigger={popup} setTrigger={setPopUp} data={props.data} />
      </div>
    </div>
  ) : (
    ""
  );
}
