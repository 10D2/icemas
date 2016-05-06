app.controller('subirImgCtrl', ['$scope', '$routeParams', '$http', 'subirImg', function ($scope, $routeParams, $http, subirImg) {


        var codigo = $routeParams.idEquipo;
        $scope.actualizar = false;

        $scope.subirImagen = function (idEquipo) {
            var name = JSON.stringify(idEquipo);
            var file = $scope.file;
            subirImg.archivo(file, codigo);

            $scope.actualiza = true;
            swal("Excelente!", "Archivo guardado!", "success");
            
            return window.location.href = "#/equipos";

        };

        $scope.docImg = {};


//        $scope.visualizar = function (codigo) {
        $http.get('./php/getDocumentoPdf.php?c=' + codigo).success(function (data) {


            $scope.docImg = data;
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
            }]).service('subirImg', ["$http", "$q", function ($http, $q)
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





