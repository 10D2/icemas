app.controller('clientesCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mClientes');

        $scope.tblCliente = {};
        $http.get('./php/consultaTablaClientes.php').success(function (arrayTablaCliente) {
            console.log($scope.tblCliente);
            $scope.tblCliente = arrayTablaCliente;


        });
        
        $scope.cliente = {};
        $http.get('./php/modalCliente.php').success(function (data) {
            console.log($scope.cliente);
            $scope.cliente = data;


        });
        
        
        
        
        
         //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostralModalClientes = function () {

            $("#modal_clientes").modal();

        };

    }]);



