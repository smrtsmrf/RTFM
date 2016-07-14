angular.module('rtfmApp', ['firebase', 'ui.router'])

.constant('firebaseRoot', {url: 'https://smrtsmrf-rtfm.firebaseio.com'})

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	.state('threads', {
		url: '/threads',
		templateUrl: '/templates/threads.html', 
		controller: 'threadsCtrl',
		resolve: {
			threadsRef: function (threadService) {
				return threadService.getThreads();
			}
		}
	})

	.state('thread', {
		url: '/threads/:threadId', 
		templateUrl: '/templates/thread.html', 
		controller: 'threadCtrl',
		resolve: {
			threadRef: function (threadService, $stateParams) {
				var id = $stateParams.threadId;
				return threadService.getThread(id);
			}, 
			commentsRef: function (threadService, $stateParams) {
				var id = $stateParams.threadId;
				return threadService.getComments(id);
			}
		}
	})

	$urlRouterProvider.otherwise('/threads')
}])