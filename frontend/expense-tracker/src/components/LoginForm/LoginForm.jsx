import React from "react";
import { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (loading) return;

      setLoading(true);
      setError("");
      setSuccess("");

      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setSuccess("Login successfully!");
      setEmail("");
      setPassword("");
      navigate("/transactions");
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="log-wrapper">
        <div className="header">
          <div className="logo">🌸</div>
          <span className="logo-name">camellia.</span>
          <span className="header-greet">Welcome back</span>
        </div>

        <div className="start-login">
          <h2 className="login-greet">
            Good to see
            <br />
            you again.
          </h2>
          <span className="login-text">Sign in to continue your journey.</span>
        </div>

        <div className="log-card">
          {error && <p className="msg error">{error}</p>}
          {success && <p className="msg success">{success}</p>}
          <form className="log-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="label-input">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="log-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="name" className="label-input">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="log-input"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="log-btn" disabled={loading}>
              <span>✦</span>
              {loading ? "Loggin in" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
      <div className="link-reg">
        New here? <a href="/register">Create a account</a>
      </div>
    </div>
  );
};

export default LoginForm;
