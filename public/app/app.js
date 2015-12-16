var app = angular.module('RoundUpApp', ['RoundUpServices', 'RoundUpCtrls', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/index.html'
  })
  .when('/new', {
    templateUrl: 'app/views/new.html',
    controller: 'NewRoundUpCtrl'
  })
  .when('/:id', {
    templateUrl: 'app/views/show.html',
    controller: 'ShowRoundUpCtrl'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);


