app.controller('clientesCtrl', ['$scope', '$http', 'Clientes', '$routeParams', function ($scope, $http, Clientes, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mClientes');
        $scope.clientes = {};

        $scope.moverZ = function (pag) {
            Clientes.paginaCliente(pag).then(function () {
                $scope.clientes = Clientes;

            });
        };

        $scope.moverZ(pag);


    }]);



