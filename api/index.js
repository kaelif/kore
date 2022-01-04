const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: "koreinterview",
    host: "koretechinterview.database.windows.net",
    password: "password",
    database: "KORESampleDatabase"
})
db.query("SELECT * FROM SalesLt.Customer", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        console.log('hi');
    }
})


// app.get('/customers', (req, res) => {
//     db.query("SELECT TOP 10 * FROM SalesLt.Customer", (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//             console.log('hi0');
//         }
//     })
// })

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})