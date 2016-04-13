app.controller('calleCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mCalle');
        
        
        $scope.direccion = {};
        $http.get('./php/consulTablaDireccion.php').success(function (arrayDireccion) {
            $scope.direccion = arrayDireccion;

        });
        
    }]);




