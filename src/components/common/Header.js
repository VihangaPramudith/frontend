import React, { Component } from "react";
import image3 from "../../images/image3.png";
import image5 from "../../images/image5.png";

export default class Header extends Component {
  render() {
    const user1 = (
      <div id="header">
        <div
          className="logo"
          style={{ marginLeft: "-10px", marginTop: "-3px" }}
        >
          <img src={image3} alt="bug" height={80} width={1940} />
        </div>
      </div>
    );

    const user2 = (
      <div id="header">
        <div
          className="logo"
          style={{ marginLeft: "-10px", marginTop: "-3px" }}
        >
          <img src={image5} alt="bug" height={80} width={1940} />
        </div>
      </div>
    );

    let user = localStorage.getItem("type");

    let currentUser = null;

    if (user === "user1") {
      currentUser = user1;
    } else {
      currentUser = user2;
    }


    return (
      <React.Fragment>
        {currentUser}
      </React.Fragment>
    );
  }
}
