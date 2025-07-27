const express = require("express");
const User = require("../model/user");
const {
  handleAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");
const router = express.Router();

// GET all Users
// Post new User
router.route("/").get(handleAllUsers).post(handleCreateNewUser);

// GET, PATCH, DELETE by ID

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
