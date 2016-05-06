var app = angular.module('icemasAdminApp.usuarios', []);
app.factory('Usuarios', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'usuarios': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
            guardarUsuarios: function (usuario) {
                
                var d = $q.defer();
                $http.post('./php/guardarUsuario.php', usuario).success(function (respuesta) {
                 
                    self.cargarP(self.pag_actual);

                    d.resolve();
                });
                return d.promise;

            },
            cargarP: function (pag) {

                var d = $q.defer();

                $http.get('./php/tablaUsuarios.php?pag=' + pag).success(function (data) {

                    self.err           = data.err;
                    self.conteo        = data.conteo;
                    self.usuarios      = data.usuarios;
                    self.pag_actual    = data.pag_actual;
                    self.pag_siguiente = data.pag_siguiente;
                    self.pag_anterior  = data.pag_anterior;
                    self.total_paginas = data.total_paginas;
                    self.paginas       = data.paginas;

                //    console.log(data);
                    return d.resolve();
                });

                return d.promise;

            }

        };
        return self;
    }]);