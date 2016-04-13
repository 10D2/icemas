app.controller('sucCtrl', ['$scope', '$http','$routeParams' , function ($scope, $http,$routeParams) {

        $scope.activar('mSucursales');

        var codigo = $routeParams.idSucursal;


        //$scope.infoSuc = {};
        $scope.tablaSuc = {};
        $http.get('./php/consultaTablaSucursales.php').success(function (arrayTablaSuc) {
            console.log($scope.tablaSuc);
            $scope.tablaSuc = arrayTablaSuc;
        });

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
            });
        }




        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================

    

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



