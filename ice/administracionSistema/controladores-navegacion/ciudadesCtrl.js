app.controller('ciudadesCtrl', ['$scope', '$http', 'Ciudades', '$routeParams', function ($scope, $http, Ciudades, $routeParams) {

        var pag = $routeParams.pag;


        $scope.activar('mCiudades');
        $scope.ciudades = {};



        $scope.moverA = function (pag) {
            Ciudades.cargarPagina(pag).then(function () {
                $scope.ciudades = Ciudades;

            });
        };

        $scope.moverA(pag);


//        $scope.infoCd = {};
//        $scope.tablaCd = {};
//        $http.get('./php/consultaTablaCiudades.php').success(function (arrayTablaCd) {
//            console.log($scope.tablaCd);
//            $scope.tablaCd = arrayTablaCd;
//
//        });

        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalCd = function () {

            $("#modal_ciudades").modal();

        };

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================



        $scope.guardarCd = function () {
            //    $scope.infoSuc.idcliente = 
            $http.post('./php/insertarCiudad.php', $scope.infoCd).success(function () {
                console.log($scope.infoCd);
                $http.get('./php/consultaTablaCiudades.php').success(function (arrayTablaCd) {
                    console.log($scope.tablaCd);
                    $scope.tablaCd = arrayTablaCd;

                });
                $("#modal_ciudades").modal('hide');
                $scope.infoCd = {};

            });

        };



        $scope.borrarCd = function (idCiudad) {
            console.log(idCiudad);
            $http.get('./php/eliminarCiudad.php?id=' + idCiudad).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $http.get('./php/consultaTablaCiudades.php').success(function (arrayTablaCd) {
                    console.log($scope.tablaCd);
                    $scope.tablaCd = arrayTablaCd;

                });

            });
        };



    }]);




