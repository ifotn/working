var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First Express Generator Site',
                        message: 'Our first page'} );
});


/* GET ABOUT page */
router.get('/about', function(req, res, next) {
   res.render('about', {
       title: 'About'
   });
});

module.exports = router;
