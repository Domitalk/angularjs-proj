var myApp = angular.module('myApp', ['ngRoute', 'ngResource', 'ngMessages'])

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
}])

myApp.controller('mainController', ['$scope', function ($scope) {

    
}])