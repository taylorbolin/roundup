angular.module('RoundUpCtrls', ['RoundUpServices'])
.controller('RoundUpCtrl', ['$scope', 'RoundUp', function($scope, RoundUp) {
	RoundUp.query(function success(data) {
		console.log(data);
		$scope.roundups = data;
	}, function error(data) {
		console.log(data);
	});
}])
// .controller('NewRoundUpCtrl', ['$scope', '$location', 'RoundUp',
// 	function($scope, $location, RoundUp) {
// 		$scope.createRoundUp = function() {
// 			var params = {
// 				group_name: $scope.group_name,
// 				member_name: $scope.member_name
// 			}
// 			var newRoundUp = new RoundUp(params);
// 			newRoundup.$save();
// 			$location.path('/:id');
// 		}
// 	}])
.controller('NewRoundUpCtrl', ['$scope', '$location', 'RoundUp',
	function($scope, $location, RoundUp) {
		$scope.group = "";
		$scope.friends = [];
		$scope.removePerson = function(i) {
			$scope.friends.remove(i);
		}
		$scope.addFriend = function() {
			if ($scope.newPerson.length > 0) {
			$scope.friends.push({person : $scope.newPerson, done: false});
			$scope.newPerson = "";
			}
		}
		
	Array.prototype.remove = function(from, to) {
  	var rest = this.slice((to || from) + 1 || this.length);
  	this.length = from < 0 ? this.length + from : from;
  	return this.push.apply(this, rest);
  }
}]);

