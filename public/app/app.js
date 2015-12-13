var app = angular.module('RoundUpApp', ['ngRoute', 'RoundUpServices', 'AirplaneCtrls']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/index.html',
    controller:  'AirplaneCtrl'
  })
  .when('/new', {
    templateUrl: 'app/views/new.html',
    controller: 'AirplaneNewCtrl'
  })
  .when('/:id', {
    templateUrl: 'app/views/show.html',
    controller: 'AirplaneShowCtrl'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);