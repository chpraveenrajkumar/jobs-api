const register = async (req, res) => {
  req.send("regsiter user");
};

const login = async (req, res) => {
  req.send("login");
};

module.exports = {
  register,
  login,
};
