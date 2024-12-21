import React from "react";

function Charges (){
    return (
        <div>
           <div className="row ">
    
    
    <div className="col-2"></div>
    <div className="col-4">
    <div className="mt-3 mb-5">  <h2 className="fs-4">Charges explained</h2></div>
     <h6 className="H6Class">Securities/Commodities transaction tax</h6> 
     <p className="PClass">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
    <p className="PClass">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
    <h6 className="H6Class">Transaction/Turnover Charges</h6>
    <p className="PClass">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
    <p className="PClass">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
    <p className="PClass">BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
    <p className="PClass">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
     
     <h6 className="H6Class">NRI brokerage charges</h6>
     <p className="PClass">
      <ul>
        <li>₹100 per order for futures and options.</li>
        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
      </ul>
     </p>





    </div>
    <div className="col-4">
    <div className="mt-3 mb-5">  <h2>.</h2></div>
    <h6 className="H6Class">GST</h6> 
     <p className="PClass">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges).</p>
    <h6 className="H6Class">SEBI Charges</h6>
    <p className="PClass">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
   <h6 className="H6Class">DP (Depository participant) charges</h6>
   <p className="PClass">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
   <p className="PClass">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
   <p className="PClass">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
   <h6 className="H6Class">Pledging charges</h6>
   <p className="PClass">₹30 + GST per pledge request per ISIN.</p>
   <h6 className="H6Class">AMC (Account maintenance charges)</h6>
   <p className="PClass">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
   <p className="PClass">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>
   <h6 className="H6Class">Corporate action order charges</h6>
   <p className="PClass">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
    </div>
  </div>
  <div className="row">
 <div className="col-2"></div>
  <div className="col-8 " >
    <h6 className="H6Class" >Disclaimer</h6>
    <p className="PClass">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
  </div>
  </div>
        </div>
    );
}
export default Charges;