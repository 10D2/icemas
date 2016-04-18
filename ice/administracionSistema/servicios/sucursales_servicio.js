var app = angular.module('icemasAdminApp.sucursales', []);
app.factory('Sucursales', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'sucursales': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
            guardarSucursal: function (sucursal) {

                var d = $q.defer();
                $http.post('./php/guardarSucursal.php', sucursal).success(function (respuesta) {
                    //this.infoSuc.idCliente = this.seleccion.idCliente;
                    self.cargarPagina(self.pag_actual);

                    d.resolve();
                });
                return d.promise;

            },
            cargar: function (pag) {

                var d = $q.defer();

                $http.get('./php/consultaTablaSucursales.php?pag=' + pag).success(function (data) {

                    self.err = data.err;
                    self.conteo = data.conteo;
                    self.sucursales = data.sucursales;
                    self.pag_actual = data.pag_actual;
                    self.pag_siguiente = data.pag_siguiente;
                    self.pag_anterior = data.pag_anterior;
                    self.total_paginas = data.total_paginas;
                    self.paginas = data.paginas;

                    console.log(data);
                    return d.resolve();
                });

                return d.promise;

            }

        };
        return self;
    }]);