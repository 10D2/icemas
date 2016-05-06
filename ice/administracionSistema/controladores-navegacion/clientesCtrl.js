app.controller('clientesCtrl', ['$scope', '$http', 'Clientes', '$routeParams', function ($scope, $http, Clientes, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mClientes');
        $scope.clientes = {};
        $scope.infoCliente = {};


        $scope.moverZ = function (pag) {
            Clientes.paginaCliente(pag).then(function () {
                $scope.clientes = Clientes;

            });
        };

        $scope.moverZ(pag);


        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.modalCliente = function (cliente) {
            angular.copy(cliente, $scope.infoCliente);

            $("#modal_clientes").modal();

        };


        
        //================================================================
        //================================================================

        
        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
        //    console.log($scope.nomCliente);
            $scope.nomCliente = arrayClientes;
        });




        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================


        $scope.guardarCliente = function (cliente) {

            Clientes.clientesGuardar(cliente).then(function () {
                $("#modal_clientes").modal('hide');
                $scope.infoCliente = {};
                
                console.log(cliente);
            });

        };


    }]);



