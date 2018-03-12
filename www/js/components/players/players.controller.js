angular.module('dartsApp.playersCtrl', [])

    .controller('playersCtrl', function ($scope, $ionicPopup, singlePlayerService) {

        $scope.$on('$ionicView.enter', function () {
            //console.warn('players CTLR on Enter...');

            $scope.playersListDataArray = angular.fromJson(localStorage.getItem('playersList'));
            console.warn('list of players in local storage', $scope.playersListDataArray);
        });

        $scope.playersList = [];

        $scope.createNewPlayerClick = function () {
            $scope.newPlayerDataModel = {};

            var newPlayerPopUp = $ionicPopup.show({
                template:
                '<input type="text" placeholder="First name" ng-model="newPlayerDataModel.firstName" style="margin-bottom: 10px">' +
                '<input type="text" placeholder="Nick name" ng-model="newPlayerDataModel.nickName" style="margin-bottom: 10px">' +
                '<input type="text" placeholder="Last name" ng-model="newPlayerDataModel.lastName">',
                title: 'Create new player',
                subTitle: 'Fill in players info',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Confirm</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if ((!$scope.newPlayerDataModel.firstName && !$scope.newPlayerDataModel.lastName) ||
                                (!$scope.newPlayerDataModel.firstName && !$scope.newPlayerDataModel.lastName && !$scope.newPlayerDataModel.lastName)) {
                                //don't allow the user to close unless he enters info
                                e.preventDefault();
                            } else {
                                // send the new player info to singlePlayerService to add to dom
                                singlePlayerService.addNewPlayerToDom($scope.newPlayerDataModel.firstName, $scope.newPlayerDataModel.nickName, $scope.newPlayerDataModel.lastName);
                                return $scope.newPlayerDataModel.firstName + $scope.newPlayerDataModel.lastName + $scope.newPlayerDataModel.nickName;
                            }
                        }
                    }
                ]
            });

            newPlayerPopUp.then(function () {

                console.log('new player created', $scope.newPlayerDataModel);
                // if there is no players list create one, then push the new player to the array
                if (!localStorage.getItem('playersList')) {
                    $scope.playersList.push($scope.newPlayerDataModel);
                    localStorage.setItem('playersList', angular.toJson($scope.playersList));
                    console.warn('no players in local storage, creating new list');
                } else {
                    var temp = angular.fromJson(localStorage.getItem('playersList'));
                    temp.push($scope.newPlayerDataModel);
                    localStorage.setItem('playersList', angular.toJson(temp));
                    console.warn('adding new player to existing list');
                }


            });
        };


    });





