'use strict';

angular.module('myApp.children', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/children', {
    templateUrl: 'views/children.html',
    controller: 'ChildrenCtrl'
  });
}])

.controller('ChildrenCtrl', [function() {

}]);