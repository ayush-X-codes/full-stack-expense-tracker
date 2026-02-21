import React from "react";
import "./Transactions.css";
import { useState } from "react";
import { useEffect } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(null);
  const [totalExpensne, setTotalExpensne] = useState(null);
  const [totalBalance, setTotalBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
    fetchOveriew();
  }, []);

  const fetchTransactions = async () => {
    console.log("useEffect runs");
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/v1/transactions");
      const data = await res.json();
      console.log("transactions are: ", data);

      console.log("request method: ", res.status);

      if (!res.ok) {
        return setError(data.error || "failed to load transactions");
      }

      setTransactions(data.transactions);
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchOveriew = async () => {
    console.log("useEffect runs");
    try {
      setError("");

      const res = await fetch("/api/v1/dashboard/summary");
      const data = await res.json();
      console.log("dashboard overview: ", data);

      console.log("request method: ", res.status);

      if (!res.ok) {
        return setError(data.error || "failed to load transactions");
      }

      setTotalIncome(data.data.totlaInocme);
      setTotalExpensne(data.data.totalExpesnes);
      setTotalBalance(data.data.balance);
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

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
          <p className="tra-balance-amount">${totalBalance}</p>
          <p className="tra-balance-label">This month</p>
        </div>

        <div className="tra-grid">
          <div className="tra-grid-col">
            <h2 className="tra-heading-income">📈 Money In </h2>
            <p className="tra-income-amount">+${totalIncome}</p>
            <p className="tra-income-label">This month</p>
          </div>

          <div className="tra-grid-col">
            <h2 className="tra-heading-expense"> 📉 Money Out</h2>
            <p className="tra-expense-amount">-${totalExpensne}</p>
            <p className="tra-expense-label">This month</p>
          </div>
        </div>

        <div className="tra-filter">
          <div className="search-box">
            <input
              type="search"
              placeholder="Search transactions..."
              className="tra-search-box"
            />
          </div>
          <div className="tra-dropdown-filter">
            <div>
              <label>Date</label>
              <select name="byMonth" id="month-filter">
                <option value="month"></option>
              </select>
            </div>
            <div>
              <label>Type</label>
              <select name="type" id="type-filter">
                <option value="type"></option>
              </select>
            </div>
            <div>
              <label>Category</label>
              <select name="category" id="category-filter">
                <option value="category"></option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3>Transactions</h3>
          {transactions.length === 0 ? (
            <div className="tra-empty">
              <p>No transactions yet</p>
              <p className="tra-empty-sub">
                Add your first transaction to get started
              </p>
              <button className="tra-add-btn">+ Add transaction</button>
            </div>
          ) : (
            transactions.map((transaction) => (
              <div className="tra-card" key={transaction.id}>
                <div className="tra-card-top">
                  <span className="tra-card-description">
                    {transaction.description}
                  </span>
                  <span className="tra-card-amount">{transaction.amount}</span>
                </div>
                <div className="tra-card-bottom">
                  <span className="tra-card-meta">
                    {transaction.category_name} ·{" "}
                    {transaction.date.split("T")[0]}
                  </span>
                  <span className="tra-card-type">{transaction.type}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Transactions;
