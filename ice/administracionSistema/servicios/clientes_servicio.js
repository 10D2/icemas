var app = angular.module('icemasAdminApp.clientes', []);
app.factory('Clientes', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'clientes': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
           
            clientesGuardar : function (cliente){
                
                var d = $q.defer();
                $http.post('./php/guardarCliente.php', cliente).success(function(respuesta){
                    
                    self.paginaCliente( self.pag_actual );
                    
                    d.resolve();
                });
                return d.promise;
                
            },
            
            
            paginaCliente : function (pag){
                
                var d = $q.defer();
                
                $http.get('./php/consultaTablaClientes.php?pag=' + pag).success(function(data){
                    
                    self.err           = data.err;
                    self.conteo        = data.conteo;
                    self.clientes      = data.clientes;
                    self.pag_actual    = data.pag_actual;
                    self.pag_siguiente = data.pag_siguiente;
                    self.pag_anterior  = data.pag_anterior;
                    self.total_paginas = data.total_paginas;
                    self.paginas       = data.paginas;
                    
                   // console.log(data);
                    return d.resolve();
                });
                
                return d.promise;
                
            }
            
        };
        return self;
    }]);