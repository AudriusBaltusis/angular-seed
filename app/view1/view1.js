'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'dataFactory', function ($scope, dataFactory) {
        dataFactory.get('assets/dudes.json').then(function (data) {
            $scope.items = data;
        });
        $scope.person = '';
        $scope.onItemSelected = function () {
            console.log('Selected person: ' + $scope.person);
        };
    }]);
