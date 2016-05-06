app.controller('equiposAdminCtrl', ['$scope', '$http' ,'Equipos', '$routeParams', function ($scope, $http ,Equipos, $routeParams) {

        var pag = $routeParams.pag;


        $scope.activar('mEquipos');
        $scope.equipos = {};
        $scope.infoEquipo = {};


        $scope.moverY = function (pag) {
            Equipos.cargarEquipos(pag).then(function () {
                $scope.equipos = Equipos;

            });
        };

        $scope.moverY(pag);

        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalEquipo = function (equipo) {
            //console.log(ciudad);
            angular.copy(equipo, $scope.infoEquipo);

            $("#modal_equipos").modal();

        };
        
        
        //=================================================================
        // 
        //=================================================================

        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
            //  console.log($scope.nomCliente);
            $scope.nomCliente = arrayClientes;
        });
        
        $scope.nomEquipo = {};
        $http.get('./php/nombresEquipos.php').success(function (arrayEquipos) {
            $scope.nomEquipo = arrayEquipos;
        });

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================


        $scope.guardarEquipo = function (equipo) {

            Equipos.equiposGuardar(equipo).then(function () {
                $("#modal_equipos").modal('hide');
                $scope.infoEquipo = {};
            });

        };

    }]);









