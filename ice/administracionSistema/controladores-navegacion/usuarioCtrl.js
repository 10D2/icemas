app.controller('userCtrl', ['$scope', '$http', 'Usuarios', '$routeParams', function ($scope, $http, Usuarios, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mUsuarios');
        $scope.usuarios = {};
        $scope.infoUser = {};


        $scope.moverF = function (pag) {
            Usuarios.cargarP(pag).then(function () {
                $scope.usuarios = Usuarios;

            });
        };

        $scope.moverF(pag);


        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalUsuario = function (usuario) {
            angular.copy(usuario, $scope.infoUser);

            $("#modal_usuarios").modal();

        };

        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
            $scope.nomCliente = arrayClientes;
        });

        $scope.nomPerfil = {};
        $http.get('./php/nombresPerfiles.php').success(function (arrayPerfiles) {
            $scope.nomPerfil = arrayPerfiles;
        });



        $scope.obtenerInfoPerfil = function () {
            $scope.idPerfil = $scope.infoUser.seleccionar.idPerfil;
            console.log($scope.idPerfil);
            $http.post("./php/getPerfilesModal.php?idPerfil=" + $scope.idPerfil).success(function (info) {
                $scope.arrayPerfiles1 = info;
            });
        };



        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================

        $scope.guardarUser = function (usuario) {

            Usuarios.guardarUsuarios(usuario).then(function () {
                $("#modal_usuarios").modal('hide');


                $scope.infoUser = {};
                console.log(usuario);
            });

        };
//
//        //=================================================================
//        // FUNCION BORRAR
//        //=================================================================
//
//
        $scope.borrarUser = function (idUsuario) {
            console.log(idUsuario);
            $http.get('./php/eliminarUsuario.php?id=' + idUsuario).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $scope.moverF(pag);


            });
        };

    }]);












