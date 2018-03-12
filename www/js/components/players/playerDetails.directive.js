(function () {
    'use strict';


    var playerDetailsController = function ($scope, $timeout) {

        $timeout(function () {

            console.warn('playerDetails directive loaded');
        }, 500); // controller timeout END


        // init
        $scope.selectedPlayer = false;

        $scope.selectPlayerClick = function () {
            console.warn('select player clicked');
            $scope.selectedPlayer = !$scope.selectedPlayer;
        };
       


    }; // controller end

    var playerDetailsLink = function (scope, element, attrs) {

        scope.playerFirstName = attrs.playerFirstName;
        scope.playerNickName = attrs.playerNickName;
        scope.playerLastName = attrs.playerLastName;

    };


    var playerDetails = function () {
        return {
            templateUrl: '../templates/players/playerDetails.directive.html',
            controller: playerDetailsController,
            link: playerDetailsLink
        }
    };

    angular.module("dartsApp.directive.playerDetails", [])
        .directive('playerDetails', playerDetails);


}());
