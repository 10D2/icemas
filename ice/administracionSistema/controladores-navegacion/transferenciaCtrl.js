app.controller('transCtrl', ['$scope', '$http', 'Transferencias', '$routeParams', function ($scope, $http, Transferencias, $routeParams) {

        var pag = $routeParams.pag;
        var codigo = $routeParams.idEquipo;

        $scope.activar('mTrans');
        $scope.transferencias = {};



        $scope.moverK = function (pag) {
            Transferencias.cargarTrans(pag).then(function () {
                $scope.transferencias = Transferencias;

            });
        };

        $scope.moverK(pag);


        $scope.infoTrans = {};
        $http.get('./php/getFormularioTrans.php?c=' + codigo).success(function (data) {
            $scope.infoTrans = data;

        });

        //================================================================
        // MOSTRAR MODAL 
        //================================================================
//
//        $scope.mostrarModalTrans = function () {
//            $("#modal_trans").modal();
//            $scope.infoTrans ={};
//        };



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

        $scope.guardarTrans = function () {
            $http.post('./php/guardarTransferencia.php', $scope.infoTrans).success(function () {
//                    
//                    self.cargarTrans( self.pag_actual );
//                    
//                    d.resolve();
//                });
            });

        };

    }]);



