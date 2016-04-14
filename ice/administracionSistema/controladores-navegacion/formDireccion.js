app.controller('direccionCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {


        var codigo = $routeParams.idDireccion;

        //=================================================================
        // FUNCION EDITAR/CREAR SUCURSAL
        //=================================================================


        $scope.creando = false;

        if (codigo === "nuevo") {
            $scope.creando = true;
        } else
        {
            $scope.infoDireccion = {};
            $http.get('./php/getFormularioDirecciones.php?c=' + codigo).success(function (data) {
                $scope.infoDireccion = data;
                console.log($scope.infoDireccion);
            });
        }

        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
            console.log($scope.nomCliente);
            $scope.nomCliente = arrayClientes;
        });

        $scope.nomCiudad = {};
        $http.get('./php/nombresCiudades.php').success(function (arrayCiudades) {
            console.log($scope.nomCiudad);
            $scope.nomCiudad = arrayCiudades;
        });

       


        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================



        $scope.guardarDireccion = function () {
            if ($scope.creando) {
                // $scope.infoSuc.idCliente = $scope.menuSeleccionado.idmunicipio;
                $scope.infoDireccion.idCliente= $scope.selCliente.idCliente;
                $scope.infoDireccion.idCiudad = $scope.selCiudad.idCiudad;
               
                $http.post('./php/insertarSucursal.php', $scope.infoDireccion).success(function () {
                  
                });

                $scope.actualiza = true;

            } else {
             
                $scope.infoSuc.idCliente= $scope.clienteSel.idCliente;
                $http.post('./php/actualizarSucursal.php', $scope.infoDireccion).success(function () {
                    console.log($scope.infoSuc);
                });

                $scope.actualiza = true;
                
            }
        };


    }]);



