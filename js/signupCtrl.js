angular.module('rtfmApp').controller('signupCtrl', ['$scope', 'userService', function ($scope, userService) {
	$scope.register = function () {
		userService.register($scope.newUser).then(function (userRef) {
			
		}).catch(function (err) {
			console.log(err);
		})
	}
}]);