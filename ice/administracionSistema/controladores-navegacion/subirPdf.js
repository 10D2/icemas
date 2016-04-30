app.controller('subirPdfCtrl', ['$scope', '$routeParams', '$http', 'subir', function ($scope, $routeParams, $http, subir) {

        var codigo = $routeParams.idServicio;
        $scope.actualizar = false;

        $scope.subirPdf = function (idServicio) {
            var name = JSON.stringify(idServicio);
            var file = $scope.file;
            subir.archivo(file, codigo);

        };

        $scope.docPdf = {};


//        $scope.visualizar = function (codigo) {
            $http.get('./php/getDocumentoPdf.php?c=' + codigo).success(function (data) {
                alert(data);

                $scope.docPdf = data;
            });
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
            }]).service('subir', ["$http", "$q", function ($http, $q)
    {
        this.archivo = function (file, idServicio)
        {
            var deferred = $q.defer();
            var pdf = new FormData();
            pdf.append("file", file);

            return $http.post("./php/insertarPdf.php?id=" + idServicio, pdf, {
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





