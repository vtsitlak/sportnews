app.factory('feedService', ['$http', function($http) {
    //read the json file and return the data
    return $http.get('data/news-articles-feed.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });   
}]);