angular.module('starter', ['ionic'])
.controller('StarterCtrl', function($scope, $timeout) {
        $scope.state = "unknown";

$scope.isMultiWindow = function() {
     window.IsMultiWindowPlugin.get(function (state) {
             $timeout (function() {$scope.state = state});
    },
    function (err) {
        console.log (" *************** ERR:"+JSON.stringify(err));
        $scope.state = "error:"+JSON.stringify(err);
    });
}




})

