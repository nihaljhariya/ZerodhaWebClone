import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2" style={{color:"#424242" }}>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div> 
        <div className="col-2"></div>
        <div className="col-6  mb-5">
          <div className="row text-center">
          <div className="col p-3 ">
              <h1 className="mb-3" style={ {color:"#FFD700" ,fontSize:"50px" }}>₹0</h1>
              <p style={{fontSize:"12px" }}>
              Free account
              opening
              </p>
            </div>
            <div className="col p-3 ">
              <h1 className="mb-3" style={ {color:"#FFD700" ,fontSize:"50px" }}>₹0</h1>
              <p style={{fontSize:"12px" }}>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-3 ">
              <h1 className="mb-3" style={ {color:"#FFD700" ,fontSize:"50px" }}>₹20</h1>
              <p style={{fontSize:"12px" }}>Intraday and F&O</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
