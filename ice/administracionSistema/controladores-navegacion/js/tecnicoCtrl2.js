//app.controller('tecnicoCtrl', ['$scope', '$http', function ($scope, $http) {
//
//        $scope.activar('mTecnico');
//
//        $scope.infoTec = {};
//        $scope.tblTecnico = {};
//        $http.get('./php/consultaTablaTecnico.php').success(function (arrayTablatnico) {
//            console.log($scope.tblTecnico);
//            $scope.tblTecnico = arrayTablatnico;
//
//        });
//
//        //================================================================
//        // MOSTRAR MODAL 
//        //================================================================
//
//        $scope.mostrarModalTec = function () {
//
//            $("#modal_tecnicos").modal();
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
//        $scope.guardarTec = function () {
//            $http.post('./php/insertarTecnico.php', $scope.infoTec).success(function () {
//                console.log($scope.infoTec);
//                $http.get('./php/consultaTablaTecnico.php').success(function (arrayTablatnico) {
//                    console.log($scope.tblTecnico);
//                    $scope.tblTecnico = arrayTablatnico;
//
//                });
//                $("#modal_tecnicos").modal('hide');
//                $scope.infoTec = {};
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
//        $scope.borrarTec = function (idTecnico) {
//            console.log(idTecnico);
//            $http.get('./php/eliminarTecnico.php?id=' + idTecnico).success(function () {
//
//                swal("Excelente!", "Registro eliminado!", "success");
//
//                $http.get('./php/consultaTablaTecnico.php').success(function (arrayTablatnico) {
//                    console.log($scope.tblTecnico);
//                    $scope.tblTecnico = arrayTablatnico;
//
//                });
//
//            });
//        };
//
//    }]);
//
//
//
//
