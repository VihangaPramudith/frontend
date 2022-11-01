import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { TbFilePhone } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

export default class SideBar extends Component {
  
  render() {
    let user = localStorage.getItem("type");

    const user1 = (
      <div>
        <HiOutlineDocumentCheck color="black" size="4em" />
        <Link to="/approved">
          <button
            type="button"
            class="btn btn-dark btn-lg"
            style={{ borderRadius: "75px", color: "yellow" }}
          >
            Approved PRs
          </button>
        </Link>
        <br />
        <br />

        <Link to="/accepted">
          <HiOutlineDocumentCheck color="black" size="4em" />
          <button
            type="button"
            class="btn btn-dark btn-lg"
            style={{ borderRadius: "75px", color: "yellow" }}
          >
            Accepted PRs
          </button>
        </Link>
        <br />
        <br />

        <Link to="/recieved">
          <HiOutlineDocumentCheck color="black" size="4em" />
          <button
            type="button"
            class="btn btn-dark btn-lg"
            style={{ borderRadius: "75px", color: "yellow" }}
          >
            Received PRs
          </button>
        </Link>
        <br />
        <br />
      </div>
    );

    const user2 = (
      <div>
      <div>
        <Link to="/pending">
          <HiOutlineDocumentCheck color="black" size="4em" />
          <button
            type="button"
            class="btn btn-dark btn-lg"
            style={{ borderRadius: "75px", color: "yellow" }}
          >
            Pending PRs
          </button>
        </Link>
        <br />
        <br />
      </div>
      <div>
      <Link to="/acceptReject">
        <HiOutlineDocumentCheck color="black" size="4em" />
        <button
          type="button"
          class="btn btn-dark btn-lg"
          style={{ borderRadius: "75px", color: "yellow" }}
        >
          Accept/Reject
        </button>
      </Link>
      <br />
      <br />
    </div>
    </div>
    );

    let currentUser = null;

    if (user === "user1") {
      currentUser = user1;
    } else {
      currentUser = user2;
    }

    return (
      <div id="sidebar">
        <div className="itemList" style={{ marginTop: "50px" }}>
          <FaHome color="black" size="4em" />
          <button
            type="button"
            class="btn btn-dark btn-lg"
            style={{ borderRadius: "75px", color: "yellow" }}
          >
            Home
          </button>
          <br />
          <br />

          <GoPerson color="black" size="4em" />
          <button
            href="/approved"
            type="button"
            class="btn btn-dark btn-lg"
            style={{ borderRadius: "75px", color: "yellow" }}
          >
            Profile
          </button>
          <br />
          <br />

          {currentUser}

          <TbFilePhone color="black" size="4em" />
          <button
            type="button"
            class="btn btn-dark btn-lg"
            style={{ borderRadius: "75px", color: "yellow" }}
          >
            Contact Us
          </button>
          <br />
          <br />

          <TbWorld color="black" size="4em" />
          <button
            type="button"
            class="btn btn-dark btn-lg"
            style={{ borderRadius: "75px", color: "yellow" }}
          >
            About Us
          </button>
          <br />
          <br />

          <Link to="/login">
            <FiLogOut color="black" size="4em" />
            <button
              type="button"
              class="btn btn-dark btn-lg"
              style={{ borderRadius: "75px", color: "yellow" }}
              onClick={() => {
                localStorage.removeItem("type");
              }}
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
