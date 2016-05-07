app.controller('sucCtrl', ['$scope', '$http', 'Sucursales', '$routeParams', function ($scope, $http, Sucursales, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mSucursales');
        $scope.sucursales = {};
        $scope.infoSuc = {};
        $scope.eligeCd = {};
        $scope.seleccionado = {};


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
            $scope.eligeCd.idCliente = sucursal.idCliente;
            $scope.seleccionado.idCiudad = sucursal.idCiudad;
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
            $scope.infoSuc.idCliente = $scope.eligeCd;
            $scope.infoSuc.idCiudad = $scope.seleccionado;
            Sucursales.guardarSucursal($scope.infoSuc).then(function () {
                $("#modal_sucursales").modal('hide');
                $scope.infoSuc = {};
                // console.log(seleccion);
                console.log(sucursal);
            });
             $scope.moverP(pag);
        };


        $scope.nomCiudad = {};
        $http.get('./php/nombresCiudades.php').success(function (arrayCiudades) {
            $scope.nomCiudad = arrayCiudades;
        });


    }]);




