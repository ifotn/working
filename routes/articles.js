var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Article = require('../models/article');

// GET main articles page
router.get('/', function(req, res, next) {

    Article.find(function(err, articles) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('articles/index', {
                title: 'Articles',
                articles: articles
            });
        }
    });
});

// GET add form - show blank form
router.get('/add', function(req, res, next) {
    res.render('articles/add', {
        title: 'Add New Article'
    });
});

// POST add form - save new article
router.post('/add', function(req, res, next) {

    Article.create( {
        title: req.body.title,
        content: req.body.content
    }, function(err, Article) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/articles');
        }
    });
});

// GET edit form - show populated form
router.get('/:id', function(req, res, next) {

    var id = req.params.id;

    Article.findById(id, function(err, article) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('articles/edit', {
                title: 'Edit Article',
                article: article
            });
        }
    });
});

// POST edit form - save updated article
router.post('/:id', function(req, res, next) {

    var id = req.params.id;

    var article = new Article( {
       _id: id,
        title: req.body.title,
        content: req.body.content
    });

    Article.update( { _id: id }, article, function(err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/articles');
        }
    })
});

// GET delete page - remove selected article
router.get('/delete/:id', function(req, res, next) {

    var id = req.params.id;

    Article.remove( { _id: id }, function(err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
           res.redirect('/articles');
        }
    });
});

module.exports = router;
