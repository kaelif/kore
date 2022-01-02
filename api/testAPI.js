var express = require('express');
var router = express.Router();

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
})

router.get('/', function (req, res, next) {
    res.send('API is working 2');
});

module.exports = router;