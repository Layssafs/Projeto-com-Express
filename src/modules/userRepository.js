const db = require("../database/connection");

async function saveUser(data) {
  const sql = `
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING id, name, email
  `;
  const result = await db.query(sql, [
    data.name,
    data.email,
  ]);
  return result.rows[0];
}

async function fetchUsers() {
  const result = await db.query(
    "SELECT id, name, email FROM users ORDER BY id"
  );
  return result.rows;
}

async function fetchUserById(userId) {
  const result = await db.query(
    "SELECT id, name, email FROM users WHERE id = $1",
    [userId]
  );
  return result.rows[0];
}

async function changeUser(userId, data) {
  const sql = `
    UPDATE users
    SET name = $1, email = $2
    WHERE id = $3
    RETURNING id, name, email
  `;
  const result = await db.query(sql, [
    data.name,
    data.email,
    userId,
  ]);
  return result.rows[0];
}

async function removeUserById(userId) {
  await db.query(
    "DELETE FROM users WHERE id = $1",
    [userId]
  );
}

module.exports = {
  saveUser,
  fetchUsers,
  fetchUserById,
  changeUser,
  removeUserById,
};