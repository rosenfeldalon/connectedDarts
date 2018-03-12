;(function () {
    'use strict';

    var singlePlayerService = function ($rootScope, $compile) {

        var self = this;

        self.addNewPlayerToDom = function (firstName, nickName, lastName) {
            console.warn('player service received: ', firstName, nickName, lastName);

            var scope = $rootScope.$new(true);

            var el = $compile(
                '<li class="single-player existing-player">' +
                '<player-details\n' +
                '                    data-player-first-name="' + firstName +'"\n' +
                '                    data-player-nick-name="' + nickName + '"\n' +
                '                    data-player-last-name="' + lastName + '">' +

                '</player-details>' +
                '</li>'
            )(scope);

            angular.element('.players-list').append(el);
        }


    }; // service function END

    angular.module("services.singlePlayerService", [])
        .service("singlePlayerService", singlePlayerService);

}())
