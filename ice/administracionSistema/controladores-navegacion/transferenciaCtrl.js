app.controller('transCtrl', ['$scope', '$http', 'Transferencias', '$routeParams', function ($scope, $http, Transferencias, $routeParams) {

        var pag = $routeParams.pag;
        var codigo = $routeParams.idEquipo;

        $scope.activar('mTrans');
        $scope.transferencias = {};


        $scope.moverK = function (pag) {
            Transferencias.cargarTrans(pag).then(function () {
                $scope.transferencias = Transferencias;
                console.log()
            });
        };

        $scope.moverK(pag);


        //================================================================
        // MOSTRAR FORMULARIO
        //================================================================

        $scope.infoTrans = {};
        $http.get('./php/getFormularioTrans.php?c=' + codigo).success(function (data) {
            $scope.infoTrans = data;

        });


        //=================================================================
        // CONSULTAS (Combos)
        //=================================================================

        $scope.nomCliente = {};
        $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
            $scope.nomCliente = arrayClientes;
        });

        $scope.nomEquipo = {};
        $http.get('./php/nombresEquipos.php').success(function (arrayEquipos) {
            $scope.nomEquipo = arrayEquipos;
        });

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================

        $scope.actualiza = false;


        $scope.guardarTrans = function ( idCliente ) {
            $http.post('./php/guardarTransferencia.php', $scope.infoTrans).success(function () {
               // console.log($scope.infoTrans);
            });
            $scope.actualiza = true;
            swal("Excelente!", "Transferencia Realizada!", "success")
        };

    }]);



