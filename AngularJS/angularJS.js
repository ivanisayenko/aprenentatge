
    //declarem l'aplicació sobre que treballarem
    var app = angular.module('myApp', []);

    //li indiquem el controlador de l'aplicació
    app.controller('myCtrl', function ($scope, numeroRandom) {
        //es poden declarar variebles necessaries mitjançant $scope.variable
        $scope.color = "tomato";
        $scope.nombres = [1, 2, 3, 123, 43];
        // ---
        //els serveis
        $scope.numeroRandom = numeroRandom.random(10, 0);
        // ---
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.cambiarResultado = function(){
            $scope.firstName = "El numero radnom es: " + $scope.numeroRandom;
            $scope.lastName = "";
        }
    });

    //les directives
    app.directive("mensajeSimple", function() {
        return {
            template : "<h1>Això es una directiva simple!</h1>"
        };
    });

    //els servies personalitzats
    app.service('numeroRandom', function() {
        this.random = function (min, max) {
            return parseInt(Math.random() * ((max + 1) - min) + min);
        }
    });
    app.service('parInpar', function() {
        this.par = function (num) {
            if(num % 2 == 0){
                return num;
            }
            return "inpar";
        }
    });

    //els filtres
    app.filter("esPar", ["parInpar", function(parInpar){
        return function(x){
            return parInpar.par(x);
        };
    }]);

