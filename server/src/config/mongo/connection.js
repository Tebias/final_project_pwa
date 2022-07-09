const mongoose=require("mongoose");
const {mongodb} = require("../database");

const connection = async ()=>{
    await mongoose.connect(mongodb.uri);
    console.log("Connection enable with mongoose");
}

module.exports = connection;