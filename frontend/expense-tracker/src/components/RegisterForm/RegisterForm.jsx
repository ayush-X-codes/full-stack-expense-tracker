import React from "react";
import { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [name, setName] = useState();
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
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reg-wrapper">
      <div className="reg-card">
        <h1 className="reg-heading">Sign Up</h1>
        {error && <p className="msg error">{error}</p>}
        {success && <p className="msg success">{success}</p>}
        <form className="reg-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="user-info"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="user-info"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="password"
            className="user-info"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="reg-btn" disabled={loading}>
            {loading ? "Signing up" : "Sign up"}
          </button>
        </form>
        <p className="link-login">
          Already have an account <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
