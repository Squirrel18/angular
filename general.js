var app = angular.module('fisrtApp', []);

app.controller('fisrtAppController', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.colorP = "#95ff95";
    $scope.names = ['one', 'two', 'three', 'kind', 'some', 'other', 'stuff'];
});

console.log(app);
