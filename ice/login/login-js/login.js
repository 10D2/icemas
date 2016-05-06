var app1 = angular.module('loginApp', ['login.loginService']);

app1.controller('iniciarCtrl', ['$scope', '$http', 'LoginService', function ($scope, $http, LoginService, $location, $routeParams) {

        $scope.invalido = false;
        $scope.cargando = false,
                $scope.mensaje = "";

//         var idCliente = $routeParams.data.idCliente;
    
    
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
                //    console.log("Arreglo que devuelve de postVerificar.php: " + data);

                    var idCliente = data.idCliente;
                    var idPerfil = data.idPerfil;

                //    console.log("MI IDCLIENTE viniendo del PHP: " + data.idCliente);

                    if (idPerfil == 2) {

                        // $location.url('../ice/administracionClientes/index.php/servicios/'+idCliente);
                        //window.location = '../administracionClientes/index.php';

                         window.location = data.url+idCliente;
                         


                    } else {
                        window.location = data.url;
                    }

                    ;

                }
                
            });
        };
        
        
        

    }]);
