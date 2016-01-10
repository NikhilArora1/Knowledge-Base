angular.module('kBApp')

.controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('/categories').then(function(response){
    $scope.categories = response.data;
  })
}])
