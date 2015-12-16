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
		$scope.round = 1;

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
				newRoundUp.$save();
				console.log($scope.group);
				console.log($scope.friends);
				$location.path("/:id");
			}
		}
	Array.prototype.remove = function(from, to) {
  	var rest = this.slice((to || from) + 1 || this.length);
  	this.length = from < 0 ? this.length + from : from;
  	return this.push.apply(this, rest);
  }
}])
.controller('ShuffleCtrl', ['$scope', 'RoundUp', 
	function($scope, RoundUp) {
		$scope.round=1;

		$scope.shuffleBtn = function() {
		// var group = $scope.group;
		// var friends = $scope.friends;
		console.log($scope.group);
		console.log($scope.friends);
		$scope.round+=1;
		// for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  //   		return o;
    	}
    	// shuffleBtn($scope.friends);
	}]);

// needs show controller to shuffle friends but remain on same page

