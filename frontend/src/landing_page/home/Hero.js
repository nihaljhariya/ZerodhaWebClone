import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5" style={{color:"#424242" }}>Invest in everything</h1>
        <p style={ {color:"#424242" , fontSize:"20px" }}>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
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

export default Hero;
