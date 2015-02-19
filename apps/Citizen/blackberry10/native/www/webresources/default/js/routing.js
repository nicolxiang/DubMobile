
/* JavaScript content from js/routing.js in folder common */
/**
 *
 */
var path = "";

citizenApp.config(['$routeProvider',
		function ($routeProvider, $locationProvider) {
		    $routeProvider.when('/', {
		        templateUrl: path + "views/home.html",
		        controller: 'MainController',
		        reloadOnSearch: false
		    }).when('/services', {
		        templateUrl: path + "views/services.html",
		        controller: 'ServicesController',
		        reloadOnSearch: false
		    }).when('/see', {
		        templateUrl: path + "views/see.html",
		        controller: 'SeeController',
		        reloadOnSearch: false
		    }).when('/discover', {
		        templateUrl: path + "views/discover.html",
		        reloadOnSearch: false
		    }).when('/business', {
		        templateUrl: path + 'views/business.html',
		        reloadOnSearch: false
		    }).when('/me', {
		        templateUrl: "views/dashboard.html",
		        reloadOnSearch: false
		    }).when('/me/detail', {
		        templateUrl: 'views/details.html',
		        reloadOnSearch: false
		    }).otherwise({
		        redirectTo: '/',
		        reloadOnSearch: false
		    });
		}]);