app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'servicios.html'
                })
                .when('/clientes', {
                    templateUrl: 'clientes.html'
                })
                .when('/servicios', {
                    templateUrl: 'servicios.html'
                })
                .when('/equipos', {
                    templateUrl: 'equipos.html'
                })
                .otherwise({
                    redirectTo: '/'
                });

    }]);