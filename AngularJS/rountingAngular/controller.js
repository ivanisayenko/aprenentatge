//truquem al modul
angular.module("application")

    .controller("controller", function ($scope, $http) {
        $scope.misRepos = [];
        $scope.misReposCoincidencia = [];
        $scope.resultatAjax = [];
        $scope.cercar = null;
        $scope.ocultar = true;
        $scope.nomRepo = "ivanisayenko";
        $scope.$watch("nomRepo", function () {
            $scope.misRepos = [];
            $http.get("https://api.github.com/users/" + $scope.nomRepo + "/repos")
                .then(function (response) {
                    $scope.resultatAjax = response;
                    for (nombreRepo in $scope.resultatAjax.data) {
                        $scope.misRepos.push($scope.resultatAjax.data[nombreRepo].name);
                    }
                });
        })


        $scope.mostrarCercar = function () {
            $scope.ocultar = false;
        }

        $scope.ocultarCercar = function () {
            $scope.ocultar = true;
        }
    })

    .controller("newController", function ($scope, $http, $routeParams) {
        $scope.repo = {};
        $scope.nomRepo = $routeParams.name;
        $http.get("https://api.github.com/repos/" + $routeParams.nomRepo + "/" + $scope.nomRepo)
            .then(function (response) {
                $scope.repo = response;
                console.log($scope.repo);
            });
    })
    