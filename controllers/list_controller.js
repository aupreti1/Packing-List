var express = require('express');
var router = express.Router();
var item = require('../models/list')

router.get('/', function (req, res) {
    item.all(function (item_data) {
        console.log(item_data);
        res.render('./index', { item_data });
    })
})

router.put('/items/update', function (req, res) {
    item.update(req.body.item_id, function (result) {
        res.redirect('/');
    })
})

router.post('/items/create', function (req, res) {
    item.create(req.body.item_name, function (result) {
        console.log(result);
        res.redirect('/');
    })
})

router.delete('/items/create', function (req, res) {
    item.delete(req.body.item_name, function (result) {
        console.log(result);
        res.redirect('/');
    })
})

module.exports = router;

