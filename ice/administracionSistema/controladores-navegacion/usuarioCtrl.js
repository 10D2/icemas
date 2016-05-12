app.controller('userCtrl', ['$scope', '$http', 'Usuarios', '$routeParams', function ($scope, $http, Usuarios, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mUsuarios');
        $scope.usuarios = {};
        $scope.infoUser = {};
        $scope.valorCliente = "";
        $scope.seleccionarPerfil = "";
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

            $scope.valorCliente = "" + usuario.idCliente + "";
//           alert($scope.valorCliente);
            console.log(usuario.idPerfil);
            $scope.seleccionarPerfil = "" + usuario.idPerfil + "";
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




        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================

        $scope.guardarUser = function (usuario) {
            $scope.infoUser.idCliente = $scope.valorCliente;
            $scope.infoUser.idPerfil = $scope.seleccionarPerfil;
            Usuarios.guardarUsuarios($scope.infoUser).then(function () {
                $("#modal_usuarios").modal('hide');
                $scope.infoUser = {};
//                console.log(usuario);
            });
//            Usuarios.guardarUsuarios(usuario).then(function () {
//                $("#modal_usuarios").modal('hide');
//
//
//                $scope.infoUser = {};
//                console.log(usuario);
//            });
            $scope.infoUser = {};
            $scope.valorCliente = {};
            $scope.seleccionarPerfil = {};
            $scope.moverF(pag);

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












