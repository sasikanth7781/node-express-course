const login = (req, res) => {
  res.send("login fired");
};

const register = (req, res) => {
  res.send("register fired");
};

const logout = (req, res) => {
  res.send("logout fired");
};

module.exports = { login, register, logout };
