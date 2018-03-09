(function () {
    'use strict';


    var singlePlayerInfoController = function ($scope, $timeout, boardItemsService) {

        $timeout(function () {
            console.warn('player info directive loaded: ');
        }, 500); // controller timeout END

        // init
        $scope.playersGameScore = 0;
        $scope.passedThreeHundred = false;
        $scope.gameWon = false;
        $scope.previousScore = 0;

        $scope.$on('single-player-score', function (event, data) {

            $scope.passedThreeHundred = false;
            $scope.previousScore = $scope.playersGameScore;
            $scope.playersGameScore = data;

            if ($scope.playersGameScore > 301) {
                console.error("you passed 301!");
                $scope.passedThreeHundred = true;
                $scope.playersGameScore = $scope.previousScore;
                boardItemsService.resetToPreviousScore($scope.previousScore);
            }

            if ($scope.playersGameScore === 301) {
                console.error("you win!");
                $scope.gameWon = true;
                $timeout(function () {
                    $scope.resetPlayerGame();
                }, 2000); // controller timeout END

            }

            //console.warn('player score received: ', data);
        });


        // reset game data
        $scope.resetPlayerGame = function () {
            $scope.playersGameScore = 0;
            $scope.passedThreeHundred = false;
            $scope.gameWon = false;
        };


    }; // controller end

    var singlePlayerInfoLink = function (scope, element, attrs) {

    };


    var singlePlayerInfo = function () {
        return {
            templateUrl: '../templates/boardPage/singlePlayerInfo.directive.html',
            controller: singlePlayerInfoController,
            link: singlePlayerInfoLink
        }
    };

    angular.module("dartsApp.directive.singlePlayerInfo", [])
        .directive('singlePlayerInfo', singlePlayerInfo);


}());
