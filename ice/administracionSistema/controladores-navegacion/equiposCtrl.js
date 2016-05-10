app.controller('equiposAdminCtrl', ['$scope', '$http', 'Equipos', '$routeParams', 'carga', function ($scope, $http, Equipos, $routeParams, carga) {

        var pag = $routeParams.pag;
        var codigo = $routeParams.idImagen;

        $scope.activar('mEquipos');
        $scope.equipos = {};
        $scope.infoEquipo = {};
        $scope.eligeCliente = {};


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
            $scope.eligeCliente.idCliente = equipo.idCliente;
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
        
        $scope.imgEquipo = {};
        $http.get('./php/getImagenEquipo.php?c=' + codigo).success(function(data){
            $scope.imgEquipo = data;
        });
        
        $scope.modalImagen = function (idEquipo) {
            
            $("#modal_imagen").modal();

        };
        

        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================


        $scope.guardarEquipo = function (equipo) {
                $scope.infoEquipo.idCliente = $scope.eligeCliente;
            Equipos.equiposGuardar($scope.infoEquipo).then(function () {
                $("#modal_equipos").modal('hide');
//                var name = JSON.stringify($scope.infoEquipo);
//                var file = $scope.file;
//                carga.equipoImg(file, name);
//                console.log(file);
//                console.log(name);
                $scope.infoEquipo = {};
//                $http.get('./php/getImagenEquipo.php?c=' + codigo).success(function (data) {
//                    $scope.formNota.images = data;
//                    $scope.actualizar = true;
//                });
            });
                  $scope.moverY(pag);
                  $scope.infoEquipo = {};
        };

    }])

        //FIN DE CONTROLADOR 

        .directive('uploaderModel', ["$parse", function ($parse) {
                return {
                    restrict: 'A',
                    link: function (scope, iElement, iAttrs)
                    {
                        iElement.on("change", function (e)
                        {
                            $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
                        });
                    }
                };
            }]).service('carga', ["$http", "$q", function ($http, $q)
    {
        this.equipoImg = function (file, name)
        {
            var deferred = $q.defer();
            var fd = new FormData();
            fd.append("name", name);
            fd.append("file", file);
            return $http.post("./php/guardarEquipo.php", fd, {
                headers: {
                    "Content-type": undefined
                },
                transformRequest: angular.identity
            })
                    .success(function (res)
                    {
                        deferred.resolve(res);
                    })
                    .error(function (msg, code)
                    {
                        deferred.reject(msg);
                    });
            return deferred.promise;
        };

    }]);







