app.controller('serviciosCtrl', ['$scope', '$http', 'Servicios', '$routeParams', function ($scope, $http, Servicios, $routeParams) {

        var pag = $routeParams.pag;
 
        $scope.activar('mServicios');
        $scope.servicios = {};
        $scope.infoServicio = {};


        $scope.moverX = function (pag) {
            Servicios.cargarServicios(pag).then(function () {
                $scope.servicios = Servicios;

            });
        };

        $scope.moverX(pag);


    }]);










