app.directive('articleItem', [function () {
    // set the article Item directive
    return {
        restrict: 'E',
        scope: {
            feed: '=',
            cs:  '='
        },
        
        templateUrl: 'parts/articleItem.html'        
    };
}]); 