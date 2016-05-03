var app1 = angular.module('loginApp', ['login.loginService']);

app1.controller('iniciarCtrl', ['$scope','$http' ,'LoginService', function ($scope, $http, LoginService, $location) {

        $scope.invalido = false;
        $scope.cargando = false,
        $scope.mensaje = "";

       // var codigo = $routeParams.data.id;

        $scope.info = {};

        $scope.ingresar = function (info) {

            if (info.usuario.length < 3) {
                $scope.invalido = true;
                $scope.mensaje = 'Ingrese su usuario';
                return;
            } else if (info.contrasena.length < 3) {
                $scope.invalido = true;
                $scope.mensaje = 'Ingrese su contraseña';
                return;
            }

            $scope.invalido = false;
            $scope.cargando = true;

            LoginService.login(info).then(function (data) {
                if (data.err) {
                    $scope.invalido = true;
                    $scope.cargando = false;
                    $scope.mensaje = data.mensaje;
                } else {
                    console.log(data.mensaje);
                    window.location = data.url;
                   var miID=data.id;
                   
                   console.log("MI ID viniendo del PHP: "+data.id);
                   $location.url('/servicios'+miID);
                   
                    
//                    $scope.servicios = {};
//                    $http.get('./php/consultaTblServicios.php?c=' + codigo).success(function(data){
//                        $scope.servicios = data;
//                        
//                    });
                }
            });
        };

    }]);
