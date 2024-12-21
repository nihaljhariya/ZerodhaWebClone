import React from "react";

function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center">
        <h1  className="mt-5" style={{color:"#424242"}}>The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img style={{width:"45%"}} src="media/images/zerodhafundhouse.png" />
          
          <p  style={{fontSize:"12px", fontWeight:"500"}} className="mt-3 text-muted">Our asset management vneture that is creating simple and transparent index funds to help you save your goals</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"50%"}} src="media/images/sensibullLogo.svg" />
          <p style={{fontSize:"12px", fontWeight:"500"}} className="mt-4 text-muted">Options trading plateform that lets you create stratergies , analyze posiotion , and examine datapoints like open intrest , FII/DII , and more</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"35%"}}  src="media/images/streakLogo.png" />
          <p style={{fontSize:"12px", fontWeight:"500"}} className="mt-3 text-muted">Systematic trading plateform that allows you to create and backtest stratergies without coding</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p  style={{fontSize:"12px", fontWeight:"500"}} className="mt-2 text-muted">Thematic investment platform that helps to invest in diversified basket of stock and ETFs</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"50%"}} className=""  src="media/images/tijori.svg" />
          <p style={{fontSize:"12px", fontWeight:"500"}} className="mt-2 text-muted">Investment research plateform that offers detailed insights on stocks,sectors,supply chains, and more</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"35%"}}  src="media/images/dittoLogo.png" />
          <p style={{fontSize:"12px", fontWeight:"500"}} className="mt-4 text-muted">Personalize advise on life and health insurance. No spam and no mis-selling</p>
        </div>
        <button
          className="p-2 btn  fs-5 mb-5"
          style={{ width: "30%", margin: "0 auto" ,color:"white" , backgroundColor:"#387ED1" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
