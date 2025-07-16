const User = require("../models/user.models");

async function getUsers(req, res) {
  const user = await User.find();
  try {
    if (!user || user.length === 0) {
      return res.status(404).send({ message: "No user found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
}

async function getUserByEmail(req, res) {
  const { email } = req.params;
  const user = await User.findOne({ email });
  try {
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
}

async function createUser(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send({ message: "All fields are required" });
  }
  const user = await User.create({ name, email, password });
  try {
    console.log("User Created: ", JSON.stringify(user));
    res.status(201).send({ message: "User created successfully", user });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: err.message });
  }
}

module.exports = { getUsers, getUserByEmail, createUser };
