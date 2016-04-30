app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'servicios.html'
                })
                .when('/clientes', {
                    templateUrl: 'clientes.html'
                })
                .when('/formularioTrans/:idEquipo', {
                    templateUrl: 'template/formularioTrans.html'
                })
                .when('/sucursales', {
                    templateUrl: 'sucursales.html'
                })
                .when('/formularioSuc/:idSucursal', {
                    templateUrl: 'formularios/formularioSuc.html'
                })
                .when('/ciudades', {
                    templateUrl: 'ciudades.html'
                })
                .when('/tiposServicio', {
                    templateUrl: 'tiposServicio.html'
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
                .when('/usuarios', {
                    templateUrl: 'usuarios.html'
                })
                .when('/perfiles', {
                    templateUrl: 'perfiles.html'
                })
                .when('/subirPdf1/:idServicio', {
                    templateUrl: 'template/subirPdf1.html'
                })
                .when('/visor', {
                    templateUrl: 'template/visor.html'
                })
                .otherwise({
                    redirectTo: '/'
                });

    }]);