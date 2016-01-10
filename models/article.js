var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Article = module.exports = mongoose.model('Article', articleSchema);

//get all articles
module.exports.getArticles = function(callback){
  Article.find(callback);
};

//get article by ID
module.exports.getArticleById = function(id, callback){
  Article.findById(id, callback);
};

//get category articles
module.exports.getArticlesByCategory = function(category, callback){
  var query = {category:category};
  Article.find(query, callback);
};

//create an article
module.exports.createArticle = function(newArticle, callback){
  newArticle.save(callback);
};

//update an article
module.exports.updateArticle = function(id, data, callback){
  var title = data.title;
  var body = data.body;
  var category = data.category;

  var query = {_id: id};
  Article.findById(query, function(err, article){
    if(!article){
      return next(new Error('Could not load article'));
    }else{
      article.title = title;
      article.body = body;
      article.category = category;

      article.save(callback);
    }
  });
};

//remove an article
module.exports.removeArticle = function(id, callback){
  var query = {_id: id};
  Article.findById(query).remove(callback);
};
