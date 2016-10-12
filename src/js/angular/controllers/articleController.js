app.controller('articleController', ['$scope', '$stateParams', 'articleService', function($scope, $stateParams, articleService) {
    
    // we use the $stateParams to inject the image url from the results page, as there is no link to image from json file
    $scope.img_url = $stateParams.img_url;
    
    // funtion to call articleService to return article data to $scope
    getArticle = function() {
        articleService.success(function(data) {
            $scope.article = data;            
        }).error(function(data) {
            console.log('Error on getting the data');
        });;
    };
    
    // call the funcion to load the data 
    getArticle();

}]);