
/* JavaScript content from js/controllers/DiscoverController.js in folder common */

/* JavaScript content from js/controllers/DiscoverController.js in folder common */
/**
 * 
 */
citizenApp.controller('DiscoverController', function ($scope, $http, $rootScope, $location) {
    $scope.myInterval = 5000;
    $scope.title = "Deira Fish Market";
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: ['images/discover/dm_home_discover_103.png', 'images/discover/dm_home_discover_104.png', 'images/discover/dm_home_discover_103.png'][slides.length % 3],
            text: [
                'DM upcoming fish market is looking to bridge the past with the present',
                                  'DM upcoming fish market is looking to bridge the past with the present',
                                  'DM upcoming fish market is looking to bridge the past with the present'
            ][slides.length % 3]
        });
    };

    for (var i = 0; i < 3; i++) {
        $scope.addSlide();
    }
});