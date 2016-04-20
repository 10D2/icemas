var app = angular.module('icemasAdminApp.direcciones', []);
app.factory('Direcciones', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'direcciones': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
            guardaCalle: function (direccion) {
                
                var d = $q.defer();
                $http.post('./php/guardaDireccion.php', direccion).success(function (respuesta) {
                 
                    self.paginaCargada(self.pag_actual);

                    d.resolve();
                });
                return d.promise;

            },
            paginaCargada: function (pag) {

                var d = $q.defer();

                $http.get('./php/consultaTablaClientes.php?pag=' + pag).success(function (data) {

                    self.err = data.err;
                    self.conteo = data.conteo;
                    self.direcciones = data.direcciones;
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