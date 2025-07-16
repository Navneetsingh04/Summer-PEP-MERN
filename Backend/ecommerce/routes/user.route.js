const express = require("express")
const {getUsers,getUserByEmail,createUser} = require("../controller/user.controller")
const router = express.Router()

router.get("/",getUsers)
router.post("/",createUser)
router.get("/:email",getUserByEmail)

module.exports = router;