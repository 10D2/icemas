
app.controller('usuarioCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {


        var codigo = $routeParams.idUsuario;

        //=================================================================
        // FUNCION EDITAR/CREAR SUCURSAL
        //=================================================================


        $scope.creando = false;

        if (codigo === "nuevo") {
            $scope.creando = true;
        } else
        {
            $scope.infoUsuario = {};
            $http.get('./php/getFormularioUsuarios.php?c=' + codigo).success(function (data) {
                $scope.infoUsuario = data;
                console.log($scope.infoUsuario);
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
               
                $http.post('./php/insertarSucursal.php', $scope.infoSuc).success(function () {
                  
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


    }]);



