import React from "react";
import image4 from "../images/image4.png";
import { acceptCustomerAcceptedPurchaseRequisition } from "../../src/services/Procurement_Construction_Site_Management";

export default function ApprovedPop(props) {
  console.log(props);

  const submitButton = async () => {
    await acceptCustomerAcceptedPurchaseRequisition(props.data.id)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-innertwo">
        <img src={image4} alt="bug" height={400} width={580} />
          <button
            type="button"
            class="btn btn-danger"
            onClick={submitButton}
            style={{
              height: "60px",
              width: "150px",
              position: "fixed",
              borderRadius: "75px",
              marginLeft: "220px",
              marginTop: "50px",
              fontSize: "25px",
            }}
          >
            <b>OK</b>
          </button>
      </div>
    </div>
  ) : (
    ""
  );
}
