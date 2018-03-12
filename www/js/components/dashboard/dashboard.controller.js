angular.module('dartsApp.dashboardCtrl', [])

    .controller('dashboardCtrl', function ($scope ,$state) {

        $scope.$on('$ionicView.enter', function(){
            //console.warn('dashboard CTLR on Enter...');
            $scope.newGame = {};
            $scope.showGameSelectionList = false;
        });

        // show the new game list options
        $scope.newGameSelectionClick = function () {
            $scope.showGameSelectionList = true;
        };

        $scope.numberOfPlayersArray = [
            {key: 1, value: "One player"},
            {key: 2, value: "Two player"},
            {key: 3, value: "Three player"},
            {key: 4, value: "Four player"},
            {key: 5, value: "Five player"}
        ];

        $scope.gameScoreLimitArray = [
            {key: 1, value: 101},
            {key: 2, value: 301}
        ];

        $scope.throwsPerTurnArray = [
            {key: 1, value: "Three Throws"},
            {key: 2, value: "Four Throws"}
        ];

        $scope.startNewGameClick = function () {

            localStorage.setItem('newGameInfo', angular.toJson($scope.newGame));
            console.warn('new game clicked: ', $scope.newGame);

            $state.go('tab.players');
        };
    });





