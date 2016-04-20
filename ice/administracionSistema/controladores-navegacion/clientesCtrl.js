app.controller('clientesCtrl', ['$scope', '$http', 'Clientes', '$routeParams', function ($scope, $http, Clientes, $routeParams) {

        var pag = $routeParams.pag;
        var codigo = $routeParams.idCliente;

        $scope.activar('mClientes');
        $scope.clientes = {};
        $scope.infoCliente = {};
        $scope.infoDireccion = {};

        $scope.moverG = function (pag) {
            Clientes.paginaC(pag).then(function () {
                $scope.clientes = Clientes;

            });
        };

        $scope.moverG(pag);

        $scope.creando = false;
        if (codigo === "nuevo") {
            $scope.creando = true;
        } else
        {
            $scope.infoCliente = {};
            $http.get('./php/getFormularioCliente.php?c=' + codigo).success(function (data) {
                $scope.infoCliente = data;
                console.log($scope.infoCliente);
            });
        }




        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalCliente = function (cliente) {
            angular.copy(cliente, $scope.infoCliente);

            $("#modal_clientes").modal();

        };

        $scope.mostrarModalDireccion = function () {
            angular.copy($scope.infoDireccion);

            $("#modal_direccion").modal();

        };


        //================================================================
        //================================================================

        $scope.nomSucursal = {};
        $http.get('./php/nombresSucursales.php').success(function (arraySucursal) {
            $scope.nomSucursal = arraySucursal;
        });

        $scope.nomCiudad = {};
        $http.get('./php/nombresCiudades.php').success(function (arrayCiudades) {
            $scope.nomCiudad = arrayCiudades;
        });
        
        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
            console.log($scope.nomCliente);
            $scope.nomCliente = arrayClientes;
        });

        $scope.infoDireccion = {};
        $http.get('./php/getFormularioDireccion.php?c=' + codigo).success(function (data) {
            $scope.infoDireccion = data;
        });

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================


        $scope.guardarCliente = function (cliente) {

            Clientes.guardaCliente(cliente).then(function () {
                $("#modal_clientes").modal('hide');
                $scope.infoCliente = {};
            });

        };

//        $scope.guardarDireccion = function () {
//
//            $scope.infoDireccion.idCliente = $scope.seleCliente.idCliente;
//            $scope.infoDireccion.idCiudad = $scope.seleCiudad.idCiudad;
//
//            $http.post('./php/actualizarDireccion.php', $scope.infoDireccion).success(function () {
//                console.log($scope.infoDireccion);
//            });
//
//        };



        $scope.borrarCliente = function (idCliente) {
            console.log(idCliente);
            $http.get('./php/eliminarTecnico.php?id=' + idCliente).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $scope.moverC(pag);


            });
        };

    }]);


