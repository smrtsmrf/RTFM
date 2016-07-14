angular.module('rtfmApp').service('userService', ['firebaseRoot', '$firebaseAuth', '$state', function (firebaseRoot, $firebaseAuth, $state) {
	
	var authRef = new Firebase(firebaseRoot.url);
	var auth = $firebaseAuth(authRef);

	auth.$onAuth(function (authData) {
		if (!authData) {
			$state.go('login')
		}
	})

	this.getUser = function () {
		 /* return $getAuth() result... */ 
		return auth.$getAuth();
	}

	this.register = function (newUser) {
		 /* return $createUser(newUser) result... */ 
		return auth.$createUser(newUser);
	}

	this.login = function (user) {
		 /* return authWithPassword(user) result... */ 
		return auth.$authWithPassword(user);
	}

	this.logout = function (user) {
		return auth.$unauth();
	}
}])