import React, { Component } from "react";
import ApprovedPop from "./ApprovedPop";
import { getAllCustomerApprovedPRs } from "../../src/services/Procurement_Construction_Site_Management";

export default class ApprovedPRs extends Component {
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
    await getAllCustomerApprovedPRs(supplierId).then((res) => {
      this.setState({
        requisitions: res.data
      })
    }).catch((err) => {
      console.log(err);
    })


  }

  // async onSubmit(id) {

  //   this.setState({
  //     popup: true,
  //   })

  //   await acceptCustomerAcceptedPurchaseRequisition(id).then(() => {
  //   }).catch((err) => console.log(err));
  // };

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
                        Delivery Date:
                      </th>
                      <td>{data.order.orderRequiredDate}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Item :</th>
                      <td>{data.order.orderName}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Quantity :</th>
                      <td>{data.order.requiredAmount}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Delivery Address :</th>
                      <td>{data.order.deliveryAddress}</td>
                    </tr>
                    <tr>
                      <button
                        type="button"
                        class="btn btn-warning"
                        style={{
                          height: "60px",
                          width: "150px",
                          position: "fixed",
                          marginLeft: "1000px",
                          marginTop: "-125px",
                          borderRadius: "75px",
                        }}
                        //onClick={() => this.onSubmit(data.id)}
                        onClick = {() => {
                          this.setState({
                            popup: true,
                          })
                        }}
                      >
                        <b>Accept</b>
                      </button>
                    </tr>
                    <ApprovedPop trigger={this.state.popup} data={data} />
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
