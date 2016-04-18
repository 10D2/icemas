var app = angular.module('icemasAdminApp.tecnicos', []);
app.factory('Tecnicos', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'tecnicos': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
           
            guardarTecnico : function (tecnico){
                
                var d = $q.defer();
                $http.post('./php/guardarTecnicos.php', tecnico).success(function(respuesta){
                    
                    self.pagina( self.pag_actual );
                    
                    d.resolve();
                });
                return d.promise;
                
            },
            
            
            pagina : function (pag){
                
                var d = $q.defer();
                
                $http.get('./php/consultaTablaTecnico.php?pag=' + pag).success(function(data){
                    
                    self.err           = data.err;
                    self.conteo        = data.conteo;
                    self.tecnicos      = data.tecnicos;
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