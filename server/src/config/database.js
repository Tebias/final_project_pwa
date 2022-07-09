module.exports = {
    connection: process.env.DB_CONNECTION,
    sql:{
        uri: process.env.DB_URI        
    },
    mongodb:{
        uri: process.env.DB_URI
    },
    SQL: "sql",
    MONGODB: "mongodb"

}