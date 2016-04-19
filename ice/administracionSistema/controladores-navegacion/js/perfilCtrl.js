//app.controller('hj', ['$scope', '$http', function ($scope, $http) {
//
//        $scope.activar('mPerfiles');
//
//        $scope.infoPerfil = {};
//        $scope.perfiles = {};
//        $http.get('./php/consultaTblPerfiles.php').success(function (arrayPerfiles) {
//            console.log($scope.perfiles);
//            $scope.perfiles = arrayPerfiles;
//
//        });
//
//        //================================================================
//        // MOSTRAR MODAL 
//        //================================================================
//
//        $scope.mostrarModalPerfil = function () {
//
//            $("#modal_perfil").modal();
//
//        };
//
//
//        //=================================================================
//        // FUNCION GUARDAR DATOS
//        //=================================================================
//
//
//
//        $scope.guardarPerfil = function () {
//            $http.post('./php/insertarPerfil.php', $scope.infoPerfil).success(function () {
//
//                $http.get('./php/consultaTblPerfiles.php').success(function (arrayPerfiles) {
//                    console.log($scope.perfiles);
//                    $scope.perfiles = arrayPerfiles;
//
//                });
//                $("#modal_perfil").modal('hide');
//                
//                $scope.infoPerfil = {};
//
//            });
//
//        };
//
//        //=================================================================
//        // FUNCION BORRAR
//        //=================================================================
//
//
//        $scope.borrarPerfil = function (idPerfil) {
//            console.log(idPerfil);
//            $http.get('./php/borrarPerfil.php?id=' + idPerfil).success(function () {
//
//                swal("Excelente!", "Registro eliminado!", "success");
//
//                $http.get('./php/consultaTblPerfiles.php').success(function (arrayPerfiles) {
//                    console.log($scope.perfiles);
//                    $scope.perfiles = arrayPerfiles;
//
//                });
//
//            });
//        };
//
//
//
//    }]);
//
//
//
//
