(function () {
    'use strict';


    var boardItemController = function ($scope, $timeout, boardItemsService) {

        // $timeout(function () {
        //
        //     console.warn('single directive id: ', $scope.boardItemId, ' value: ', $scope.boardItemValue, ' duplicate: ',$scope.boardItemDuplicate);
        // }, 500); // controller timeout END


        // init

        $scope.singleClickScore = 0;

        // click the item - receive value and duplicate key
        $scope.itemScoreClick = function (score, duplicate) {

            $scope.singleClickScore = score * duplicate;

            console.warn('item clicked for: ', score, 'duplicate x ', duplicate, 'score: ',  $scope.singleClickScore);

            // update the service with each click
            boardItemsService.countSingleTurnScore(1, $scope.singleClickScore);
        }


    }; // controller end

    var boardItemLink = function (scope, element, attrs) {

        scope.boardItemId = angular.fromJson(attrs.boardItemId);
        scope.boardItemValue = angular.fromJson(attrs.boardItemValue);
        scope.boardItemDuplicate = angular.fromJson(attrs.boardItemDuplicate);

    };


    var boardItem = function () {
        return {
            templateUrl: '../templates/boardPage/boardItem.directive.html',
            controller: boardItemController,
            link: boardItemLink
        }
    };

    angular.module("dartsApp.directive.boardItem", [])
        .directive('boardItem', boardItem);


}());
