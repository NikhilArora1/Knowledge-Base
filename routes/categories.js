var express = require('express');
var router = express.Router();

var Category = require('../models/category');

router.get('/', function(req, res, next) {
  Category.getCategories(function(err, categories){
    if (err){
      console.log(err);
    }else{
      res.json(categories);
    }
  });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Category.getCategoryById(id, function(err, category){
    if (err){
      console.log(err);
    }else{
      res.json(category);
    }
  });
});

router.post('/', function(req, res, next){
  var name = req.body.name;
  var description = req.body.description;

  var newCategory = new Category({
    name: name,
    description: description
  });

  Category.createCategory(newCategory, function(err, category){
    if (err){
      console.log(err);
    }else{
      res.redirect('/categories');
    }
  });
});

router.put('/', function(req, res, next){
  var id = req.body.id;
  var data = {
    name : req.body.name,
    description : req.body.description
  };

  Category.updateCategory(id, data, function(err, category){
    if (err){
      console.log(err);
    }else{
      res.redirect('/categories');
    }
  });
});

router.delete('/:id', function(req, res, next){
  var id = req.params.id;

  Category.removeCategory(id, function(err, category){
    if (err){
      console.log(err);
    }else{
      res.redirect('/categories');
    }
  });
});

module.exports = router;
