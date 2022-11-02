import React from "react";
import image4 from "../images/image4.png";
import { Link } from "react-router-dom";

export default function ApprovedPop(props) {
  console.log(props);
  return props.trigger ? (
    <div className="popup">
      <div className="popup-innertwo">
        <img src={image4} alt="bug" height={400} width={580} />
        <Link to="/profile">
          <button
            type="button"
            class="btn btn-danger"
            style={{
              height: "60px",
              width: "150px",
              position: "fixed",
              borderRadius: "75px",
              marginLeft: "220px",
              marginTop: "50px",
              fontSize: "25px",
            }}
            onClick={window.location.reload()}
          >
            <b>OK</b>
          </button>
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
}
