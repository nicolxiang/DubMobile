
/* JavaScript content from js/controllers/SeeController.js in folder common */
/* JavaScript content from js/controllers/SeeController.js in folder common */
/**
 *
 */
citizenApp.controller('SeeController', function($scope, $http, $rootScope, $location, eventService,articleService) {
	//$scope.myInterval = 5000;
	$scope.slides = [];
	$scope.articles = [];
	
	$scope.slides.push({
		title: 'Dubai Food Festival 2017',
		date: 'Feb 6 - 28',
		image: 'images/dm_home_see_06.png',
		text: 'The city\'s biggest cuisine extravaganza returns after an extremely popular inaugural show last year.'
	});
	
	$scope.slides.push({
		title: 'Dubai Food Festival 2018',
		date: 'Feb 6 - 29',
		image: 'images/dm_home_see_07.png',
		text: 'The city\'s biggest cuisine extravaganza returns after an extremely popular inaugural show last year.'
	});

	$scope.slides.push({
		title: 'Dubai Food Festival 2019',
		date: 'Feb 6 - 30',
		image: 'images/dm_home_see_06.png',
		text: 'The city\'s biggest cuisine extravaganza returns after an extremely popular inaugural show last year.'
	});
	
	$scope.articles.push({
		title:"Six of Dubai's Feel-good Healthy Desserts",
		date: 'Feb 6 - 30',
		image:'images/dm_home_see_08.png',
		text:"Six of Dubai's Feel-good Healthy Desserts,Six of Dubai's Feel-good Healthy Desserts Six of Dubai's Feel-good Healthy Desserts"
	});
	
	$scope.articles.push({
		title:"Go Organic!",
		date: 'Feb 6 - 30',
		image:'images/dm_home_see_11.png',
		text:"Go Organic! UAE farmers delivering organic produce direct to your door,Go Organic! UAE farmers delivering organic produce direct to your door"
	});
	
	$scope.articles.push({
		title:"Love Tom and Serg?",
		date: 'Feb 6 - 30',
		image:'images/dm_home_see_12.png',
		text:"Love Tom and Serg? Look At What They Have in Store Next...Look At What They Have in Store Next...Look At What They Have in Store Next...Look At What They Have in Store Next..."
	});
	
	var newWidth = 600 + $scope.slides.length + 1;

	$scope.gotoDetail = function(slide) {
		eventService.currentEvent = slide;
		$location.path('/event-detail');
	};

	$scope.gotoArticle = function(article) {
		articleService.currentArticle  = article;
		$location.path('/article-detail');
	};
});