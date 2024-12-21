import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import Charges from "./ChargesExp";
import Table from "./Tables"

function PricingPage() {
  return (
    <>
      <Hero />
      <OpenAccount />
      <Brokerage />
      <Charges/>
      <Table/>
    </>
  );
}

export default PricingPage;
