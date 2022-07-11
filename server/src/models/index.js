/* ARCHIVO ENGARGADO DE DEVOLVER TODOS LOS MODELOS*/

const {connection, MONGODB, SQL} = require("../config/database");

let User;

switch(connection){

    case SQL:
        User = require("./sql/user");
        break;
    case MONGODB:
        User = require("./mongo/user");
        break;
    default:
        throw new Error(`Must specify DB_CONNECTION => ${SQL} o ${MONGODB}`);

}

module.exports = {
    User
};
