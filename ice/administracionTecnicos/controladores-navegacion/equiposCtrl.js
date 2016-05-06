app.controller('equiposTecnicosCtrl', ['$scope', '$http' ,'Equipos', '$routeParams', function ($scope, $http ,Equipos, $routeParams) {

        var pag = $routeParams.pag;


        $scope.activar('mEquipos');
        $scope.equipos = {};
        $scope.infoEquipo = {};


        $scope.moverY = function (pag) {
            Equipos.cargarEquipos(pag).then(function () {
                $scope.equipos = Equipos;

            });
        };

        $scope.moverY(pag);


    }]);









