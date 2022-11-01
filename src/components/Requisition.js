import React from 'react'
import { useState } from 'react'
import Popup from "./Popup";


export default function Requisition(props) {

    const[popup, setPopup] = useState(false)

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
                      <td>{props.data.orderRequiredDate}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Item :</th>
                      <td>{props.data.orderName}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Quantity :</th>
                      <td>{props.data.requiredAmount}</td>
                    </tr>
                    <tr>
                      <th>&emsp;&emsp;&nbsp;Delivery Address :</th>
                      <td>{props.data.deliveryAddress}</td>
                    </tr>
                      <button
                        type="button"
                        class="btn btn-warning"
                        style={{
                          height: "60px",
                          width: "150px",
                          position: "absolute",
                          marginLeft: "1000px",
                          marginTop: "-125px",
                          borderRadius: "75px",
                        }}
                        onClick={() => setPopup(true)}
                      >
                        <b>Accept</b>
                      </button>
                    <Popup trigger={popup} data={props.data} supplierId={2} orderItemId={props.data.id}/>
                  </table>
                </div>
            </div>
  )
}
