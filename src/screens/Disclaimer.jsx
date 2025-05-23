import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import "./Disclaimer.css"; // Optional: add custom styling here

const Disclaimer = () => {
    const navigate = useNavigate()

  const handleAgree = () => {
    navigate('/')
  };

  return (
   
    <div className="container-fluid">
        <Navbar />
    <div className="disclaimer-container">
      <h1>Disclaimer</h1>
      <p className="text-start">
        This brain tumor detection app is intended for informational and educational purposes only.
        It does not provide a medical diagnosis and is not a substitute for a professional medical
        opinion, diagnosis, or treatment. The results should not be used to independently assess,
        diagnose, or make decisions about your health.
      </p>
      <p className="text-start">
        Always seek the advice of your physician or other qualified health provider with any questions
        you may have regarding a medical condition. Never disregard professional medical advice or delay
        in seeking it because of information provided by this app.
      </p>
      <p className="text-start">
        By proceeding, you acknowledge that you understand and agree to the limitations of this app and
        will not use it as a sole source of medical information.
      </p>
      <button onClick={handleAgree} className="agree-button">
        I Agree
      </button>
    </div>
    </div>
  );
};

export default Disclaimer;
