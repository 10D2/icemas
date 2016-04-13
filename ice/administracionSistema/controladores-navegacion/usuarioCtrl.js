app.controller('userCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mUsuarios');
        
        
        $scope.usuario = {};
        $http.get('./php/tablaUsuarios.php').success(function (arrayUsuarios) {
            console.log($scope.usuario);
            $scope.usuario = arrayUsuarios;

        });
        
    }]);




