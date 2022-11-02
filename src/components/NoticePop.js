import React, { useState } from "react";
import { acceptOrRejectCustomerApprovalPendingSoq } from "../services/Procurement_Construction_Site_Management";
export default function NoticePop(props) {

  const [inputField, setInputField] = useState({
    supplierOrderQuotationId: props.data.id,
    rejectedDate: new Date().toISOString().split("T")[0],
    rejectedReason: "",
    command: false,
  });

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = async () => {

    const data = inputField;

    await acceptOrRejectCustomerApprovalPendingSoq(data)
      .then(() => {
        setInputField({
          supplierOrderQuotationId: "",
          rejectedDate: "",
          rejectedReason: "",
          command: "",
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-innerFour">
        <div
          className="header"
          style={{
            backgroundColor: "black",
            marginLeft: "-32px",
            marginRight: "-32px",
            marginTop: "-32px",
            height: "100px",
          }}
        >
          <b style={{ color: "yellow" }}>Rejection Reason</b>
        </div>
        <table style={{ marginLeft: "10px", fontSize: "15px" }}>
          <br />
          <tr>
            <td style={{ fontSize: "25px" }}>
              <b>Supervisor:{2}</b>
            </td>
          </tr>
          <br />
          <tr>
            <td style={{ fontSize: "25px" }}>
              <b>Reference Number:{props.data.id}</b>
            </td>
          </tr>
          <br />
          <tr>
            <td style={{ fontSize: "25px" }}>
              <b>Date:{props.data.deliverableDate}</b>
            </td>
          </tr>
          <br />
          <br />
          <br />

          <tr>
            <th>
              <label for="TextInput">
                <h2 style={{ fontSize: "25px" }}>
                  <b>Rejected Reason:</b>
                </h2>
              </label>
            </th>
            <td>
              <input
                type="text"
                name="rejectedReason"
                style={{
                  height: "150px",
                  backgroundColor: "#f1f1f1",
                  position: "relative",
                  fontSize: "25px",
                }}
                onChange={inputsHandler}
              />
            </td>
          </tr>
          <br />
          <br />

          <button
            type="button"
            class="btn btn-warning"
            style={{
              height: "60px",
              width: "150px",
              position: "fixed",
              marginLeft: "190px",
              marginTop: "20px",
              fontSize: "25px",
            }}
            onClick={submitButton}
          >
            <b> Submit</b>
          </button>
        </table>
      </div>
    </div>
  ) : (
    ""
  );
}
