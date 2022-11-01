import React from 'react'
import { useState } from 'react';
import OrderPop from "./OrderPop";


export default function PurchaseRequisition(props) {

    const [popup, setPopup] = useState(false)

  return (
    <div className="requisitions">
                <div
                  className="shape"
                  key={props.data.id}
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
                        {props.number + 1}.&nbsp;<span className="dot"></span>&nbsp;
                        Reference No:
                      </th>
                      <td>{props.data.id}</td>
                      <th>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Delivery Date:
                      </th>
                      <td>{props.data.deliverableDate}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Item :</th>
                      <td>{props.data.order.orderName}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Quantity :</th>
                      <td>{props.data.deliverableAmount}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Item Price :</th>
                      <td>{props.data.pricePerUnit}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Total Price :</th>
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
                        onClick={() => setPopup(true)}
                      >
                        <b>View Order</b>
                      </button>
                    </tr>
                    <OrderPop trigger={popup} data={props.data}/>
                  </table>
                </div>
            </div>
  )
}
