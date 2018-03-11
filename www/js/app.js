angular.module('dartsApp', [
    'ionic',
    'ionMDRipple',

    'dartsApp.dashboardCtrl',
    'dartsApp.boardPageCtrl',
    'dartsApp.settingsCtrl',
    'dartsApp.playersCtrl',

    'dartsApp.directive.boardItem',
    'dartsApp.directive.singlePlayerInfo',

    'services.boardItemsService',
    'services.singlePlayerService'
])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            .state('tab.dashboard', {
                url: '/dashboard',
                views: {
                    'tab-dashboard': {
                        templateUrl: 'templates/dashboard/tab-dashboard.html',
                        controller: 'dashboardCtrl'
                    }
                }
            })


            .state('tab.board', {
                url: '/board',
                views: {
                    'tab-board': {
                        templateUrl: 'templates/boardPage/tab-board.html',
                        controller: 'boardPageCtrl'
                    }
                }
            })

            .state('tab.players', {
                url: '/players',
                views: {
                    'tab-players': {
                        templateUrl: 'templates/players/tab-players.html',
                        controller: 'playersCtrl'
                    }
                }
            })

            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'templates/settings/tab-settings.html',
                        controller: 'settingsCtrl'
                    }
                }
            });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dashboard');

    });
