import React from "react";
import { useState } from "react";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState();
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

      const res = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setSuccess("Account created successfully!");
      setName("");
      setEmail("");
      setPassword("");
      useNavigate("/login");
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="reg-wrapper">
        <div className="reg-header">
          <h1 className="log-heading">
            Let's start with <br /> the basics.
          </h1>
          <p className="log-para">No pressure. Just you and your finances.</p>
        </div>
        <div className="reg-card">
          {error && <p className="msg error">{error}</p>}
          {success && <p className="msg success">{success}</p>}
          <form className="reg-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="label-input">
              YOUR NAME
            </label>
            <input
              type="text"
              id="name"
              className="user-info"
              placeholder="How should we call you"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email" className="label-input">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="user-info"
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
              className="user-info"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="reg-btn" disabled={loading}>
              <span>✦</span>
              {loading ? "Signing up" : "Create my account"}
            </button>
          </form>
        </div>
      </div>
      <p className="link-login">
        Already have an account <a href="/login">Sign In</a>
      </p>
    </div>
  );
};

export default RegisterForm;
