
app.controller('serviciosCtrl', ['$scope', '$http', 'Servicios', '$routeParams', function ($scope, $http, Servicios, $routeParams) {

        var idCliente = $routeParams.idCliente;

        $scope.activar('mServicios');
        $scope.servicios = {};
        $scope.infoServicio = {};


        $http.get('../administracionClientes/php/consultaTblServicios.php?c=' + idCliente).success(function (data) {
            $scope.servicios = data;
            console.log("ESTOY RECIBIENDO EL IDCLIENTE como parametro: " + idCliente);
        });


        

    }]);










