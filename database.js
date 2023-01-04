const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database : 'rest_expressjs'
})
db.connect();
module.exports = db