app.controller('equiposClientesCtrl', ['$scope', '$http', 'Equipos', '$routeParams', function ($scope, $http, Equipos, $routeParams) {

    //   $scope.idCli = ($routeParams.idCliente).toString();

        $scope.activar('mEquipos');
        $scope.equipos = {};
        $scope.infoEquipo = {};

        $http.get('../administracionClientes/php/consultaTblEquipos.php' ).success(function (data) {
            $scope.equipos = data;
        });


    }]);









