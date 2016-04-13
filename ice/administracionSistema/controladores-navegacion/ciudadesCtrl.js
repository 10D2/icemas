app.controller('ciudadesCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mCiudades');

        $scope.infoCd = {};
        $scope.tablaCd = {};
        $http.get('./php/consultaTablaCiudades.php').success(function (arrayTablaCd) {
            console.log($scope.tablaCd);
            $scope.tablaCd = arrayTablaCd;

        });

        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalCd = function () {

            $("#modal_ciudades").modal();

        };

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================



        $scope.guardarCd = function () {
            //    $scope.infoSuc.idcliente = 
            $http.post('./php/insertarCiudad.php', $scope.infoCd).success(function () {
                console.log($scope.infoCd);
                $http.get('./php/consultaTablaCiudades.php').success(function (arrayTablaCd) {
                    console.log($scope.tablaCd);
                    $scope.tablaCd = arrayTablaCd;

                });
                $("#modal_ciudades").modal('hide');
                $scope.infoCd = {};

            });

        };
        
        
        
        $scope.borrarCd = function (idCiudad) {
            console.log(idCiudad);
            $http.get('./php/eliminarCiudad.php?id=' + idCiudad).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $http.get('./php/consultaTablaCiudades.php').success(function (arrayTablaCd) {
                    console.log($scope.tablaCd);
                    $scope.tablaCd = arrayTablaCd;

                });

            });
        };



    }]);




