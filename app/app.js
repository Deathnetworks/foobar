'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'highcharts-ng',
    'myApp.view1',
    'myApp.view2',
    'myApp.highstocks',
    'myApp.highstocks2',
    'myApp.device'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);