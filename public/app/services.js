angular.module('RoundUpServices', ['ngResource'])
.factory('RoundUp', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/roundups/:id');
}])