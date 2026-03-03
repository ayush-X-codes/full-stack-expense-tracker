import React from "react";
import "./Home.css";

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
          <span>Net this month</span>
          <div className="card-chart">
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
              <div className="positive">$8,429</div>
            </div>
            <div className="balance-item">
              <div className="label">Spent</div>
              <div className="positive">$3,621</div>
            </div>
          </div>
        </div>

        <div className="section-title">
          <span>Recent</span>
          <span>See all</span>
        </div>

        <div className="card-item">
          <div className="icon">☕</div>
          <div className="description">
            <p>Morning coffe</p>
            <span>Today</span>- <span>Food & Coffe</span>
          </div>
          <div>-$12</div>
        </div>

        <div className="card-item">
          <div className="icon">💰</div>
          <div className="description">
            <p>Salary deposit</p>
            <span>Mar 1</span>·<span>Income</span>
          </div>
          <div>+$6,800</div>
        </div>

        <div className="card-item">
          <div className="icon">🛍</div>
          <div className="description">
            <p>Weekend shopping</p>
            <span>Feb 28</span> · <span>Shopping</span>
          </div>
          <div>-$84</div>
        </div>

        <nav>
          <div className="nav-home">
            <div className="nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <span>Home</span>
          </div>

          <div className="nav-insights">
            <div className="nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <span>Insights</span>
          </div>

          <div className="nav-add">
            <div className="nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <span>Add</span>
          </div>

          <div className="nav-budget">
            <div className="nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <span>Budget</span>
          </div>

          <div className="nav-profile">
            <div className="nav-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <span>Profile</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
