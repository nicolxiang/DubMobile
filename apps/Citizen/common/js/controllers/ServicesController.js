/**
 * 
 */

citizenApp.controller('ServicesController',	
		function($scope, $http, $rootScope, $location) {
			$rootScope.path = $location.path().replace('/', '')
			console.log('ServicesController :: loaded');
			$rootScope.bgColor = "#ff8f71;"		
			
						
		});