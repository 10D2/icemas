var app = angular.module('icemasAdminApp.perfiles', []);
app.factory('Perfiles', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'perfiles': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
           
            guardarPerfil : function (perfil){
                
                var d = $q.defer();
                $http.post('./php/guardarPerfil.php', perfil).success(function(respuesta){
                    
                    self.cargan( self.pag_actual );
                    
                    d.resolve();
                });
                return d.promise;
                
            },
            
            
            cargan : function (pag){
                
                var d = $q.defer();
                
                $http.get('./php/consultaTblPerfiles.php?pag=' + pag).success(function(data){
                    
                    self.err           = data.err;
                    self.conteo        = data.conteo;
                    self.perfiles      = data.perfiles;
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