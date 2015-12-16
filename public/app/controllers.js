angular.module('RoundUpCtrls', ['RoundUpServices'])
.controller('RoundUpCtrl', ['$scope', 'RoundUp', function($scope, RoundUp) {
	RoundUp.query(function success(data) {
		console.log(data);
		$scope.roundups = data;
	}, function error(data) {
		console.log(data);
	});
}])
.controller('NewRoundUpCtrl', ['$scope', '$location', 'RoundUp',
	function($scope, $location, RoundUp) {
		$scope.group = "";
		$scope.friends = [];

		$scope.addFriend = function() {
			if ($scope.newFriend.length > 0) {
			$scope.friends.push({friend : $scope.newFriend});
			$scope.newFriend = "";
			}
		}
		$scope.removeFriend = function(i) {
			$scope.friends.remove(i);
		}
		$scope.submitGroup = function() {
			if ($scope.group.length > 0 && $scope.friends.length > 0) {
				var params = {
					group: $scope.group,
					friends: $scope.friends
				}
				var newRoundUp = new RoundUp(params)
				newRoundUp.$save().then(function(roundup) {
					$location.path("/"+roundup._id);
				});
				// console.log($scope.group);
				// console.log($scope.friends);
			}
		}
	Array.prototype.remove = function(from, to) {
  	var rest = this.slice((to || from) + 1 || this.length);
  	this.length = from < 0 ? this.length + from : from;
  	return this.push.apply(this, rest);
  }
}])
.controller('ShowRoundUpCtrl', ['$scope', '$routeParams', 'RoundUp', 
	function($scope, $routeParams, RoundUp) {
		$scope.round = 1;
		console.log($routeParams.id);
		RoundUp.get({
			id: $routeParams.id
		}, function success(data) {
			$scope.RoundUp = data;
		}, function error (data) {
			console.log(data);
		});
		
		// function should shuffle data and increment round. Maybe flag break after every 5/10 rounds.
		$scope.shuffleBtn = function() {
		// console.log($scope.group);
		// console.log($scope.friends);
		$scope.round+=1;
    	}
    
	}]);

