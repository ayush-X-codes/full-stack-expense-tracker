import { pool } from "../config/db.js";

async function addTransactionToDB(
  userId,
  amount,
  description,
  date,
  type,
  categoryId,
) {
  const query = `
    INSERT INTO transactions (user_id , amount , description, date, type, category_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    `;

  await pool.query(query, [
    userId,
    amount,
    description,
    date,
    type,
    categoryId,
  ]);
}

async function getUserTransactions(userId) {
  const query = `
    SELECT t.id, t.amount, t.description, t.date, c.name AS category_name, c.type FROM transactions t
    INNER JOIN categories c ON t.category_id = c.id
    WHERE t.user_id = $1
    ORDER BY t.created_at DESC
    `;

  const result = await pool.query(query, [userId]);
  return result.rows;
}

async function findTransactionById(id, userId) {
  const query = `
   SELECT amount, description, date FROM transactions
   WHERE id = $1 AND user_id = $2
    `;

  const result = await pool.query(query, [id, userId]);
  return result.rows[0];
}

async function removeUserTransactions(id, userId) {
  const query = `
   DELETE FROM transactions
   WHERE id = $1 AND user_id = $2
    `;

  pool.query(query, [id, userId]);
}
export {
  addTransactionToDB,
  getUserTransactions,
  findTransactionById,
  removeUserTransactions,
};
