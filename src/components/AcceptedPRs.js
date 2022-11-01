import React, { Component } from 'react'
import { getAllCustomerAndSupplierAcceptedPurchaseRequisitions } from "../services/Procurement_Construction_Site_Management";


export default class AcceptedPRs extends Component {
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

    let supplierId;

    let user = localStorage.getItem("type");

    if (user === "user1") {
      supplierId = 2;
    }else {
      supplierId = 1;
    }

    console.log(supplierId);

    getAllCustomerAndSupplierAcceptedPurchaseRequisitions(supplierId).then((res) => {
      this.setState({
        requisitions: res.data
      })
      console.log(this.state);
    }).catch((err) => {
      console.log(err);
    })
  }

  async filterData(topics, searchKey) {}

  handleSearchArea = async (e) => {};

  render() {

    return (
      <React.Fragment>
        <div
          className="container"
          style={{ marginTop: "30px", color: "black" }}
        >
          <h2 style={{ color: "black", marginLeft: "400px" }}>
            <b>Approved Purchase Requisitions</b>
          </h2>

          <div
            className="search"
            style={{ float: "right", marginRight: "-100px" }}
          >
            <input
              style={{
                width: "300px",
                marginTop: "-42px",
                borderRadius: "100px",
                borderColor: "yellow",
              }}
              className="form-control"
              type="search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
          <div className="requisitions">
            {this.state.requisitions.map((data, index) => {
              return (
                <div
                  className="shape"
                  key={index}
                  style={{
                    height: "200px",
                    width: "1300px",
                    backgroundColor: "#f1f1f1",
                    borderRadius: "100px",
                    marginLeft: "100px",
                    position: "relative",
                  }}
                >
                  <table
                    style={{
                      marginLeft: "100px",
                      marginTop: "40px",
                      fontSize: "20px",
                      borderCollapse: "separate",
                      borderSpacing: ".2em",
                    }}
                  >
                    <br/>
                    <tr>
                      <th>{index + 1}. Reference No:</th>
                      <td>{data.order.id}</td>
                    </tr>
                    <tr>
                      <th>&nbsp;&nbsp;&nbsp;&nbsp;Item :</th>{" "}
                      <td>{data.order.orderName}</td>
                    </tr>
                    <tr>
                      <th>&nbsp;&nbsp;&nbsp;&nbsp;Quantity :</th>{" "}
                      <td>{data.deliverableAmount}</td>
                    </tr>
                    <tr>
                      <th>&nbsp;&nbsp;&nbsp;&nbsp;Delivery Address :</th>{" "}
                      <td>{data.order.orderRequiredDate}</td>
                    </tr>
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{
                        height: "60px",
                        width: "180px",
                        position: "fixed",
                        marginLeft: "950px",
                        marginTop: "-140px",
                        borderRadius: "75px",
                      }}
                      onClick={() =>
                        this.setState({
                          popup: true,
                        })
                      }
                    >
                      <b>Submit Advice Note</b>
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      style={{
                        height: "60px",
                        width: "180px",
                        position: "fixed",
                        marginLeft: "950px",
                        marginTop: "-60px",
                        borderRadius: "75px",
                      }}
                      onClick={() =>
                        this.setState({
                          popup: true,
                        })
                      }
                    >
                      <b>Submit Invoice</b>
                    </button>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
