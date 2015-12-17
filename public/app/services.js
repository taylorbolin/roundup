angular.module('RoundUpServices', ['ngResource'])
.factory('RoundUp', ['$resource', '$routeParams', function($resource, $routeParams) {
	return $resource('/api/roundups/:id');
}])