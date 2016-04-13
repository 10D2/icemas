var app = angular.module('icemasApp', [ 'ngRoute', 'icemasApp.configuracion', 'icemasApp.mensajes']);

app.controller('ctrlPrincipal', ['$scope', 'Configuracion', 'Mensajes',function($scope, Configuracion, Mensajes){
        
        $scope.config = {};
        
        $scope.mensajes = Mensajes.mensajes;
        console.log($scope.mensajes);
        
        $scope.usuario ={
          nombre: "Fernando Herrera"  
        };
        
        Configuracion.cargar().then(function(){
            $scope.config = Configuracion.config;
            console.log($scope.config);
        });

    
        //===================================================
        // FUNCIONES GLOBALES DEL SCOPE
        //===================================================
        
        $scope.activar = function(menu, submenu){
            $scope.mNosotros = "";
            $scope.mServicios = "";
            $scope.mCatalogo = "";
            $scope.mSocios = "";
            $scope.mAcceso = "";
            $scope.mClientes = "";
            
            $scope[menu] = 'active';
          
            
        };
}]);



