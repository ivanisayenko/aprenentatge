angular.module("application", ["ngRoute"])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "veureNotes",
                templateUrl: "paginas/veureNotes.html"
            })
            .when("/afegir", {
                controller: "afegirNotes",
                templateUrl: "paginas/afegirNota.html"
            })
            .when("/modificar/:titol", {
                controller: "actualitzarNotes",
                templateUrl: "paginas/modificarNota.html"
            })

    })
