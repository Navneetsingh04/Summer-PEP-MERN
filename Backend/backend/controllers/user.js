const User = require("../model/user");

async function handleAllUsers(req, res) {
  try {
    const allUsers = await User.find({});
    return res.json(allUsers);
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Failed to fetch users", error: error.message });
  }
}

async function handleGetUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ status: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Failed to fetch user", error: error.message });
  }
}

async function handleUpdateUserById(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ status: "User not found" });
    }
    return res.json({
      status: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Failed to update user", error: error.message });
  }
}

async function handleDeleteUserById(req, res) {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ status: "User not found" });
    }
    return res.json({ status: "User deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Failed to delete user", error: error.message });
  }
}

async function handleCreateNewUser(req, res) {
  try {
    const body = req.body;
    console.log("Body: ", body);
    if (!body || !body.first_name || !body.last_name || !body.email) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });
    console.log("Result", result);
    return res.status(201).json({ msg: "Success", user: result });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Failed to create user", error: error.message });
  }
}

module.exports = {
  handleAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser
};
