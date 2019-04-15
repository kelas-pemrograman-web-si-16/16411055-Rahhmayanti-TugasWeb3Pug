var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login', {nama: 'Rahmayanti'})
})

router.get('/regist/', function(req, res, next) {
    res.render('regist', {nama: 'Rahmayanti'})
})

module.exports = router;