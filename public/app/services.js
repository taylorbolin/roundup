api call here
angular.module('RoundUpServices', ['ngResource'])
.factory('Airplane', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/airplanes/:id');
}])