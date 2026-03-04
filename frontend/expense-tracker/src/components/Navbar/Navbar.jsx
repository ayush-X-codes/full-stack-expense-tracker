import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
     <nav>
          <div className="nav-home nav-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
             width={20}
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
            </svg>

            <a href="/home" className="nav-links">
              <span>Home</span>
            </a>
          </div>

          <div className="nav-insights nav-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
             width={20}
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>

            <a href="/insights" className="nav-links">
              <span>Insights</span>
            </a>
          </div>

          <div className="nav-add nav-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
             width={20}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>

            <a href="add" className="nav-links">
              <span className="nav-links">Add</span>
            </a>
          </div>

          <div className="nav-budget nav-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
             width={20}
            >
              <rect x="2" y="3" width="20" height="14" rx="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>

            <a href="/budget" className="nav-links">
              <span>Budget</span>
            </a>
          </div>

          <div className="nav-profile nav-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
             width={20}
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>

            <a href="/profile" className="nav-links">
              <span>Profile</span>
            </a>
          </div>
        </nav>
  )
}

export default Navbar
