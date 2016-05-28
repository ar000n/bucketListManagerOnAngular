var app = angular.module("basketball", []);

app.controller("myCtrl", function ($scope) {
    $scope.balls = ["one night at beach", "new bike", "a solo ride to vynad"];
    $scope.basket = [];
    $scope.addBall = function () {
        $scope.balls.push($scope.addMe);
    }
    $scope.removeBall = function (x) {
        $scope.balls.splice(x, 1);
    }
    $scope.moveToDone = function (x){
        $scope.basket.push($scope.balls[x])
        $scope.balls.splice(x, 1);
    }

});