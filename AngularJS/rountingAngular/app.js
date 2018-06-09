angular.module("application", ["ngRoute"])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "controller",
                templateUrl: "paginas/routeAngular.html"
            })
            .when("/repo/:nomRepo/:name", {
                controller: "newController",
                templateUrl: "paginas/newPage.html"
            })
    })
