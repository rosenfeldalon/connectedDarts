angular.module('dartsApp.settingsCtrl', [])

    .controller('settingsCtrl', function ($scope, $ionicPopup, $window) {

        $scope.$on('$ionicView.enter', function(){
            //console.warn('settings CTLR on Enter...');
        });

        $scope.showLocalStoragePopUp = function() {
            $scope.localStorageData = {};
            $scope.adminPassword = "alonthegreat";
            $scope.allowDelete = false;

            // local storage popup
            var localStoragePopUp = $ionicPopup.show({
                template: '<input type="password" ng-model="localStorageData.password">',
                title: 'Enter Admin Password',
                subTitle: 'This will erase all saved data...',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Confirm</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.localStorageData.password) {
                                //don't allow the user to close unless he enters admin password
                                e.preventDefault();
                            } else {
                                if ($scope.localStorageData.password !== $scope.adminPassword) {
                                    console.error('password is wrong!');
                                    e.preventDefault();
                                } else {
                                    $scope.allowDelete = true;
                                    return $scope.localStorageData.password;
                                }
                            }
                        }
                    }
                ]
            });

            localStoragePopUp.then(function() {
                console.log('Correct password, local storage data will be erased!');
                if ($scope.allowDelete) {
                    $window.localStorage.clear();
                }
            });
            
        };

    });





