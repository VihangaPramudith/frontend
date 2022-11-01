import React, { Component } from "react";
import { getAllCustomerApprovedPurchaseRequisitions } from "../services/Procurement_Construction_Site_Management";
import Requisitions from "./Requisitions";

export default class RecievedPRs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requisitions: [],
      popup: false,
    };
  }

  componentDidMount() {
    this.retrieveRequisitions();
  }

  async retrieveRequisitions() {

    await getAllCustomerApprovedPurchaseRequisitions()
      .then((res) => {
        this.setState({ requisitions: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async filterData(topics, searchKey) {}

  handleSearchArea = async (e) => {};

  render() {
    return (
      <React.Fragment>
        <Requisitions data={this.state.requisitions}/>
      </React.Fragment>
    );
  }
}
