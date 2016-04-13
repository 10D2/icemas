var app = angular.module('icemasApp.mensajes', []);

app.factory('Mensajes', ['$http', '$q', function ($http, $q) {

        var self = {
            mensajes: [
                {
                    "img": 'dist/img/user2-160x160.jpg',
                    "nombre": "Juan Carlos",
                    "mensaje": 'Bienvenido',
                    "fecha": '05-Marzo'
                },{
                    img: 'dist/img/user2-160x160.jpg',
                    nombre: "Pedro",
                    mensaje: 'Bienvenido',
                    fecha: '08-Marzo'
                },{
                    img: 'dist/img/user2-160x160.jpg',
                    nombre: "Pablo",
                    mensaje: 'Bienvenido',
                    fecha: '15-Abril'
                }
            ]
        };
        return self;

    }]);