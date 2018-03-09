angular.module('dartsApp.boardPageCtrl', [])

    .controller('boardPageCtrl', function ($scope, $http, boardItemsService) {
        $scope.singleBoardItem = "";

        // load board list

        $http.get("./config/boardList.json")
            .success(function (boardListJson) {

                $scope.boardList = boardListJson;

                // reset game
                //  todo: should this be here
                boardItemsService.resetTurn();

                //console.warn('board items full list: ', $scope.boardList);


            })
            .error(function (error) {
                console.error("ERROR IN JSON", error);
            });


        // click reset game
        $scope.resetTurnClick = function () {
            boardItemsService.resetTurn();
        };

        // missed board click
        $scope.missedBoardClick = function () {
            boardItemsService.countSingleTurnScore(1, 0);
        };
    });





