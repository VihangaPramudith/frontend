import React, { useState } from "react";
import { acceptCustomerApprovedPurchaseRequisition } from "../services/Procurement_Construction_Site_Management";

function Popup(props) {
  console.log(props);

  const [inputField, setInputField] = useState({
    supplierId: props.supplierId,
    orderItemId: props.orderItemId,
    quantity: "",
    unitPrice: "",
    brand: "",
    dateCanDeliver: "",
  });

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = async () => {
    console.log(inputField);

    const data = inputField;

    await acceptCustomerApprovedPurchaseRequisition(data)
      .then(() => {
        setInputField({
          quantity: "",
          unitPrice: "",
          brand: "",
          dateCanDeliver: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(inputField);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <table style={{ marginLeft: "10px" }}>
          <br />
          <tr>
            <th>
              <label for="TextInput">
                <h2>
                  <b>Quantity:</b>
                </h2>
              </label>
            </th>
            <td>
              <input
                type="text"
                name="quantity"
                onChange={inputsHandler}
                value={inputField.quantity}
                style={{
                  height: "50px",
                  width: "200px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "100px",
                  marginLeft: "100px",
                  position: "relative",
                  fontSize: "25px",
                  paddingLeft: "10px",
                }}
              />
            </td>
          </tr>
          <br />
          <br />

          <tr>
            <th>
              <label for="TextInput">
                <h2>
                  <b>Unit Price:</b>
                </h2>
              </label>
            </th>
            <td>
              <input
                type="text"
                name="unitPrice"
                onChange={inputsHandler}
                value={inputField.unitPrice}
                style={{
                  height: "50px",
                  width: "200px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "100px",
                  marginLeft: "100px",
                  position: "relative",
                  fontSize: "25px",
                }}
              />
            </td>
          </tr>
          <br />
          <br />

          <tr>
            <th>
              <label for="TextInput">
                <h2>
                  <b>Brand:</b>
                </h2>
              </label>
            </th>
            <td>
              <input
                type="text"
                name="brand"
                onChange={inputsHandler}
                value={inputField.brand}
                style={{
                  height: "50px",
                  width: "200px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "100px",
                  marginLeft: "100px",
                  position: "relative",
                  fontSize: "25px",
                }}
              />
            </td>
          </tr>
          <br />
          <br />

          <tr>
            <th>
              <label for="TextInput">
                <h2>
                  <b>Date can deliver:</b>
                </h2>
              </label>
            </th>
            <td>
              <input
                type="date"
                name="dateCanDeliver"
                onChange={inputsHandler}
                value={inputField.dateCanDeliver}
                style={{
                  height: "50px",
                  width: "200px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "100px",
                  marginLeft: "100px",
                  position: "relative",
                  fontSize: "25px",
                }}
              />
            </td>
          </tr>
          <br />
          <button
            type="button"
            class="btn btn-warning"
            onClick={submitButton}
            style={{
              height: "60px",
              width: "150px",
              position: "fixed",
              borderRadius: "75px",
              marginLeft: "190px",
              marginTop: "-10px",
              fontSize: "25px",
            }}
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

export default Popup;
