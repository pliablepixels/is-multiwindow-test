angular.module('starter', ['ionic'])
.controller('StarterCtrl', function($scope, $timeout, $ionicPlatform, $ionicPopup) {
        $scope.state = "unknown";
        var startCount = 0;
        var stopCount = 0;

        $ionicPlatform.ready (function () {
            console.log ("Registering callbacks...");
            window.MultiWindowPlugin.registerOnStop("stophandle", onStop);
            window.MultiWindowPlugin.registerOnStart("starthandle", onStart);
        });

        $scope.isMultiWindow = function() {
             window.MultiWindowPlugin.get(function (data) {
                  $timeout (function() {$scope.state = data.state});
            },
            function (err) {
                console.log ("ERR:"+JSON.stringify(err));
                $scope.state = "error:"+JSON.stringify(err);
            });
        };

        function onStart(data) {
                startCount++;
                console.log ("JS LAND - got onStart "+startCount+" times" );
        }

        function onStop(data) {
                stopCount++;
                console.log ("JS LAND - got onStop " + stopCount+" times");
        }
})

