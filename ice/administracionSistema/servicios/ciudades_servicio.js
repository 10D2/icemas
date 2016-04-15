var app = angular.module('icemasAdminApp.ciudades', []);
app.factory('Ciudades', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'ciudades': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
            cargarPagina : function (pag){
                
                var d = $q.defer();
                
                $http.get('./php/consultaTablaCiudades.php?pag=' + pag).success(function(data){
                    
                    self.err           = data.err;
                    self.conteo        = data.conteo;
                    self.ciudades      = data.ciudades;
                    self.pag_actual    = data.pag_actual;
                    self.pag_siguiente = data.pag_siguiente;
                    self.pag_anterior  = data.pag_anterior;
                    self.total_paginas = data.total_paginas;
                    self.paginas       = data.paginas;
                    
                    console.log(data);
                    return d.resolve();
                });
                
                return d.promise;
                
            }
            
        };
        return self;
    }]);