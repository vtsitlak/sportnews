app.factory('articleService', ['$http', function($http) {
    //read the json file and return the data
    return $http.get('data/single-news-article.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });   
}]);