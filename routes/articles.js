var express = require('express');
var router = express.Router();

var Article = require('../models/article');

/* GET articles listing. */
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
    if (err){
      console.log(err);
    }else{
      res.json(articles);
    }
  });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  Article.getArticleById(id, function(err, article){
    if (err){
      console.log(err);
    }else{
      res.json(article);
    }
  });
});

router.get('/category/:category', function(req, res, next) {
  var category = req.params.category;
  Article.getArticlesByCategory(category, function(err, articles){
    if (err){
      console.log(err);
    }else{
      res.json(articles);
    }
  });
});

router.post('/', function(req, res, next){
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  var newArticle = new Article({
    title: title,
    category: category,
    body: body
  });

  Article.createArticle(newArticle, function(err, article){
    if (err){
      console.log(err);
    }else{
      res.redirect('/articles');
    }
  });
});

router.put('/', function(req, res, next){
  var id = req.body.id;
  var data = {
    title : req.body.title,
    category : req.body.category,
    body : req.body.body
  };

  Article.updateArticle(id, data, function(err, article){
    if (err){
      console.log(err);
    }else{
      res.redirect('/articles');
    }
  });
});

router.delete('/:id', function(req, res, next){
  var id = req.params.id;

  Article.removeArticle(id, function(err, article){
    if (err){
      console.log(err);
    }else{
      res.redirect('/articles');
    }
  });
});

module.exports = router;
