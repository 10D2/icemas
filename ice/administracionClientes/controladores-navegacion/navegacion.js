app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'servicios.html'
                })
                .when('/servicios/:idCliente', {
                    templateUrl: 'servicios.html',
                    controller:'serviciosCtrl'
                })
                .when('/equipos', {
                    templateUrl: 'equipos.html'
                })
                .otherwise({
                    redirectTo: '/'
                });

    }]);