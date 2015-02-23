/**
 * 
 */
citizenApp.controller('SeeController',function($scope, $http, $rootScope, $location,eventService) {
					//$scope.myInterval = 5000;
					 $scope.slides = [];
    $scope.slides.push(
                            {
                                title: 'Dubai Food Festival 2017',
                                date: 'Feb 6 - 28',
                                image: 'images/dm_home_see_06.png',
                                text: 'The city\'s biggest cuisine extravaganza returns after an extremely popular inaugural show last year.'
                            });
    $scope.slides.push(
                            {
                                title: 'Dubai Food Festival 2018',
                                date:  'Feb 6 - 29',
                                image: 'images/dm_home_see_07.png',
                                text: 'The city\'s biggest cuisine extravaganza returns after an extremely popular inaugural show last year.'
                            });
    $scope.slides.push(
                            {
                                title: 'Dubai Food Festival 2019',
                                date:  'Feb 6 - 30',
                                image: 'images/dm_home_see_06.png',
                                text: 'The city\'s biggest cuisine extravaganza returns after an extremely popular inaugural show last year.'
                            });
                        var newWidth = 600 + $scope.slides.length + 1;

                    $scope.gotoDetail= function (slide) {
                        eventService.currentEvent=slide;
                        $location.path('/event-detail');
                    }
				});