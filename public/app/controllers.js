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
			}
			function shuffle(o){
    			for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    				return o;
			}
			shuffle($scope.friends);
			
		}
	Array.prototype.remove = function(from, to) {
  	var rest = this.slice((to || from) + 1 || this.length);
  	this.length = from < 0 ? this.length + from : from;
  	return this.push.apply(this, rest);
  }
}])
.controller('ShowRoundUpCtrl', ['$scope', '$routeParams', 'RoundUp', 
	function($scope, $routeParams, RoundUp) {
		function ordinal(i) {
    		var j = i % 10,
        		k = i % 100;
    		if (j == 1 && k != 11) {
        		return i + "st";
    		}
    		if (j == 2 && k != 12) {
        		return i + "nd";
    		}
    		if (j == 3 && k != 13) {
        		return i + "rd";
   			}
    		return i + "th";
		}
		$scope.round = 1;
		RoundUp.get({
			id: $routeParams.id
		}, function success(data) {
			$scope.roundup = data;
		}, function error (data) {
			console.log(data);
		});
	
		$scope.shuffleBtn = function() {
			// $('#demo14').toggle(function(){
			// 	$(this).trigger('startRumble');
			// }, function(){
			// 	$(this).trigger('stopRumble');
			// });
			function shuffle(o){
				for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    				return o;
			}
			shuffle($scope.roundup.friends);
			$scope.round += 1;
				if ($scope.round%5 === 1) {
					alert("You've had "+($scope.round - 1)+" drinks! Get some water.");
				} 

    	}
}]);

