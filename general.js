/*var app = angular.module('fisrtApp', []);

app.controller('fisrtAppController', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.colorP = "#95ff95";
    $scope.names = ['one', 'two', 'three', 'kind', 'some', 'other', 'stuff'];
});*/

angular.module('costCalc', [])
    .controller('costCalcController', function costCalcController() {
        this.hr = 0;
        this.employeeSelect = "";
        this.employee = {
            'list': [
                {'name': 'one', 'rol': 'admin', 'cost': 1},
                {'name': 'two', 'rol': 'normal', 'cost': 2},
                {'name': 'three', 'rol': 'superuser', 'cost': 5}
            ]
        };
        this.find = function find(select) {
            for(x of this.employee.list) {
                if(x.name === this.employeeSelect) {
                    return x.cost;
                }
            } 
        };
        this.total = function total(select) {
            return this.find(select) * this.hr;
        };
    });
