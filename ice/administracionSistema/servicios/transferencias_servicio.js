var app = angular.module('icemasAdminApp.tranferencias', []);
app.factory('Transferencias', ['$http', '$q', function ($http, $q) {

        var self = {
            'cargando': false,
            'err': false,
            'conteo': 0,
            'transferencias': [],
            'pag_actual': 1,
            'pag_siguiente': 1,
            'pag_anterior': 1,
            'total_paginas': 1,
            'paginas': [],
            
           
//            TransGuardar : function (transferencia){
//                
//                var d = $q.defer();
//                $http.post('./php/guardarTransferencia.php', transferencia).success(function(respuesta){
//                    
//                    self.cargarTrans( self.pag_actual );
//                    
//                    d.resolve();
//                });
//                return d.promise;
//                
//            },
            
            
            cargarTrans : function (pag){
                
                var d = $q.defer();
                
                $http.get('./php/consultaTblTransferencias.php?pag=' + pag).success(function(data){
                    
                    self.err            = data.err;
                    self.conteo         = data.conteo;
                    self.transferencias = data.transferencias;
                    self.pag_actual     = data.pag_actual;
                    self.pag_siguiente  = data.pag_siguiente;
                    self.pag_anterior   = data.pag_anterior;
                    self.total_paginas  = data.total_paginas;
                    self.paginas        = data.paginas;
                    
               //     console.log(data);
                    return d.resolve();
                });
                
                return d.promise;
                
            }
            
        };
        return self;
    }]);