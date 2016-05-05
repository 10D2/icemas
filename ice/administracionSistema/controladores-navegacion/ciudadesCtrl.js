app.controller('ciudadesCtrl', ['$scope', '$http', 'Ciudades', '$routeParams', function ($scope, $http, Ciudades, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mCiudades');
        $scope.ciudades = {};
        $scope.infoCd = {};


        $scope.moverA = function (pag) {
            Ciudades.cargarPagina(pag).then(function () {
                $scope.ciudades = Ciudades;

            });
        };

        $scope.moverA(pag);


        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalCd = function (ciudad) {
            //console.log(ciudad);
            angular.copy(ciudad, $scope.infoCd);

            $("#modal_ciudades").modal();

        };

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================


        $scope.guardarCd = function (ciudad) {

            Ciudades.guardar(ciudad).then(function () {
                $("#modal_ciudades").modal('hide');
                $scope.infoCd = {};
            });

        };

    }]);




