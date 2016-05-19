app.controller('serviciosAdminCtrl', ['$scope', '$http', 'Servicios', '$routeParams', 'subir', 'Clientes', function ($scope, $http, Servicios, $routeParams, subir, Clientes) {

        var pag = $routeParams.pag;

        var codigo = $routeParams.idServicio;
        $scope.actualizar = false;

        $scope.activar('mServicios');
        $scope.servicios = {};
        $scope.infoServicio = {};
        $scope.clienteSele = "";
        $scope.equipoSel = "";
        $scope.tipoSel = "";
        $scope.tecnicoSel = "";
        $scope.eligeSucursal = "";





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


        $scope.mostrarCaja = false;
        $scope.mostrarClientess = function () {
            $scope.mostrarCaja = true;
        };



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
            $scope.eligeSucursal = "" + servicio.idSucursal + "";
            //$scope.selecSiNo = "" + servicio.realizado + "";
            $scope.selecSiNo.realizado = servicio.realizado;
            console.log("EQUIPO: " + $scope.equipoSel);
            console.log("CLIENTE: " + $scope.clienteSele);
            if (servicio.realizado == 1) {
                $scope.items.name = "Realizado";

            } else {
                $scope.items.name = "No Realizado";
            }

            $("#modal_servicios").modal('show');

        };

        $scope.modalCliente = function (cliente) {
            angular.copy(cliente, $scope.infoCliente);

            $("#modal_clientes").modal();

        };

        // $scope que acciona el ng-change
        $scope.mostrarFiltroSucursales = function (clienteSele) {
            // $scope.selCategorias NOS TRAE EL VALOR DEL SELECT DE CATEGORIAS
            $scope.anidaSuc = {};
            $http.get('./php/sucursalAnidada.php?c=' + clienteSele)
                    .success(function (sucursalAnidada) {
                        $scope.anidaSuc = sucursalAnidada;
                    });

            $scope.anidaEquipo = {};
            $http.get('./php/equiposAnidados.php?c=' + clienteSele)
                    .success(function (equiposAnidados) {
                        $scope.anidaEquipo = equiposAnidados;
                    });
        };

        $scope.actualizarComboClientes = function () {
            $scope.nomCliente = {};
            $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
                $scope.nomCliente = arrayClientes;
            });
        };

//        $scope.mostrarFiltroEquipos = function (eligeSucursal) {
//            console.log("Parametro desde SERVICIOS: " + eligeSucursal);
//            // $scope.selCategorias NOS TRAE EL VALOR DEL SELECT DE CATEGORIAS
//            $scope.anidaEquipo = {};
//            $http.get('./php/equiposAnidados.php?c=' + eligeSucursal)
//                    .success(function (equiposAnidados) {
//                        $scope.anidaEquipo = equiposAnidados;
//                    });
//            console.log("Los equipos del Cliente: " + $scope.anidaEquipo.equipo);
//        };




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

        $scope.nomSucursal = {};
        $http.get('./php/nombresSucursales.php').success(function (arraySucursal) {
            $scope.nomSucursal = arraySucursal;
        });


        $scope.subirPdf = function (idServicio) {
            var name = JSON.stringify(idServicio);
            var file = $scope.file;
            subir.archivo(file, codigo);

            $scope.actualiza = true;
            swal("Excelente!", "Archivo guardado!", "success");

            return window.location.href = "#/servicios";
            $scope.moverX(pag);
        };



        $scope.guardarCliente = function (cliente) {

            Clientes.clientesGuardar(cliente).then(function () {
                $("#modal_clientes").modal('hide');
                $scope.infoCliente = {};
            });
            $scope.mostrarCaja = false;
            
            

            $http.get('./php/nombresClientes.php').success(function (arrayClientes) {
                $scope.nomCliente = arrayClientes;
                console.log( arrayClientes);
            });



        };


        //=================================================================
        // FUNCION GUARDAR DATOS
        //=================================================================

        $scope.guardarServicio = function (servicio) {
            $scope.infoServicio.idCliente = $scope.clienteSele;
            $scope.infoServicio.idEquipo = $scope.equipoSel;
            $scope.infoServicio.idTipo = $scope.tipoSel;
            $scope.infoServicio.idTecnico = $scope.tecnicoSel;
            $scope.infoServicio.realizado = $scope.selecSiNo;
            $scope.infoServicio.idSucursal = $scope.eligeSucursal;
            Servicios.serviciosGuardar(servicio).then(function () {
                $("#modal_servicios").modal('hide');

            });
            $scope.infoServicio = {};
            $scope.clienteSele = {};
            $scope.equipoSel = {};
            $scope.tipoSel = {};
            $scope.tecnicoSel = {};
            $scope.selecSiNo = {};
            $scope.eligeSucursal = {};
        };

    }])

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
            }]).service('subir', ["$http", "$q", function ($http, $q)
    {
        this.archivo = function (file, idServicio)
        {
            var deferred = $q.defer();
            var pdf = new FormData();
            pdf.append("file", file);

            return $http.post("./php/insertarPdf.php?id=" + idServicio, pdf, {
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










