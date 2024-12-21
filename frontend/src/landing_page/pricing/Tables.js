import React from "react";

function Table (){
    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
               
                <div className="col-8">
                <div className="mt-5 mb-4">
                    <h4>Charges for account opening</h4>
                </div>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Type of account</th>
      <th scope="col"></th>
      <th scope="col">Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Online account</td>
      <td></td>
      <td style={{ textAlign:"center",color:"white" , backgroundColor:"Green"}}>Free</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Offline account</td>
      <td></td>
      <td style={{textAlign:"center",color:"white" , backgroundColor:"Green"}}>Free</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>NRI account (offline only)</td>
      <td></td>
      <td style={{ textAlign:"center"}}>₹ 500</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
      <td></td>
      <td style={{ textAlign:"center"}}>₹ 500</td>
    </tr>
  </tbody>
</table>

                </div>
            </div>
            <div className="row">
                <div className="col-2 "></div>
               
                <div className="col-8 mb-5">
                <div className="mt-5 mb-4">
                    <h4>Charges for optional value added services</h4>
                </div>
                <table class="table">
  <thead>
    <tr>
    <th scope="col"></th>
      <th scope="col">Service</th>
      <th scope="col">Billing Frquency</th>
      <th scope="col">	Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row"></th>
      <td>Tickertape</td>
      <td>Monthly / Annual</td>
      <td>Free: 0 | Pro: 249/2399</td>
    </tr>
    <tr>
    <th scope="row"></th>
      <td>Smallcase</td>
      <td>Per transaction</td>
      <td>Buy & Invest More: 100 | SIP: 10</td>
    </tr>
    <tr>
    <th scope="row"></th>
      <td>Kite Connect</td>
      <td>Monthly</td>
      <td>Connect: 2000 | Historical: 2000</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    );
}
export default Table;