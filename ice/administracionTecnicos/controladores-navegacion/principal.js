var app = angular.module('icemaAdminApp', [
    'ngRoute',    
    'icemasAdminApp.clientes',
    'icemasAdminApp.equipos',
    'icemasAdminApp.servicios'
]);

angular.module('jcs-autoValidate')
        .run([
            'defaultErrorMessageResolver',
            function (defaultErrorMessageResolver) {
                // To change the root resource file path
                defaultErrorMessageResolver.setI18nFileRootPath('../../angular/librerias');
                defaultErrorMessageResolver.setCulture('es-co');
            }
        ]);


app.controller('icemaCtrl', ['$scope', function ($scope) {


        //===================================================
        // FUNCIONES GLOBALES DEL SCOPE
        //===================================================

        $scope.activar = function (menu) {
            $scope.mClientes = "";
            $scope.mServicios = "";
            $scope.mEquipos = "";

            $scope[menu] = 'active';


        };
    }]);



