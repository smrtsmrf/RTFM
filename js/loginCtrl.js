angular.module('rtfmApp').controller('loginCtrl', ['$scope', 'userService', '$state', function ($scope, userService, $state) {
	
	$scope.login = function () {
		userService.login($scope.user).then(function (authedUser) {
			 $state.go('threads')
		}).catch(function (err) {
			console.log(err);
		})
	};
}]);