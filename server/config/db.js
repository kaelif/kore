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
            password: "a8Xp6Pz6&$TR"
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
    request = new Request("SELECT  c.LastName + ', ' + c.FirstName AS [Name],	c.Title + ' ' + c.FirstName + ' ' + c.LastName AS FullName, c.EmailAddress AS Email, c.Phone FROM SalesLT.Customer c WHERE c.FirstName IS NOT NULL AND c.LastName IS NOT NULL AND c.EmailAddress IS NOT NULL AND c.Phone IS NOT NULL ORDER BY c.LastName, c.FirstName", function (err, rowCount) {
        if (err) {
            throw err;
        } else {
            console.log(rowCount + ' rows');
        }
    });

    var customers = [];

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            customers.push(column.value);
        });
    });

    connection.execSql(request);

    app.get('/', (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.send(customers)
    })
}

module.exports = app;