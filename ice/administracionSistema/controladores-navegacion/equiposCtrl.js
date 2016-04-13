app.controller('equiposCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mEquipos');
        
        
        $scope.tblEquipo = {};
        $http.get('./php/consultaTblEquipos.php').success(function (arrayTblEquipo) {
            console.log($scope.tblEquipo);
            $scope.tblEquipo = arrayTblEquipo;

        });
        
    }]);




