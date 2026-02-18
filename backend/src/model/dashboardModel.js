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

async function getFilteredTransaction(userId, filters) {
  let query = "SELECT * FROM transactions WHERE user_id = $1";
  let params = [userId];

  if (filters.firstDate && filters.lastDate) {
    query += " AND date BETWEEN $2 AND $3";
    params.push(filters.firstDate, filters.lastDate);

    if (filters.category) {
      query += ` AND category_id = $${params.length + 1}`;
      params.push(filters.category_id);
    }

    if (filters.type) {
      query += ` AND type = $${params.length + 1}`;
      params.push(filters.type);
    }

    query += " ORDER BY date DESC";

    const result = await pool.query(query, params);

    return result.rows;
  }
}

export { getMonthlyTransactions, getFilteredTransaction };
