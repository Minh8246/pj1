import UserServices from "../services/users.service.js";

export const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const result = await UserServices.login(userName, password);
    if (!isNaN(result)) {
      res.status(200).json({ message: result });
    } else {
      res.status(203).json({ error: result });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const signup = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const result = await UserServices.signup(userName, password);
    if (result) {
      res.status(200).json({ message: "Signup successfull" });
    } else {
      res.status(203).json({ error: "Username already exists" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const test = (req, res) => {
  res.json(["ok"]);
};
