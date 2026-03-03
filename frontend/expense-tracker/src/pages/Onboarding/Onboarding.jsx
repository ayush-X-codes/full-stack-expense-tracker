import React from "react";
import "./Onboarding.css";
const Onboarding = () => {
  return (
    <div id="onboarding" className="onboarding">
      <div className="wrapper-onboarding">

        <div className="floating-icons">
          <div className="flot-icon">📒</div>
          <div className="flot-icon">🌸</div>
          <div className="flot-icon">💛</div>
          <div className="flot-icon">🌙</div>
          <div className="flot-icon">🌱</div>
          <div className="flot-icon">💬</div>
        </div>


        <div className="intro">
          <h1 className="name-heading">camellia<span>.</span></h1>
          <p className="intro-para">Understand your relationship with money.</p>
        </div>

        <div className="about-sec">
          <h2 className="heading-about">Reflect. Spend with intention.</h2>
          <p className="about-para">
            A calm, guided companion for understanding where your money actually
            goes.
          </p>
        </div>

        <div className="auth-sec">
          <a href="/register"><button className="btn btn-one">I'm new here</button></a>
          <a href="/login"><button className="btn btn-two">I already have an account</button></a>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
