app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'nosotros.html'
                })
                .when('/sociosComerciales', {
                    templateUrl: 'sociosComerciales.html'
                })
                .when('/clientes', {
                    templateUrl: 'clientes.html'
                })
                .otherwise({
                    redirectTo: '/'
                });

    }]);