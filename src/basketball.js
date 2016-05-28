var app = angular.module("basketball", []);

app.controller("myCtrl", function ($scope) {
    $scope.balls = ["one night at beach", "new bike", "a solo ride to vynad"];
    $scope.addBall = function () {
        $scope.balls.push($scope.addMe);
    }
    $scope.removeBall = function (x) {
        $scope.balls.splice(x, 1);
    }
});