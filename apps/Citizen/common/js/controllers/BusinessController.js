/**
 * 
 */
citizenApp.controller('BusinessController',function($scope, $http, $rootScope, $location) {
					$scope.myInterval = 5000;
					var slides = $scope.slides = [];
					$scope.addSlide = function() {
						var newWidth = 600 + slides.length + 1;
						slides.push({
							  image: ['images/business-banner-1.png','images/business-banner-2.png','images/business-banner-3.png'][slides.length % 3] ,
							  text: ['The Gulfood is one of the biggest annual food and hospitality shows in the world.',
							  'The Gulfood is one of the biggest annual food and hospitality shows in the world.',
							  'The Gulfood is one of the biggest annual food and hospitality shows in the world.'][slides.length % 3] 
							});
					};
					
					for (var i = 0; i < 3; i++) {
						$scope.addSlide();
					}

					var slides2 = $scope.slides2 = [];
					$scope.addSlide2 = function() {
						var newWidth = 600 + slides2.length + 1;
						slides2.push({
							  image: ['images/business-banner-4.png','images/business-banner-5.png','images/business-banner-4.png'][slides2.length % 3] ,
							  text: ['A major Middle Eastern halal food producer, opening a new USD27.2 million (AED99 million) food processing facility in Dubai Investment Park.',
							  'A major Middle Eastern halal food producer, opening a new USD27.2 million (AED99 million) food processing facility in Dubai Investment Park.',
							  'A major Middle Eastern halal food producer, opening a new USD27.2 million (AED99 million) food processing facility in Dubai Investment Park.'][slides2.length % 3] 
							});
					};
					
					for (var i = 0; i < 3; i++) {
						$scope.addSlide2();
					}
				});