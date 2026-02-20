import React from "react";
import "./Transactions.css";
const Transactions = () => {
  return (
    <div className="tra-wrapper">
      <header className="tra-header">
        <nav className="tra-nav">
          <div>☰</div>
          <span>Transactions</span>
          <div>🔔</div>
        </nav>
        <p className="tra-date">Feb 20, 2026</p>
      </header>
      <main className="tra-main">
        <div className="tra-balance">
          <h2 className="tra-heading-balance">💰 Total Balance</h2>
          <p className="tra-balance-amount">$4,555.01</p>
          <p className="tra-balance-label">This month</p>
        </div>

        <div className="tra-grid">
          <div className="tra-grid-col">
            <h2 className="tra-heading-income">📈 Money In </h2>
            <p className="tra-income-amount">$4,700.00</p>
            <p className="tra-income-label">This month</p>
          </div>

          <div className="tra-grid-col">
            <h2 className="tra-heading-expense"> 📉 Money Out</h2>
            <p className="tra-expense-amount">-$144.99</p>
            <p className="tra-expense-label">This month</p>
          </div>
        </div>

        <div className="tra-filter">
          <div className="search-box">
            <input type="search" placeholder="Search transactions..." className="tra-search-box"/>
          </div>
          <div className="tra-dropdown-filter">
            <label htmlFor="">Date</label>
            <select name="" id="">
              <option value=""></option>
            </select>
            <label htmlFor="">Type</label>
            <select name="" id="">
              <option value=""></option>
            </select>
            <label htmlFor="">Category</label>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transactions;
