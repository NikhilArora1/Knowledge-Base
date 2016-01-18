var app = angular.module('kBApp',['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/categories',{
      templateUrl: 'views/categories.view.html',
      controller: 'CategoriesCtrl'
    }).
    when('/articles',{
      templateUrl: 'views/articles.view.html',
      controller: 'ArticlesCtrl'
    }).
    when('/article/:id',{
      templateUrl: 'views/article_details.view.html',
      controller: 'ArticleDetailsCtrl'
    }).
    when('/articles/category/:category',{
      templateUrl: 'views/category_articles.view.html',
      controller: 'ArticlesCategoryCtrl'
    }).
    when('/articles/add',{
      templateUrl: 'views/add_article.view.html',
      controller: 'ArticleCreateCtrl'
    }).
    when('/articles/edit/:id',{
      templateUrl: 'views/edit_article.view.html',
      controller: 'ArticleEditCtrl'
    }).
    otherwise({redirectTo: '/categories'})

}]);
