import { pool } from "../config/db.js";


async function getMonthlyTransactions(userId, month, year) {
  const query = `
    SELECT t.id, t.amount, t.description, t.date, c.name AS category_name, t.type FROM transactions t
    INNER JOIN categories c ON t.category_id = c.id
    WHERE t.user_id = $1 AND EXTRACT(MONTH FROM date) = $2
    AND EXTRACT(YEAR FROM date) = $3
    ORDER BY t.created_at DESC
    `;

  const result = await pool.query(query, [userId, month, year]);
  return result.rows;
}


export {getMonthlyTransactions}