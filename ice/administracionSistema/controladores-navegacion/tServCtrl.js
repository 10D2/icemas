app.controller('tipoServ', ['$scope', '$http', 'Tipos', '$routeParams', function ($scope, $http, Tipos, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mTecnico');
        $scope.tipos = {};
        $scope.infoTserv = {};


        $scope.moverD = function (pag) {
            Tipos.cargarPag(pag).then(function () {
                $scope.tipos = Tipos.tiposervicio;
                console.log($scope.tipos);
            });
        };

        $scope.moverD(pag);


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

            Tipos.guardarTServicio(tipo).then(function () {
                $("#modal_tServicios").modal('hide');
                $scope.infoTserv = {};
            });

        };




        $scope.borrarTserv = function (idTipo) {
            console.log(idTipo);
            $http.get('./php/eliminarTecnico.php?id=' + idTipo).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $scope.moverD(pag);


            });
        };

    }]);




