app.controller('sucCtrl', ['$scope', '$http', 'Sucursales', '$routeParams', function ($scope, $http, Sucursales, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mSucursales');
        $scope.sucursales = {};
        $scope.infoSuc = {};


        $scope.moverP = function (pag) {
            Sucursales.cargar(pag).then(function () {
                $scope.sucursales = Sucursales;

            });
        };

        $scope.moverP(pag);


        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarSucursal = function (sucursal) {
            //console.log(ciudad);
            angular.copy(sucursal, $scope.infoSuc);

            $("#modal_sucursales").modal();

        };

        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
            //  console.log($scope.nomCliente);
            $scope.nomCliente = arrayClientes;
        });



        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================

        $scope.guardarSuc = function (sucursal) {
           
            Sucursales.guardarSucursal(sucursal).then(function () {
                $("#modal_sucursales").modal('hide');
                
                
                $scope.infoSuc = {};
                // console.log(seleccion);
                console.log(sucursal);
            });

        };
//
//        //=================================================================
//        // FUNCION BORRAR
//        //=================================================================
//
//
//        $scope.borrarCd = function (idSucu) {
//            console.log(idCiudad);
//            $http.get('./php/eliminarCiudad.php?id=' + idCiudad).success(function () {
//
//                swal("Excelente!", "Registro eliminado!", "success");
//                $scope.moverB(pag);
//
//
//            });
//        };

    }]);




