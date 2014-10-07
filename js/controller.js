var knowledgiumApp = angular.module('knowledgiumApp', []);

knowledgiumApp.controller('PostListCtrl', function($scope, $http) {
    $http.get('http://localhost:8080/api/content/all/').success(function(data)
    {
        $scope.posts = data;
    });
});
