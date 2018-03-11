;(function () {
    'use strict';

    var singlePlayerService = function ($rootScope) {

        var self = this;

        self.playersList = [];
        self.plyaerInfo = [
            {
                "id" : "",
                "name": "",
                "nickName": ""
            }
        ];



    }; // service function END

    angular.module("services.singlePlayerService", [])
        .service("singlePlayerService", singlePlayerService);

}())
