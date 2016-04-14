app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'sucursales.html'
                })
                .when('/clientes', {
                    templateUrl: 'clientes.html'
                })
                .when('/formCliente/:idCliente', {
                    templateUrl: 'formularios/formCliente.html'
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
                .when('/formDirecciones/:idDireccion', {
                    templateUrl: 'formularios/formDirecciones.html'
                })
                .otherwise({
                    redirectTo: '/'
                });

    }]);