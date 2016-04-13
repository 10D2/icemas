app.controller('sucCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {


        var codigo = $routeParams.idSucursal;

        //=================================================================
        // FUNCION EDITAR/CREAR SUCURSAL
        //=================================================================


        $scope.creando = false;

        if (codigo === "nuevo") {
            $scope.creando = true;
        } else
        {
            $scope.infoSuc = {};
            $http.get('./php/getFormularioSucursal.php?c=' + codigo).success(function (data) {
                $scope.infoSuc = data;
                console.log($scope.infoSuc);
            });
        }

        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
            console.log($scope.nomCliente);
            $scope.nomCliente = arrayClientes;
        });



        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================



        $scope.guardarSuc = function () {
            if ($scope.creando) {
                // $scope.infoSuc.idCliente = $scope.menuSeleccionado.idmunicipio;
                $scope.infoSuc.idCliente= $scope.clienteSel.idCliente;
                alert($scope.infoSuc.idCliente);
                $http.post('./php/insertarSucursal.php', $scope.infoSuc).success(function () {
                    console.log($scope.infoSuc);
                });

                $scope.actualiza = true;

            } else {
             
                $scope.infoSuc.idCliente= $scope.clienteSel.idCliente;
                $http.post('./php/actualizarSucursal.php', $scope.infoSuc).success(function () {
                    console.log($scope.infoSuc);
                });

                $scope.actualiza = true;
                
            }
        };



        //    $scope.infoSuc.idcliente = 
//            $http.post('./php/actualizarSucursal.php', $scope.infoSuc).success(function () {
//                console.log($scope.infoSuc);
//                $scope.infoSuc.idcliente = $scope.menuSeleccionado.idcliente;
//                //$("#modal_sucrusal").modal('hide');
//                $scope.infoSuc = {};
//                frmSucursal.autoValidateFormOptions.resetForm();
//                
//            });


    }]);



