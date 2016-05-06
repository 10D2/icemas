
app.controller('serviciosClientesCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mServicios');
        $scope.servicios = {};
        $scope.infoServicio = {};
        
        $http.get('../administracionClientes/php/consultaTblServicios.php' ).success(function (data) {
            $scope.servicios = data; 
        });


    }]);










