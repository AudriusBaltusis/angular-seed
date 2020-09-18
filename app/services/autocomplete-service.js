'use strict';

angular.module('myApp.services', []).factory('dataFactory', function ($http) {
    return {
        get: function (url) {
            return $http.get(url).then(function (resp) {
                return resp.data;
            });
        }
    };
});
