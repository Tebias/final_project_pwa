const express = require ("express");
const auth = require("./auth");

const router = express.Router();

router.get("/",(req, res) =>{
    return res.json({
        message: "I'm in the API"
    })
});

router.use("/auth",auth);

router.use("/*",(req,res)=>{
    return res.status(404).json({
        error: "Not found"
    });
});

module.exports = router;