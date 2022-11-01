import React, { Component } from "react";
import OrderPop from "./OrderPop";
import { getAllCustomerApprovalPendingSoq } from "../services/Procurement_Construction_Site_Management";

const employeeUserId = 2;


export default class PendingPRs extends Component {
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
      <React.Fragment>
        <div
          className="container"
          style={{ marginTop: "30px", color: "black" }}
        >
          <h2 style={{ color: "black", marginLeft: "500px" }}>
            <b>Pending Purchase Requisitions</b>
          </h2>

          <div className="requisitions">
            {this.state.requisitions.map((data, index) => {
              return (
                <div
                  className="shape"
                  key={index}
                  style={{
                    height: "250px",
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
                      fontSize: "25px",
                      borderCollapse: "separate",
                      borderSpacing: ".4em",
                    }}
                  >
                    <tr>
                      <th>
                        {index + 1}.&nbsp;<span className="dot"></span>&nbsp;
                        Reference No:
                      </th>
                      <td>{data.id}</td>
                      <th>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Delivery Date:
                      </th>
                      <td>{data.deliverableDate}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Item :</th>
                      <td>{data.order.orderName}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Quantity :</th>
                      <td>{data.deliverableAmount}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Item Price :</th>
                      <td>{data.pricePerUnit}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Total Price :</th>
                      <td></td>
                    </tr>
                    <tr>
                      <button
                        type="button"
                        class="btn btn-warning"
                        style={{
                          height: "60px",
                          width: "150px",
                          position: "absolute",
                          marginLeft: "950px",
                          marginTop: "-125px",
                          borderRadius: "75px",
                        }}
                      >
                        <b style={{fontSize:"25px"}}>View</b>
                      </button>
                    </tr>
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
