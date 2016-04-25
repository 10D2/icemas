app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'sucursales.html'
                })
                .when('/clientes/:pag', {
                    templateUrl: 'clientes.html'
                })
                .when('/formularioTrans/:idEquipo', {
                    templateUrl: 'template/formularioTrans.html'
                })
                .when('/sucursales/:pag', {
                    templateUrl: 'sucursales.html'
                })
                .when('/formularioSuc/:idSucursal', {
                    templateUrl: 'formularios/formularioSuc.html'
                })
                .when('/ciudades/:pag', {
                    templateUrl: 'ciudades.html'
                })
                .when('/tiposServicio/:pag', {
                    templateUrl: 'tiposServicio.html'
                })
                .when('/servicios/:pag', {
                    templateUrl: 'servicios.html'
                })
                .when('/marcas', {
                    templateUrl: 'marcas.html'
                })
                .when('/transferencias/:pag', {
                    templateUrl: 'transferencias.html'
                })
                .when('/tecnicos/:pag', {
                    templateUrl: 'tecnicos.html'
                })
                .when('/equipos/:pag', {
                    templateUrl: 'equipos.html'
                })
                .when('/usuarios/:pag', {
                    templateUrl: 'usuarios.html'
                })
                .when('/perfiles/:pag', {
                    templateUrl: 'perfiles.html'
                })
                
                .otherwise({
                    redirectTo: '/'
                });

    }]);