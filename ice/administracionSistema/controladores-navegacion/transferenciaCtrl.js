app.controller('transCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.activar('mTrans');
                
        //$scope.infoCd = {};
        $scope.tblCTrans = {};
        $http.get('./php/consultaTblTransferencias.php').success(function (arrayTrans) {
            console.log($scope.tblCTrans);
            $scope.tblCTrans = arrayTrans;

        });
        
        
    }]);




