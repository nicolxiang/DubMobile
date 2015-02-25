
/* JavaScript content from js/Directives/imageround.js in folder common */

/* JavaScript content from js/Directives/imageround.js in folder common */
/**
 * Created by nicol.xiang on 2015/2/16.
 */
citizenApp.directive('imageRound',[function () {
    return {
        link: function (scope,element,attrs) {
            element.load(function () {
                element.addClass('s-round');
            });
        }
    }
}]);