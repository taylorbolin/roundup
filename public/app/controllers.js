angular.module('AirplaneCtrls', ['AirplaneServices'])
.controller('AirplaneCtrl', ['$scope', 'Airplane', function($scope, Airplane) {
	$scope.airplanes = [];


	Airplane.query(function success(data) {
		$scope.airplanes = data;
		$scope.searchItems = data;
	}, function error(data) {
		console.log(data);
	});
}]).controller('AirplaneShowCtrl', [
	'$scope', 
	'$routeParams', 
	'Airplane',
	function($scope, $routeParams, Airplane) {
		Airplane.get({id:$routeParams.id}, function success(data) {
			$scope.airplane = data;
		}, function error (data) {
			console.log(data);
		});
}]).controller('AirplaneNewCtrl', [
	'$scope',
	'$location',
	'Airplane',
	function($scope, $location, Airplane) {
		$scope.createAirplane = function() {
			var params = {
				manufacturer: $scope.manufacturer,
				model: $scope.model,
				engines: $scope.engines,
				image: $scope.image
			}

			var newAirplane = new Airplane(params);
			newAirplane.$save();
			$location.path('/');
		}

	}]);
