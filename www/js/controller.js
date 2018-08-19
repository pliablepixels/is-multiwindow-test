angular.module('starter', ['ionic'])
.controller('StarterCtrl', function($scope) {
        $scope.state = "";

$scope.isMultiWindow = function() {
     window.IsMultiWindowPlugin.get(function (state) {
             $scope.state = state;
    },
    function (err) {
        console.log (" *************** ERR:"+JSON.stringify(err));
        $scope.state = "Error";
    });
}




})

