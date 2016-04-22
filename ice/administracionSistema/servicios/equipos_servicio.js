var app = angular.module('icemasAdminApp.equipos', []);
app.factory('Equipos', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'equipos': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
           
            equiposGuardar : function (equipo){
                
                var d = $q.defer();
                $http.post('./php/guardarEquipo.php', equipo).success(function(respuesta){
                    
                    self.cargarEquipos( self.pag_actual );
                    
                    d.resolve();
                });
                return d.promise;
                
            },
            
            
            cargarEquipos : function (pag){
                
                var d = $q.defer();
                
                $http.get('./php/consultaTblEquipos.php?pag=' + pag).success(function(data){
                    
                    self.err           = data.err;
                    self.conteo        = data.conteo;
                    self.equipos       = data.equipos;
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