const getUser = (req, res) => {
  res.send("All user");
};

const createUser = (req, res) => {
  res.send("User Created!");
};

const updateUser = (req, res) => {
  res.send("User Updated!");
};

const deleteUser = (req, res) => {
  res.send("User Deleted!");
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
