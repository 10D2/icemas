app.controller('clientesCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mClientes');

        $scope.tblCliente = {};
        $http.get('./php/consultaTablaClientes.php').success(function (arrayTablaCliente) {
            console.log($scope.tblCliente);
            $scope.tblCliente = arrayTablaCliente;

//            var cont = 10;
//            $scope.totalNoticias = $scope.tablaNota.length;
//            $scope.posicion = cont;
//            $scope.siguientes = function () {
//                if ($scope.tablaNota.length > $scope.posicion) {
//                    $scope.posicion += cont;
//                }
//                ;
//            };
//            $scope.anteriores = function () {
//                if ($scope.posicion > cont) {
//                    $scope.posicion -= cont;
//                }
//                ;
//            };
        });
        
//        $scope.nomCliente = {};
//        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
//            console.log($scope.nomCliente);
//            $scope.nomCliente = arrayClientes;
//        });

    }]);



