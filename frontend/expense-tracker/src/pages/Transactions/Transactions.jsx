import React from "react";
import "./Transactions.css";
import { MoveLeft } from "lucide-react";

const Transactions = () => {
  return (
    <div className="add" id="add">
      <div className="wrapper-transaction">
        <div className="entry">
          <div className="backword-arrow">
            ←
          </div>
          <span className="entry-heading">New Entery</span>
        </div>

        <div className="form">
          <div className="amount-box">

            <label htmlFor="amount" className="amount-label">AMOUNT</label>
            <div className="amount-input-box">
              <span className="amount-text">$</span>
              <input type="number" className="amount-input" value={24} step={0.01} min={0} />
              <span className="amount-text">.00</span>
            </div>
            <div className="amount-category">
              <div className="amount-exp amount-cate-item">- Expense</div>
              <div className="amount-inc amount-cate-item">+ Income</div>
            </div>
          </div>

          <label htmlFor="name" className="name-label label">NAME</label>
          <input
            type="text"
            value={"Morning coffee"}
            placeholder="e.g. Morning coffee"
            className="name-input user-input"
          />


          <label htmlFor="categories" className="label">CATEGORY</label>
          <select className="user-input">
            <option value="food">☕ Food & Drink</option>
            <option value="shop">🛍️ Shopping</option>
            <option value="travel">🚇 Travel</option>
            <option value="home">🏠 Home</option>
            <option value="coffee">💊 Health</option>
            <option value="coffee">🎬 Entertainment</option>
            <option value="coffee">📦 Other</option>
          </select>

          <label htmlFor="date" className="label">DATE</label>
          <input type="date" placeholder="05-03-2026" className="date-input user-input" />


          <label htmlFor="feeling" className="label">HOW DID THIS FEEL</label>
          <div className="user-mood">
            <div className="mood-item mood-item-one">
              😌
              <span>Calm</span>
            </div>
            <div className="mood-item">
              😅
              <span>Guilty</span>
            </div>
            <div className="mood-item">
              😊
              <span>Happy</span>
            </div>
            <div className="mood-item">
              😐
              <span>Neutral</span>
            </div>
          </div>

          <label htmlFor="reflect" className="label">YOUR REFLECTION (optional)</label>
          <textarea className="user-input reflect-input" placeholder="How did this feel? Any patterns you notice?"></textarea>
          <p className="reflect-para">Patterns emerge when you reflect honestly</p>
        </div>


      </div>
        <div className="footer-btn">
          <button className="btn-add"><span>✦</span>Add transaction</button>
        </div>
    </div>
  );
};

export default Transactions;

// a complete guide from  inspiration to building design and which tools to use and how to use cluade for any website design
