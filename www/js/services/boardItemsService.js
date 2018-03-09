;(function () {
    'use strict';

    var boardItemsService = function ($rootScope) {

        var self = this;

        // todo: add this from new game settings TBD
        self.limitSingleTurn = 4;

        self.singleTurnCounter = 0;
        self.singleTurnScore = 0;

        // reset single game
        self.resetTurn = function () {

            self.singleTurnCounter = 0;
            self.singleTurnScore = 0;
            console.warn('reset turn...');

        };

        // receive the single turn scores
        self.countSingleTurnScore = function (inc, score) {

            self.singleTurnCounter += inc;
            self.singleTurnScore += score;

            $rootScope.$broadcast('single-player-score', self.singleTurnScore);

            if (self.singleTurnCounter < self.limitSingleTurn ) {
                console.warn('turns submitted: ', self.singleTurnCounter, 'score is: ', self.singleTurnScore);
            } else {
                console.error('you past the limit of turns: ', self.limitSingleTurn, 'your score is: ', self.singleTurnScore);
                self.singleTurnCounter = 0;
            }
        }

        self.resetToPreviousScore = function (previousScore) {
            self.singleTurnScore = previousScore;
        };


    }; // service function END

    angular.module("services.boardItemsService", [])
        .service("boardItemsService", boardItemsService);

}())
