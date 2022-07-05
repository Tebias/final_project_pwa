const express = require ("express");
const { habdleLogin, handleRegister } = require("../../controllers/auth")


const router = express.Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);

module.exports = router;