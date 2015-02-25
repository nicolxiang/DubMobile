angular.module('CitizenApp').controller('articleDetailController',['articleService','$location',function( articleService,$location) {
var ctrl=this;
    ctrl.article=articleService.currentArticle;
}]);