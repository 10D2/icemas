var app = angular.module('icemasAdminApp.tiposServicio', []);
app.factory('Tipos', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'tiposervicio': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
           
            guardarTServicio : function (tipo){
                
                var d = $q.defer();
                $http.post('./php/guardarTipoServicio.php', tipo).success(function(respuesta){
                    
                    self.cargarPag( self.pag_actual );
                    
                    d.resolve();
                });
                return d.promise;
                
            },
            
            
            cargarPag : function (pag){
                
                var d = $q.defer();
                
                $http.get('./php/tablaTipoServicios.php?pag=' + pag).success(function(data){
                    
                    self.err           = data.err;
                    self.conteo        = data.conteo;
                    self.tiposervicio  = data.tiposervicio;
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