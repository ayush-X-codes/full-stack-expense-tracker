import React from "react";
import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

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
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="log-wrapper">
      <div className="log-card">
        <h1 className="log-heading">Log In</h1>
        {error && <p className="msg error">{error}</p>}
        {success && <p className="msg success">{success}</p>}
        <form className="log-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="log-user-info"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="password"
            className="log-user-info"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="log-btn" disabled={loading}>
            {loading ? "Loggin in" : "Log in"}
          </button>
        </form>
        <p className="link-reg">
          Don't have an account <a href="/login">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
