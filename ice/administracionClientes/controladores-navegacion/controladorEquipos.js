app.controller('equiposClientesCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mEquipos');
        $scope.equipo = {};

        $http.get('../administracionClientes/php/consultaTblEquipos.php' ).success(function (data) {
            $scope.equipo = data;
        });


    }]);