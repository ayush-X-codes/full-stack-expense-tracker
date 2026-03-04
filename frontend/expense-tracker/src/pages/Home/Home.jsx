import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-wrapper">
        <div className="greeting-home">
          <div className="greeting-text">
            <div className="greeting-user">Good morning.</div>
            <div className="name">David</div>
          </div>
          <div className="avatar-circle">👱</div>
        </div>

        <div className="card-transaction">
          <span className="balance-label">NET THIS MONTH</span>
          <div className="card-summary">
            <div className="card-total">$4,808</div>
            <div className="chart">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                style={{ marginTop: "4px" }}
              >
                <circle
                  cx="32"
                  cy="32"
                  r="24"
                  fill="none"
                  stroke="#F0ECE6"
                  strokeWidth="8"
                />

                <circle
                  cx="32"
                  cy="32"
                  r="24"
                  fill="none"
                  stroke="#7BAF8E"
                  strokeWidth="8"
                  strokeDasharray="88 63"
                  strokeDashoffset="38"
                  strokeLinecap="round"
                  transform="rotate(-90 32 32)"
                />

                <circle
                  cx="32"
                  cy="32"
                  r="24"
                  fill="none"
                  stroke="#E8B4A8"
                  strokeWidth="8"
                  strokeDasharray="39 112"
                  strokeDashoffset="-50"
                  strokeLinecap="round"
                  transform="rotate(-90 32 32)"
                />
              </svg>
            </div>
          </div>

          <div className="balance-row">
            <div className="balance-item">
              <div className="label">Income</div>
              <div className="positive value">$8,429</div>
            </div>
            <div className="balance-item">
              <div className="label">Spent</div>
              <div className="negative value">$3,621</div>
            </div>
          </div>
        </div>

        <div className="section-title">
          <span className="title-item item-one">Recent</span>
          <span className="title-item item-two">See all</span>
        </div>

        <div className="card-item-grid">
          <div className="card-item">
            <div className="icon food">☕</div>
            <div className="description">
              <p className="desc-item">Morning coffe</p>
              <span className="desc-type">Today · Food & Coffe</span>
            </div>
            <div className="amount amount-negative">-$12</div>
          </div>

          <div className="card-item">
            <div className="icon work">💰</div>
            <div className="description">
              <p className="desc-item">Salary deposit</p>
              <span className="desc-type">Mar 1 · Income</span>
            </div>
            <div className="amount amount-positive">+$6,800</div>
          </div>

          <div className="card-item last-card-item">
            <div className="icon shop">🛍</div>
            <div className="description">
              <p className="desc-item">Weekend shopping</p>
              <span className="desc-type">Feb 28 · Shopping</span>
            </div>
            <div className="amount amount-negative">-$84</div>
          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default Home;
