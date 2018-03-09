angular.module('dartsApp.dashboardCtrl', [])

    .controller('dashboardCtrl', function ($scope) {

        $scope.$on('$ionicView.enter', function(){
            console.warn('dashboard CTLR on Enter...');

            $scope.showGameSelectionList = false;
        });

        // show the new game list options
        $scope.newGameSelectionClick = function () {
            $scope.showGameSelectionList = true;
        };

        $scope.numberOfPlayers = {
            1: "One player",
            2: "Two players",
            3: "Three players",
            4: "Four players",
            5: "Five players"
        }

        // todo: add score limit, number of throws to options
        // todo: gather all the selections in ng-model form and submit to local storage

    });





