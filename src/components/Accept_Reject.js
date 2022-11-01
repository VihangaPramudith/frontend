import React, { Component } from "react";
import { getAllCustomerApprovalPendingSoq } from "../services/Procurement_Construction_Site_Management";
import PurchaseRequisitions from "./PurchaseRequisitions";

const employeeUserId = 2;


export default class Accept_Reject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requisitions: [],
      quantity: 0,
      popup: false,
    };
  }

  componentDidMount() {
    this.retrieveRequisitions();
  }

  async retrieveRequisitions() {

    await getAllCustomerApprovalPendingSoq(employeeUserId).then((res) => {
      this.setState({
        ...this.state,
        requisitions: res.data
      })
    }).catch((err) => {
      console.log(err);
    })

  }

  async filterData(topics, searchKey) {}

  handleSearchArea = async (e) => {};

  render() {
    return (
      <div>
        <PurchaseRequisitions data={this.state.requisitions}/>
      </div>
    );
  }
}
