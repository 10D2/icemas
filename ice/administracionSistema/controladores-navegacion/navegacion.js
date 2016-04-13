app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'sucursales.html'
                })
                .when('/clientes', {
                    templateUrl: 'clientes.html'
                })
                .when('/sucursales', {
                    templateUrl: 'sucursales.html'
                })
                .when('/ciudades', {
                    templateUrl: 'ciudades.html'
                })
                .when('/servicios', {
                    templateUrl: 'servicios.html'
                })
                .when('/marcas', {
                    templateUrl: 'marcas.html'
                })
                .when('/transferencias', {
                    templateUrl: 'transferencias.html'
                })
                .when('/tecnicos', {
                    templateUrl: 'tecnicos.html'
                })
                .when('/equipos', {
                    templateUrl: 'equipos.html'
                })
                .when('/tiposServicio', {
                    templateUrl: 'tiposServicio.html'
                })
                .when('/usuarios', {
                    templateUrl: 'usuarios.html'
                })
                .when('/perfiles', {
                    templateUrl: 'perfiles.html'
                })
                .when('/direcciones', {
                    templateUrl: 'direcciones.html'
                })
                .otherwise({
                    redirectTo: '/'
                });

    }]);