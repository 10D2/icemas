app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'portada.html'
                })
                .when('/servicios', {
                    templateUrl: 'servicios.html',
                    controller:'serviciosClientesCtrl'
                })
                .when('/equipos', {
                    templateUrl: 'equipos.html',
                    controller:'equiposClientesCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

    }]);