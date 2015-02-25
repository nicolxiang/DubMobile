
/* JavaScript content from js/controllers/Service2Controller.js in folder common */
citizenApp.controller('Service2Controller',function($scope, $http, $rootScope, $location) {
	
	$scope.selectedPestType = "Medical Fitness Certificate(XT)";
	
	$scope.selectPestType = function(pestType){
		$scope.selectedPestType = pestType;	
	};
});