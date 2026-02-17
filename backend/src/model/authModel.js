import { pool } from "../config/db.js";

async function findUserByEmail(email) {
  const query = `
    SELECT * FROM users
    WHERE email = $1
    `;

  const result = await pool.query(query, [email]);
  return result.rows[0];
}

async function findUserByUsername(username) {
  const query = `
    SELECT * FROM users
    WHERE username = $1
    `;

  const result = await pool.query(query, [username]);
  return result.rows[0];
}

async function createNewUser(username, email, hashPassword) {
  const query = `
    INSERT INTO users (username , email , password_hash)
    VALUES ($1, $2, $3)
    `;

  await pool.query(query, [username, email, hashPassword]);
}

async function getRegisterUser(email) {
  const query = `
    SELECT * FROM users
    WHERE email = $1
    `;

  const result = await pool.query(query, [email]);
  return result.rows[0];
}

export { findUserByEmail, findUserByUsername, createNewUser, getRegisterUser };
