/**
 * Created by nicol.xiang on 2015/2/16.
 */
citizenApp.controller('Service1Controller',function($scope, $http, $rootScope, $location) {
	$scope.selectedPestType = "Pest Type";
	
	$scope.selectPestType = function(pestType){
		$scope.selectedPestType = pestType;	
	};
});