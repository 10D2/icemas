app.controller('serviciosAdminCtrl', ['$scope', '$http', 'Servicios', '$routeParams', function ($scope, $http, Servicios, $routeParams) {

        var pag = $routeParams.pag;

        $scope.activar('mServicios');
        $scope.servicios = {};
        $scope.infoServicio = {};
        $scope.clienteSele = "";
        $scope.equipoSel = "";
        $scope.tipoSel = "";
        $scope.tecnicoSel = "";

        $scope.moverX = function (pag) {
            Servicios.cargarServicios(pag).then(function () {
                $scope.servicios = Servicios;

            });
        };

        $scope.moverX(pag);




        $scope.items = [
            {realizado: 1, name: 'Realizado'},
            {realizado: 0, name: 'No Realizado'}
        ];

        $scope.selecSiNo = "";



        //================================================================
        // MOSTRAR MODAL 
        //================================================================

        $scope.mostrarModalServicio = function (servicio) {
            $scope.infoServicio = {};
            angular.copy(servicio, $scope.infoServicio);
            $scope.clienteSele = "" + servicio.idCliente + "";
            $scope.equipoSel = "" + servicio.idEquipo + "";
            $scope.tipoSel = "" + servicio.idTipo + "";
            $scope.tecnicoSel = "" + servicio.idTecnico + "";
            //$scope.selecSiNo = "" + servicio.realizado + "";
            $scope.selecSiNo.realizado = servicio.realizado;
            console.log("MODAL: " + $scope.infoServicio.fechaInicio);
            console.log("SERVICIO: " + servicio.realizado);
            if (servicio.realizado == 1) {
                $scope.items.name = "Realizado";

            } else {
                $scope.items.name = "No Realizado";
            }

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
            $scope.infoServicio.realizado = $scope.selecSiNo;
            Servicios.serviciosGuardar(servicio).then(function () {
                $("#modal_servicios").modal('hide');

            });
            $scope.infoServicio = {};
            $scope.clienteSele = {};
            $scope.equipoSel = {};
            $scope.tipoSel = {};
            $scope.tecnicoSel = {};
            $scope.selecSiNo = {};
        };



    }]);










