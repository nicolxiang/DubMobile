
/* JavaScript content from js/controllers/ServicesController.js in folder common */

/* JavaScript content from js/controllers/ServicesController.js in folder common */
/**
 * 
 */

citizenApp.controller('ServicesController',	
		function($scope, $http, $rootScope, $location) {
			$rootScope.path = $location.path().replace('/', '')
			console.log('ServicesController :: loaded');
			$rootScope.bgColor = "#ff8f71;"		
			
						
		});