app.controller('sucCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mSucursales');

        $scope.infoSuc = {};
        $scope.tablaSuc = {};
        $http.get('./php/consultaTablaSucursales.php').success(function (arrayTablaSuc) {
            console.log($scope.tablaSuc);
            $scope.tablaSuc = arrayTablaSuc;

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


        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
            console.log($scope.nomCliente);
            $scope.nomCliente = arrayClientes;
        });
        

        //================================================================
        // MOSTRAR MODAL DE EDICION
        //================================================================

        $scope.mostrarModal = function (suc) {

            angular.copy(suc, $scope.infoSuc);

            $("#modal_sucrusal").modal();

        };

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================
//
    

        $scope.guardarSuc = function (frmSucursal) {
       //    $scope.infoSuc.idcliente = 
            $http.post('./php/actualizarSucursal.php', $scope.infoSuc).success(function () {
                console.log($scope.infoSuc);
                $scope.infoSuc.idcliente = $scope.menuSeleccionado.idcliente;
                //$("#modal_sucrusal").modal('hide');
                $scope.infoSuc = {};
                frmSucursal.autoValidateFormOptions.resetForm();
                
            });

        };

    }]);



