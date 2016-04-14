app.controller('fClienteCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {


        var codigo = $routeParams.idCliente;

        //=================================================================
        // FUNCION EDITAR/CREAR SUCURSAL
        //=================================================================


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

        $scope.nomCiudad = {};
        $http.get('./php/nombresCiudades.php').success(function (arrayCiudades) {
            console.log($scope.nomCiudad);
            $scope.nomCiudad = arrayCiudades;
        });

        $scope.nomSucursal = {};
        $http.get('./php/nombresSucursales.php').success(function(arraySucursal){
            $scope.nomSucursal = arraySucursal;
        });


        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================



        $scope.guardarCliente = function () {
            if ($scope.creando) {
                // $scope.infoSuc.idCliente = $scope.menuSeleccionado.idmunicipio;
                $scope.infoCliente.idCiudad= $scope.ciudadSel.idCiudad;
                $scope.infoCliente.idSucursal = $scope.sucSel.idSucursal;
               
                $http.post('./php/insertarCliente.php', $scope.infoCliente).success(function () {
                  
                });

                $scope.actualiza = true;

            } else {
             
                $scope.infoCliente.idCiudad= $scope.ciudadSel.idCiudad;
                $scope.infoCliente.idSucursal = $scope.sucSel.idSucursal;
               
                $http.post('./php/actualizarCliente.php', $scope.infoCliente).success(function () {
                    console.log($scope.infoCliente);
                });

                $scope.actualiza = true;
                
            }
        };


    }]);



