var express = require('express');
var router = express.Router();


// Client pages -----

router.get('/', function (req, res) {
    res.render('index', {
        title: "Home"
    });
});

router.get('/about', function (req, res) {
    res.render('about', {
        title: "About"
    });
});

router.get('/temp', function (req, res) {
    res.render('template', {
        title: "Directive - Template by HTML5UP"
    });
});

//export this router to use in our index.js
module.exports = router;
