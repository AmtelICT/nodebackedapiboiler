var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port:3306,
    user: 'adamcyber',
    password: 'Adam@#Cyber1994?@',
    database: 'crudnodeboiler'
});

connection.connect(function(err, connection) {
    if(err) console.log("Kết nối không thành công")
})

module.exports = connection