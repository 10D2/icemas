app.controller('serviciosCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mServicios');
        
        //$scope.infoCd = {};
        $scope.tblServicio = {};
        $http.get('./php/consultaTblServicios.php').success(function (arrayTblServ) {
            console.log($scope.tblServicio);
            $scope.tblServicio = arrayTblServ;

        });

        
    }]);




