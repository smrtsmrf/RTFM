angular.module('rtfmApp').service('threadService', ['firebaseRoot', function (firebaseRoot) {
	this.getThreads = function () {
		return new Firebase(firebaseRoot.url + '/threads')
	}

	this.getThread = function (threadId) {
		return new Firebase(firebaseRoot.url + '/threads/' + threadId)
	}

	this.getComments = function (threadId) {
		return new Firebase(firebaseRoot.url + '/threads/' + threadId + '/comments')
	}
}])