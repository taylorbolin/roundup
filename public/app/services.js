angular.module('RoundUpServices', ['ngResource'])
.factory('RoundUp', ['$resource', '$routeParams', function($resource, $routeParams) {
	return $resource('http://localhost:3000/api/roundups/:id');
}])