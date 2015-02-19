
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
		    }).when('/paymentSuccessed', {
                templateUrl: path + 'views/PaymentSuccessed.html',
                reloadOnSearch: false
            }).when('/payment', {
		        templateUrl: 'views/payment.html',
		        reloadOnSearch: false
		    })
                .when('/paymentSubmit', {
                    templateUrl: 'views/paymentsubmit.html',
                    reloadOnSearch: false
                }).when('/favorites', {
		        templateUrl: 'views/favorites.html',
		        reloadOnSearch: false
		    }).when('/paymentNewCreateCard', {
		        templateUrl: path + 'views/paymentSubmit.html',
		        reloadOnSearch: false
		    }).when('/paymentFailed', {
                templateUrl: path + 'views/paymentFailed.html',
                reloadOnSearch: false
            }).when('/paymentNotProcessed', {
                templateUrl: path + 'views/paymentNotProcessed.html',
                reloadOnSearch: false
            }).when('/paymentSubmit', {
                templateUrl: path + 'views/paymentSubmit.html',
                reloadOnSearch: false
            }).when('/services/service2', {
		        templateUrl: 'views/service2.html',
		        reloadOnSearch: false
		    }).when('/services/service1', {
		        templateUrl: 'views/service1.html',
		        reloadOnSearch: false
		    })
		    .otherwise({
		        redirectTo: '/',
		        reloadOnSearch: false
		    }).when('/paySuccess', {
		        templateUrl: 'views/PaymentSuccessed.html',
		        reloadOnSearch: false
		    });
		}]);