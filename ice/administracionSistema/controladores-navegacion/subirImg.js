app.controller('subirImgCtrl', ['$scope', '$routeParams', '$http', 'cargar', function ($scope, $routeParams, $http, cargar) {


        var codigo = $routeParams.idEquipo;
        $scope.actualizar = false;

        $scope.subirImagen = function (idEquipo) {
            var name = JSON.stringify(idEquipo);
            var file = $scope.file;
            cargar.foto(file, codigo);

            $scope.actualiza = true;
            swal("Excelente!", "Archivo guardado!", "success");
            
            return window.location.href = "#/equipos";
            console.log(name);
            console.log(file);
        };
//
//        $scope.docPdf = {};
//
//
////        $scope.visualizar = function (codigo) {
//        $http.get('./php/getDocumentoPdf.php?c=' + codigo).success(function (data) {
//
//
//            $scope.docPdf = data;
//        });
//        };

    }])
        .directive('uploaderModel', ["$parse", function ($parse) {
                return {
                    restrict: 'A',
                    link: function (scope, iElement, iAttrs)
                    {
                        iElement.on("change", function (e)
                        {
                            $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
                        });
                    }
                };
            }]).service('cargar', ["$http", "$q", function ($http, $q)
    {
        this.foto = function (file, idEquipo)
        {
            var deferred = $q.defer();
            var im = new FormData();
            im.append("file", file);

            return $http.post("./php/insertarImg.php?id=" + idEquipo, im, {
                headers: {
                    "Content-type": undefined
                },
                transformRequest: angular.identity
            })
                    .success(function (res)
                    {
                        deferred.resolve(res);
                    })
                    .error(function (msg, code)
                    {
                        deferred.reject(msg);
                    });
            return deferred.promise;
        };

    }]);





