app.controller('equiposCtrl', ['$scope', '$http' ,'Equipos', '$routeParams', function ($scope, $http ,Equipos, $routeParams) {

      //  var pag = $routeParams.pag;


        $scope.activar('mEquipos');
        $scope.equipos = {};
        $scope.infoEquipo = {};

$http.get('./php/consultaTblEquipos.php').success(function(data){
    $scope.equipos =data;
});


//        $scope.moverY = function (pag) {
//            Equipos.cargarEquipos(pag).then(function () {
//                $scope.equipos = Equipos;
//
//            });
//        };
//
//        $scope.moverY(pag);


    }]);









