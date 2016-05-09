app.controller('serviciosAdminCtrl', ['$scope', '$http', 'Servicios', '$routeParams', function ($scope, $http, Servicios, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mServicios');
        $scope.servicios = {};
        $scope.infoServicio = {};
        $scope.clienteSele = {};
        $scope.equipoSel = {};
        $scope.tipoSel = {};
        $scope.tecnicoSel = {};
       // $scope.selecSiNo = {};

        $scope.moverX = function (pag) {
            Servicios.cargarServicios(pag).then(function () {
                $scope.servicios = Servicios;

            });
        };

        $scope.moverX(pag);


        $scope.items = [
            {id: 1, name: 'Realizado'},
            {id: 0, name: 'No Realizado'}
        ];

        $scope.selecSiNo = null;

        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalServicio = function (servicio) {
            angular.copy(servicio, $scope.infoServicio);
            $scope.clienteSele.idCliente = servicio.idCliente;
            $scope.equipoSel.idEquipo = servicio.idEquipo;
            $scope.tipoSel.idTipo = servicio.idTipo;
            $scope.tecnicoSel.idTecnico = servicio.idTecnico;
          //  $scope.selecSiNo.id = servicio.id;

            $("#modal_servicios").modal();

        };

        //=================================================================
        // CONSULTAS (Combos)
        //=================================================================

        $scope.nomTservicio = {};
        $http.get('./php/nombresTipoServicio.php').success(function (arrayTservicio) {
            $scope.nomTservicio = arrayTservicio;
        });

        $scope.nomTecnicos = {};
        $http.get('./php/nombresTecnicos.php').success(function (arrayTecnicos) {
            $scope.nomTecnicos = arrayTecnicos;
        });

        $scope.nomEquipo = {};
        $http.get('./php/nombresEquipos.php').success(function (arrayEquipos) {
            $scope.nomEquipo = arrayEquipos;
        });

        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
            $scope.nomCliente = arrayClientes;
        });


        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================

        $scope.guardarServicio = function (servicio) {
            $scope.infoServicio.idCliente = $scope.clienteSele;
            $scope.infoServicio.idEquipo = $scope.equipoSel;
            $scope.infoServicio.idTipo = $scope.tipoSel;
            $scope.infoServicio.idTecnico = $scope.tecnicoSel;
        //    $scope.infoServicio.id = $scope.selecSiNo;
            Servicios.serviciosGuardar(servicio).then(function () {
                $("#modal_servicios").modal('hide');
                $scope.infoServicio = {};
            });
        };



    }]);










