const {connection, MONGODB, SQL} = require("../config/database");

let startConnection;

switch(connection){

    case SQL:
        startConnection = require("../config/sql/connection");
        break;
    case MONGODB:
        startConnection = require("../config/mongo/connection");
        break;
    default:
        throw new Error(`Must specify DB_CONNECTION => ${SQL} o ${MONGODB}`);

}

module.exports = startConnection;