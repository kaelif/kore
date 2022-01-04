const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome')
})

var customersRouter = require('./config/db');
app.use('/customers', customersRouter);

app.listen(8080, () => {
    console.log('listening on port 8080')
})

module.exports = app;