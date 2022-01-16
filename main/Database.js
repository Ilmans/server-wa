const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wav4'
})

db.connect((err) => {
    if (err) throw err;
    console.log('database terhubung.')
})




module.exports = { db }