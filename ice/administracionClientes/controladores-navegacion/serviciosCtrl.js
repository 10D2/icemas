
app.controller('serviciosClientesCtrl', ['$scope', '$http', 'Servicios', '$routeParams', function ($scope, $http, Servicios, $routeParams) {

        $scope.activar('mServicios');
        $scope.servicios = {};
        $scope.infoServicio = {};
        
        $http.get('../administracionClientes/php/consultaTblServicios.php' ).success(function (data) {
            $scope.servicios = data; 
        });


    }]);










