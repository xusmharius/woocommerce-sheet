const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'root',
    database: 'productos',
    port: '3306',
    multipleStatements: true,
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
})

mysqlConnection.connect(
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("La base de datos está conectada");
        }
    });

module.exports = mysqlConnection;