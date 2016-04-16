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
                .when('/prueba/:idCliente', {
                    templateUrl: 'template/prueba.html'
                })
                .when('/sucursales', {
                    templateUrl: 'sucursales.html'
                })
                .when('/formularioSuc/:idSucursal', {
                    templateUrl: 'formularios/formularioSuc.html'
                })
                .when('/ciudades/:pag', {
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
                .when('/tiposServicio/:pag', {
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
                .when('/formDireccion/:idDireccion', {
                    templateUrl: 'formularios/formDireccion.html'
                })
                .otherwise({
                    redirectTo: '/'
                });

    }]);