app.controller('tipoServ', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mTipos');

        $scope.infoTserv = {};

        $scope.tipoServ = {};
        $http.get('./php/tablaTipoServicios.php').success(function (arrayTipoServ) {
            console.log($scope.tipoServ);
            $scope.tipoServ = arrayTipoServ;

        });

        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.modalTservicios = function () {

            $("#modal_tServicios").modal();

        };


        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================



        $scope.guardartipo = function () {
            $http.post('./php/insertarTipoServicio.php', $scope.infoTserv).success(function () {

                $http.get('./php/tablaTipoServicios.php').success(function (arrayTipoServ) {
                    console.log($scope.tipoServ);
                    $scope.tipoServ = arrayTipoServ;

                });

                $("#modal_tServicios").modal('hide');
                $scope.infoTserv = {};

            });

        };

        //=================================================================
        // FUNCION BORRAR
        //=================================================================


        $scope.borrarTserv = function (idTipo) {

            $http.get('./php/borrarTipoServicio.php?id=' + idTipo).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");

                $http.get('./php/tablaTipoServicios.php').success(function (arrayTipoServ) {
                    console.log($scope.tipoServ);
                    $scope.tipoServ = arrayTipoServ;

                });

            });
        };

    }]);




