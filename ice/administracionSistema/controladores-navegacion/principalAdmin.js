var app = angular.module('icemasAdminApp', [
    'ngRoute',    
    'icemasAdminApp.ciudades',
    'icemasAdminApp.tiposServicio',
    'icemasAdminApp.sucursales',
    'icemasAdminApp.tecnicos'
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


app.controller('iceCtrl', ['$scope', function ($scope) {


        //===================================================
        // FUNCIONES GLOBALES DEL SCOPE
        //===================================================

        $scope.activar = function (menu) {
            $scope.mSucursales = "";
            $scope.mClientes = "";
            $scope.mCiudades = "";
            $scope.mServicios = "";
            $scope.mMarcas = "";
            $scope.mTrans = "";
            $scope.mEquipos = "";
            $scope.mTecnico = "";
            $scope.mTipoS = "";
            $scope.mUsuarios = "";
            $scope.mPerfiles = "";
            $scope.mCalle = "";

            $scope[menu] = 'active';


        };
    }]);



