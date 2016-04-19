app.controller('tecnicoCtrl', ['$scope', '$http', 'Tecnicos', '$routeParams', function ($scope, $http, Tecnicos, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mTecnico');
        $scope.tecnicos = {};
        $scope.infoTec = {};


        $scope.moverC = function (pag) {
            Tecnicos.pagina(pag).then(function () {
                $scope.tecnicos = Tecnicos;

            });
        };

        $scope.moverC(pag);


        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalTec = function (tecnico) {
            angular.copy(tecnico, $scope.infoTec);

            $("#modal_tecnicos").modal();

        };

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================


        $scope.guardarTec = function (tecnico) {

            Tecnicos.guardarTecnico(tecnico).then(function () {
                $("#modal_tecnicos").modal('hide');
                $scope.infoTec = {};
            });

        };




        $scope.borrarTec = function (idTecnico) {
            console.log(idTecnico);
            $http.get('./php/eliminarTecnico.php?id=' + idTecnico).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $scope.moverC(pag);


            });
        };

    }]);




