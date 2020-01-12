var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'packinglist_db'
});

connection.connect(function(err) {
    if(err)throw err;
    console.log('connected as id' + connection.threadId);
});

module.exports = connection;