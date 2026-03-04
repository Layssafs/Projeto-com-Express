const repository = require("./userRepository");

async function createUser(req, res) {
  const { name, email } = req.body;

  const created = await repository.saveUser({
    name,
    email,
  });

  return res.status(201).json(created);
}

async function listUsers(req, res) {
  const users = await repository.fetchUsers();
  return res.json(users);
}

async function getUser(req, res) {
  const { id } = req.params;

  const user = await repository.fetchUserById(id);

  if (!user) {
    return res
      .status(404)
      .json({ error: "Usuário não localizado" });
  }

  return res.json(user);
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;

  const updated = await repository.changeUser(id, {
    name,
    email,
  });

  return res.json(updated);
}

async function deleteUser(req, res) {
  const { id } = req.params;

  await repository.removeUserById(id);
  return res.status(204).send();
}

module.exports = {
  createUser,
  listUsers,
  getUser,
  updateUser,
  deleteUser,
};