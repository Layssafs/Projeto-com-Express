const repository = require("./userRepository");

async function create(req, res) {
  const { name, email } = req.body;
  const user = await repository.createUser(name, email);
  res.status(201).json(user);
}

async function list(req, res) {
  const users = await repository.getAllUsers();
  res.json(users);
}

async function show(req, res) {
  const { id } = req.params;
  const user = await repository.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.json(user);
}

async function update(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = await repository.updateUser(id, name, email);
  res.json(user);
}

async function remove(req, res) {
  const { id } = req.params;
  await repository.deleteUser(id);
  res.status(204).send();
}

module.exports = {
  create,
  list,
  show,
  update,
  remove,
};