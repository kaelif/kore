const express = require('express');
const app = express();
var Connection = require('tedious').Connection;

var config = {
    server: "koretechinterview.database.windows.net",
    options: {
        database: "KORESampleDatabase"
    },
    authentication: {
        type: "default",
        options: {
            userName: "koreinterview",
            password: "a8Xp6Pz6&$TR",
            encrypt: true,
            rowCollectionOnRequestCompletion: true
        }
    }
};

var connection = new Connection(config);

connection.on('connect', function (err) {
    if (err) {
        throw err;
    }
    executeStatement();
});

connection.connect();

var Request = require('tedious').Request;

function executeStatement() {
    request = new Request("SELECT c.CustomerID AS id, c.LastName + ', ' + c.FirstName AS [Name],	c.Title + ' ' + c.FirstName + ' ' + c.LastName AS FullName, c.EmailAddress AS Email, c.Phone FROM SalesLT.Customer c WHERE c.FirstName IS NOT NULL AND c.LastName IS NOT NULL AND c.EmailAddress IS NOT NULL AND c.Phone IS NOT NULL ORDER BY c.LastName, c.FirstName", function (err, rowCount, rows) {
        if (err) {
            console.log(err)
        } else {
            console.log(rowCount + ' row(s) returned')
        }
    })
    var data = []
    request.on('row', function (row) {
        data.push({
            id: row[0].value,
            name: row[1].value,
            fullName: row[2].value,
            email: row[3].value,
            phone: row[4].value
        })
        app.get('/', (req, res) => {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(data)
        })
    })
    connection.execSql(request);
}

module.exports = app;