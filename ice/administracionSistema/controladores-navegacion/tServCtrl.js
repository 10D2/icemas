app.controller('tipoServ', ['$scope', '$http', 'Tipos', '$routeParams', function ($scope, $http, Tipos, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mTipoS');
        $scope.tipos = {};
        $scope.infoTserv = {};
        $scope.ti = {};


        $scope.moverD = function (pag) {
            Tipos.cargarPag(pag).then(function () {
                $scope.tipos = Tipos.tiposervicio;
                $scope.ti = Tipos;
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
                 $scope.moverD(pag);
            });
           
        };




        $scope.borrarTserv = function (idTipo) {
            console.log(idTipo);
            $http.get('./php/borrarTipoServicio.php?id=' + idTipo).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $scope.moverD(pag);


            });
        };

    }]);




