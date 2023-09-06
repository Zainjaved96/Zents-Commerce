import React from "react";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";

const ThankYou = () => {
  return (
    <>
      <Header />
      <div className="container" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-lg-6 py-3">
            <h2>Thank you For Reaching out</h2>
            <p>We will connect with you shortly.</p>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ThankYou;
