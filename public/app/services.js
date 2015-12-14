// api call here
// angular.module('AirplaneServices', ['ngResource'])
// .factory('Airplane', ['$resource', function($resource) {
// 	return $resource('http://localhost:3000/api/airplanes/:id');
// }])

angular.module('RoundUpServices', ['ngResource'])
.factory('RoundUp', ['$resource', function($resource) {
	return $resource('http://localhost:3000/api/:id');
}])