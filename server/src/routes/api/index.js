const express = require ("express");
const auth = require("./auth");

const router = express.Router();

router.use("/",(req, res) =>{
    return req.setEncoding("I'm in the API");
});

router.use("/auth",auth);

module.exports = router;