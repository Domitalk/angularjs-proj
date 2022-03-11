let myApp = angular.module('myApp', ['ngRoute', 'ngResource', 'ngMessages'])

const seedUsers = [
    { 
        id: 1,
        name: "John One",
        city: "New York",
        age: 111
    },
    {
        id: 2,
        name: "Jane Two",
        city: "Los Angeles",
        age: 22

    },
    {
        id: 3, 
        name: "George Three",
        city: "San Francisco",
        age: 33
    },
    {
        id: 4,
        name: "James Four",
        city: "Dallas",
        age: 44
    }
]


myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/pages/home.html',
            controller: 'mainController'
        })
        .when('/profile', {
            templateUrl: 'src/pages/profile.html',
            controller: 'profileController'
        })
        .when('/user/:id', {
            templateUrl: 'src/pages/userShow.html',
            controller: 'userProfileController'
        })
}])

myApp.controller('mainController', ['$scope', function ($scope) {
    $scope.user = seedUsers[0]

}])

myApp.controller('profileController', ['$scope', function ($scope) {
    $scope.user = seedUsers[0]


}])

myApp.controller('userProfileController', ['$scope', '$routeParams','searchUserService', function ($scope, $routeParams, searchUserService) {
    $scope.user = seedUsers[0]
    // console.log('$scope.user.id: ', $scope.user.id)
    // console.log('$routeParams.id', $routeParams.id)
    $scope.userGet = searchUserService.returnUser($scope.user.id, $routeParams.id)

}])

myApp.service('searchUserService', function () {
    this.returnUser = function (userId, paramsId) {
        let searchId = paramsId || userId
        return seedUsers.find((user) => user.id == searchId)

    }
 
})