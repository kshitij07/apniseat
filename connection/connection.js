// var sql = require('mssql');
// var connect = function () {
//     var conn = new sql.ConnectionPool({
//         user: 'apniseat',
//         password: 'Apniseat@7',
//         server: 'LAPTOP-0HAFMTBG',
//         database: 'apniseat'
//     });

//     return conn;
// };

// module.exports = connect;

const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://apniseat:apniseat@7@cluster0.dcg9c.mongodb.net/apniseat?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));