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
		$scope.round = 1;

		$scope.addFriend = function() {
			if ($scope.newFriend.length > 0) {
			$scope.friends.push({friend : $scope.newFriend, done: false});
			$scope.newFriend = "";
			}
		}
		$scope.removeFriend = function(i) {
			$scope.friends.remove(i);
		}
		$scope.submitGroup = function() {
			console.log($scope.group);
			console.log($scope.friends);
			console.log('round count: '+$scope.round);
			$location.path("/:id");
		}
		// needs another function to shuffle friends array and return
		// selected user and redirect to show page
		
	Array.prototype.remove = function(from, to) {
  	var rest = this.slice((to || from) + 1 || this.length);
  	this.length = from < 0 ? this.length + from : from;
  	return this.push.apply(this, rest);
  }
}])
.controller('ShuffleCtrl', ['$scope', 'RoundUp', 
	function($scope, RoundUp) {
		$scope.round=1;

		$scope.roundCount = function() {
		$scope.round+=1;
		console.log('round count: '+$scope.round);
		}
	}]);

// needs show controller to shuffle friends but remain on same page

