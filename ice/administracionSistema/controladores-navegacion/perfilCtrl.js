app.controller('perfilCtrl', ['$scope', '$http', 'Perfiles', '$routeParams', function ($scope, $http, Perfiles, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mPerfiles');
        $scope.perfiles = {};
        $scope.infoPerfil = {};


        $scope.moverE = function (pag) {
            Perfiles.cargan(pag).then(function () {
                $scope.perfiles = Perfiles;

            });
        };

        $scope.moverE(pag);


        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalPerfil = function (perfil) {
            angular.copy(perfil, $scope.infoPerfil);

            $("#modal_perfil").modal();

        };

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================


        $scope.guardarPerfil = function (perfil) {

            Perfiles.guardarPerfil(perfil).then(function () {
                $("#modal_perfil").modal('hide');
                $scope.infoPerfil = {};
            });

        };




        $scope.borrarPerfil = function (idPerfil) {
            console.log(idPerfil);
            $http.get('./php/borrarPerfil.php?id=' + idPerfil).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $scope.moverE(pag);


            });
        };

    }]);




