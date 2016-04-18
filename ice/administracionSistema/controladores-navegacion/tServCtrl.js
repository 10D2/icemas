app.controller('tipoServ', ['$scope', '$http', 'Tipos', '$routeParams', function ($scope, $http, Tipos, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mTipos');
        $scope.tipos = {};
        $scope.infoTserv = {};



        $scope.moverC = function (pag) {
            Tipos.paginaCargar(pag).then(function () {
                $scope.tipos = Tipos;

            });
        };

        $scope.moverC(pag);

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


        $scope.guardartipoS = function (tipo) {

            Tipos.guardarTipos(tipo).then(function () {
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




