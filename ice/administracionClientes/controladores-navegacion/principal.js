var app = angular.module('icemAdminApp', [
    'ngRoute',
    'icemasAdminApp.equipos',
    'icemasAdminApp.servicios',
    'loginApp'
]);


app.controller('icemasCtrl', ['$scope', function ($scope) {

        

        //===================================================
        // FUNCIONES GLOBALES DEL SCOPE
        //===================================================

        $scope.activar = function (menu) {
            $scope.mServicios = "";
            $scope.mEquipos = "";

            $scope[menu] = 'active';


        };




    }]);



