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
    request = new Request("select * from SalesLT.Customer", function (err, rowCount) {
        if (err) {
            throw err;
        } else {
            console.log(rowCount + ' rows');
        }
    });

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log(column.value);
        });
    });

    connection.execSql(request);
}