var app = angular.module('icemasAdminApp.servicios', []);
app.factory('Servicios', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'servicios': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
           
            serviciosGuardar : function (servicio){
                
                var d = $q.defer();
                $http.post('./php/guardarServicio.php', servicio).success(function(respuesta){
                    
                    self.cargarServicios( self.pag_actual );
                    
                    d.resolve();
                });
                return d.promise;
                
            },
            
            
            cargarServicios : function (pag){
                
                var d = $q.defer();
                
                $http.get('./php/consultaTblServicios.php?pag=' + pag).success(function(data){
                    
                    self.err           = data.err;
                    self.conteo        = data.conteo;
                    self.servicios     = data.servicios;
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