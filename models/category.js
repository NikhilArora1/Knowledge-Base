var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

//get all articles
module.exports.getCategories = function(callback){
  Category.find(callback);
};

//get article by ID
module.exports.getCategoryById = function(id, callback){
  Category.findById(id, callback);
};

// //get category articles
// module.exports.getArticlesByCategory = function(category, callback){
//   var query = {category:category};
//   Category.find(query, callback);
// };

//create new category
module.exports.createCategory = function(newCategory, callback){
  newCategory.save(callback);
};

//update category
module.exports.updateCategory = function(id, data, callback){
  var name = data.name;
  var description = data.description;

  var query = {_id: id};
  Category.findById(query, function(err, category){
    if(!category){
      return next(new Error('Could not load category'));
    }else{
      category.name = name;
      category.description = description;

      category.save(callback);
    }
  });
};

//remove a category
module.exports.removeCategory = function(id, callback){
  var query = {_id: id};
  Category.findById(query).remove(callback);
};
