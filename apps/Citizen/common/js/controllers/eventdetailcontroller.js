
angular.module('CitizenApp').controller('eventDetailController',['eventService','$location',function( eventService,$location) {
var ctrl=this;
    ctrl.event=eventService.currentEvent;
}]);