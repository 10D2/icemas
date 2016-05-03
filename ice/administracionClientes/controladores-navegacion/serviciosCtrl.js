app.controller('serviciosCtrl', ['$scope', '$http', 'Servicios', '$routeParams', function ($scope, $http, Servicios, $routeParams) {

        var id = $routeParams.miID;
        console.log($routeParams.miID);

        $scope.activar('mServicios');
        $scope.servicios = {};
        $scope.infoServicio = {};

        $http.get('./php/consultaTblServicios.php?c=' + id).success(function (data) {
            $scope.servicios = data;

        });

    }]);










