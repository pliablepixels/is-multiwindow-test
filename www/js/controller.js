angular.module('starter', ['ionic'])
.controller('StarterCtrl', function($scope, $timeout, $ionicPlatform) {
        $scope.state = "unknown";
        var startCount = 0;
        var stopCount = 0;

        $ionicPlatform.ready (function () {
            window.MultiWindowPlugin.registerOnStop(onStop);
            window.MultiWindowPlugin.registerOnStart(onStart);
        });
        $scope.isMultiWindow = function() {
          window.MultiWindowPlugin.get(function (state) {
             $timeout (function() {$scope.state = state});
          },
          function (err) {
             console.log (" *************** ERR:"+JSON.stringify(err));
             $timeout (function() {$scope.state = "error:"+JSON.stringify(err);});
          });
        }

        $scope.isMultiWindow = function() {
             window.MultiWindowPlugin.get(function (data) {
                  $timeout (function() {$scope.state = data.state});
            },
            function (err) {
                console.log (" *************** ERR:"+JSON.stringify(err));
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

