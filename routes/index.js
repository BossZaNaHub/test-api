var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'The index page' });
});

router.get('/id', function(req, res) {
    var value = req.query.id;
    var result = [];
    res.json(value);
});

module.exports = router;
