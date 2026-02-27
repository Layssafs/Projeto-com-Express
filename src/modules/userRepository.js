const pool = require("../database/connection");

async function createUser(name, email) {
  const query = `
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING *;
  `;
  const values = [name, email];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function getAllUsers() {
  const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
  return result.rows;
}

async function getUserById(id) {
  const result = await pool.query(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0];
}

async function updateUser(id, name, email) {
  const query = `
    UPDATE users
    SET name = $1, email = $2
    WHERE id = $3
    RETURNING *;
  `;
  const result = await pool.query(query, [name, email, id]);
  return result.rows[0];
}

async function deleteUser(id) {
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};