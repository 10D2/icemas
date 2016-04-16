app.controller('tipoServ', ['$scope', '$http', 'TipoServicio', '$routeParams', function ($scope, $http, TipoServicio, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mTipos');
        $scope.tipos = {};
        $scope.infoTserv = {};

        $scope.moverA = function (pag) {
            TipoServicio.cargarPagina(pag).then(function () {
                $scope.tipos = TipoServicio;

            });
        };

        $scope.moverA(pag);

        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.modalTservicios = function (tipo) {

            angular.copy(tipo, $scope.infoTserv);
            $("#modal_tServicios").modal();

        };

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================


        $scope.guardartipo = function (tipo) {

            TipoServicio.guardarTipo(tipo).then(function () {
                $("#modal_tServicios").modal('hide');
                $scope.infoTserv = {};
            });

        };

        //=====================================================
        //  FUNCION BORRAR
        //=====================================================


        $scope.borrarTserv = function (idTipo) {
            $http.get('./php/borrarTipoServicio.php?id=' + idTipo).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $scope.moverA(pag);


            });
        };


    }]);




