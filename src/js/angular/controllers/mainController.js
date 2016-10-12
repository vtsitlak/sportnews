app.controller('mainController', ['$scope', 'feedService', function($scope, feedService) {

    // funtion to call feedService. on success:  we load the data on $scope
    // we init the filtered data that will displayed on results
    // we call the function to define all keywords
    getFeed = function() {
        feedService.success(function(data) {
            $scope.feeds = data;
            $scope.filteredFeeds = $scope.feeds;
            $scope.keywords = getKeywords(data);
        }).error(function(data) {
            console.log('Error on getting the data');
        });;
    };

    // funtion to define all keywords. We read all data and get the unique keywords 
    getKeywords = function(data) {
        var t = ['All'];
        var i = 0;
        var x = 0;

        for (i = 0; i < data.length - 1; i++) {
            for (x = 0; x < data[i].keywords.length; x++) {
                if (t.indexOf(data[i].keywords[x].keyword) == -1) {
                    t.push(data[i].keywords[x].keyword)
                }
            }
        }
        return t;
    }

    // init the $scope
    getFeed();

    // we update the results feed based on the selected keyword from select search bar
    $scope.updateFeed = function(test) {
        $scope.filteredFeeds = [];
        var i = 0;
        if (test != '' && test != 'All') {
            var i = 0;
            var y = 0;
            for (i = 0; i < $scope.feeds.length; i++) {
                for (y = 0; y < $scope.feeds[i].keywords.length; y++) {
                    if ($scope.feeds[i].keywords[y].keyword == test) {
                        $scope.filteredFeeds.push($scope.feeds[i]);
                    }
                }

            }

        } else {

            $scope.filteredFeeds = $scope.feeds;
        }

    }

}]);