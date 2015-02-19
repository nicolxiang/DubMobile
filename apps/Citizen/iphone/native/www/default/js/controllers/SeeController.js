
/* JavaScript content from js/controllers/SeeController.js in folder common */
/**
 * 
 */
citizenApp.controller('SeeController',function($scope, $http, $rootScope, $location) {
					$scope.myInterval = 5000;
					var slides = $scope.slides = [];
					$scope.addSlide = function() {
						var newWidth = 600 + slides.length + 1;
						slides.push({
						  	  title: ['Dubai Food Festival 2017', 'Dubai Food Festival 2018', 'Dubai Food Festival 2019'][slides.length % 3],
				        	  date: ['Feb 6 - 28', 'Feb 6 - 29', 'Feb 6 - 30'][slides.length % 3],
							  image: ['images/dm_home_see_06.png','images/dm_home_see_07.png','images/dm_home_see_06.png'][slides.length % 3] ,
							  text: ['The city\'s biggest cuisine extravaganza returns after an extremely popular inaugural show last year.','The city\'s biggest cuisine extravaganza returns after an extremely popular inaugural show last year.','The city\'s biggest cuisine extravaganza returns after an extremely popular inaugural show last year.'][slides.length % 3] 
							});
					};
					
					for (var i = 0; i < 3; i++) {
						$scope.addSlide();
					}
				});