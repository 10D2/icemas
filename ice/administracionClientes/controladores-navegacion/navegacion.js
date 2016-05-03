app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'servicios.html'
                })
                .when('/clientes', {
                    templateUrl: 'clientes.html'
                })
                .when('/servicios/:miID', {
                    templateUrl: 'servicios.html',
                    controller: 'serviciosCtrl'
                })
                .when('/equipos', {
                    templateUrl: 'equipos.html'
                })
                .otherwise({
                    redirectTo: '/'
                });

    }]);