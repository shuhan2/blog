var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/admin', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../pages/admin.html'), {
        title: 'backStage'
    })
});

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../pages/index.html'), {
        title: 'backStage'
    })
});


module.exports = router;