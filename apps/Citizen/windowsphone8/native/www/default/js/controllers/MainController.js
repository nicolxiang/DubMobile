
/* JavaScript content from js/controllers/MainController.js in folder common */

/* JavaScript content from js/controllers/MainController.js in folder common */
/* JavaScript content from js/main.js in folder common */
var pagesHistory = [];
var currentPage = {};
var path = "";
var busyIndicator = {};
var apiHost = "http://192.168.0.119:23080";
var encryptedKey = "key123456";
var loginInfo = {};



citizenApp.controller('MainController',
		function($scope, $rootScope, $location) {

			 $scope.chatUsers = [
			    { name: 'Carlos  Flowers', online: true },
			    { name: 'Byron Taylor', online: true },
			    { name: 'Jana  Terry', online: true },
			    { name: 'Darryl  Stone', online: true },
			    { name: 'Fannie  Carlson', online: true },
			    { name: 'Holly Nguyen', online: true },
			    { name: 'Bill  Chavez', online: true },
			    { name: 'Veronica  Maxwell', online: true },
			    { name: 'Jessica Webster', online: true },
			    { name: 'Jackie  Barton', online: true },
			    { name: 'Crystal Drake', online: false },
			    { name: 'Milton  Dean', online: false }
			  ];
			 
			$rootScope.bgColor = "#e84343";
				
			$rootScope.Languages = [ {
				name : "English",
				dir : "ltr",
				lang : "en"
			}, {
				name : "Arabic",
				dir : "rtl",
				lang : "ar"
			} ];

			if (!$rootScope.selectedLanguage) {
				$rootScope.selectedLanguage = $rootScope.Languages[0];
				$scope.Language = $rootScope.Languages[0];
			}

			$rootScope.isshowSidebars = false;
			$rootScope.isshowNavbars = false;

			$rootScope.path = $location.path().replace('/', '');

			$rootScope.$on('$routeChangeStart', function() {
				//$rootScope.loading = true;
                $scope.hasBack=false;
			});

			$rootScope.$on('$routeChangeSuccess', function() {
				//$rootScope.loading = false;
                if( $location.path()=='/event-detail'){
                    $scope.hasBack=true;
                }
			});
            
            $scope.goBack= function () {
                window.history.go(-1);
            }
		});



citizenApp.controller('ListController', function($scope, $http) {
			console.log('ListController :: loaded');
			$scope.safeApply = function(fn) {
				var phase = this.$root.$$phase;
				if (phase == '$apply' || phase == '$digest') {
					if (fn && (typeof (fn) === 'function')) {
						fn();
						console.log(phase);
					}
				} else {
					console.log("apply");
					this.$apply(fn);
				}
			};
			
			$scope.getRecords = function() {
				var inputData = {
		                adapter : 'AccelaAdapter',
		                procedure : 'getRecords',
		                parameters:[loginInfo.result]
		            };
				var getRecordsSuccess = function(result){
					$scope.safeApply(function(){				
						$scope.record = result.invocationResult.result;
						alert('get records successfully.');
					});			
				};
				
				var getRecordsFailure = function(result){
					alert('failed to get records.');
				};
				
				 WL.Client.invokeProcedure(inputData,{
		             onSuccess : getRecordsSuccess,
		             onFailure : getRecordsFailure
		         });
			};
			$scope.getRecords();
			/*$scope.getRecords = function() {
				$http(
						{
							method : 'post',
							url : 'http://192.168.0.119:82/proxy.aspx',
							headers : {
								'Content-Type' : 'application/json',
								'AccessKey' : 'D0A2E2E5BAC04C3683C22CE411E5926F',
								'BizURL' : 'http://192.168.0.119:23080/apis/v4/search/records?token=97524293985464544296',
								'Access-Control-Allow-Origin' : '*'

							}
						}).success(function(data) {
					console.log(data);
					$scope.record = data.result;
				}).error(function(data, status, headers, config) {
					console.log(data);
				});
			};

			$scope.getRecords();*/
			

		});

citizenApp.controller("LoginController", function($scope, $http, $location,
		$rootScope) {

	$scope.loginUser = {};
	$scope.loginUser.username = "Test";
	$scope.loginUser.password = "12345678";
	$scope.loginUser.agency = "BPTDEV";
	$scope.loginUser.environment = "STAGE";

	$scope.safeApply = function(fn) {
		var phase = this.$root.$$phase;
		if (phase == '$apply' || phase == '$digest') {
			if (fn && (typeof (fn) === 'function')) {
				fn();
				console.log(phase);
			}
		} else {
			console.log("apply");
			this.$apply(fn);
		}
	};

	$scope.submitForm = function() {
		var inputData = {
                adapter : 'AccelaAdapter',
                procedure : 'login',
                parameters:['BPTDEV',$scope.loginUser.username,$scope.loginUser.password]
            };
		
		var loginSuccess = function(result){
			$scope.safeApply(function(){				
				loginInfo = result.invocationResult;				
				$rootScope.isshowSidebars = true;
				$rootScope.isshowNavbars = true;
				$location.path('/services').replace();
			});			
		};
		
		var loginFailure = function(result){
	       	 busyIndicator.hide();
	    	 alert('login failure.');
	     };
	     
		 WL.Client.invokeProcedure(inputData,{
             onSuccess : loginSuccess,
             onFailure : loginFailure
         });
	};
});

function showDialog(title, message) {
	WL.SimpleDialog.show(title, message, [ {
		text : 'OK'
	} ]);
}

function onWriteSuccess(status) {
	console.log("Succesfully encrypted into cache.");
}
function onWriteFailure(status) {
	if (status == WL.EncryptedCache.ERROR_EOC_CLOSED)
		console.error("Encrypted cache closed, write failed. error code= "
				+ status);
	showDialog('Error', 'Login failed!');
}

function wlCommonInit() {
	// invokeEncryptedCache();

	// Special case for Windows Phone 8 only.
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "/www/default/";
	}

	busyIndicator = new WL.BusyIndicator('pagePort');
}

function invokeEncryptedCache() {
	WL.EncryptedCache.open(encryptedKey, true, onOpenComplete, onOpenError);
	function onOpenComplete(status) {
		console.log("Encrypted cache succesfully opened");
	}
	function onOpenError(status) {
		switch (status) {
		case WL.EncryptedCache.ERROR_KEY_CREATION_IN_PROGRESS:
			console.error("ERROR: KEY CREATION IN PROGRESS");
			break;
		case WL.EncryptedCache.ERROR_LOCAL_STORAGE_NOT_SUPPORTED:
			console.error("ERROR: LOCAL STORAGE NOT SUPPORTED");
			break;
		case WL.EncryptedCache.ERROR_NO_EOC:
			console.error("ERROR: NO EOC");
			break;
		case WL.EncryptedCache.ERROR_COULD_NOT_GENERATE_KEY:
			console.error("ERROR: COULD NOT GENERATE KEY");
			break;
		case WL.EncryptedCache.ERROR_CREDENTIALS_MISMATCH:
			console.error("ERROR: CREDENTIALS MISMATCH");
			break;
		default:
			console.error("AN ERROR HAS OCCURED. STATUS :: " + status);
		}
	}
}

/* JavaScript content from js/main.js in folder iphone */
// This method is invoked after loading the main HTML and successful
// initialization of the Worklight runtime.
function wlEnvInit() {
	wlCommonInit();
	// Environment initialization code goes here
}