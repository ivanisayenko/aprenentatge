angular.module("application")

    .controller("veureNotes", function ($scope, notes) {
        $scope.todesNotes = notes.todesNotes();

        $scope.eliminarNota = function (nota) {
            notes.eliminarNota(nota);
        }
    })

    .controller("afegirNotes", function ($scope, notes) {
        $scope.novaNota = {};
        $scope.titol = null;
        $scope.descripcio = null;
        $scope.quan = null;

        $scope.afegirNota = function () {
            if (!notes.isTitolRepetit($scope.titol)) {
                $scope.novaNota.titol = $scope.titol;
                $scope.novaNota.nota = $scope.descripcio;
                $scope.novaNota.quan = $scope.quan;
                notes.afegirNota($scope.novaNota);
                $scope.reiniciarVariables();
            } else {
                alert("Canvia de titol, aquest ja esta agafat");
            }
        }

        $scope.reiniciarVariables = function () {
            $scope.descripcio = null;
            $scope.quan = null;
            $scope.titol = null
            $scope.novaNota = {};
        }
    })

    .controller("actualitzarNotes", function ($scope, notes, $routeParams) {
        $scope.notes = notes.todesNotes();

        $scope.trobarNotaModificar = function () {
            for (index in $scope.notes) {
                if ($scope.notes[index].titol == $routeParams.titol) {
                    $scope.titol = $routeParams.titol;
                    $scope.descripcio = $scope.notes[index].nota;
                    $scope.quan = $scope.notes[index].quan;
                    break;
                }
            }
        }
        $scope.actualitzarNota = function () {
            if (!notes.isTitolRepetit($scope.titol)) {
                notes.actualitzarNota({
                    "titol": $scope.titol,
                    "nota": $scope.descripcio,
                    "quan": $scope.quan,
                    "notaOriginal": $routeParams.titol
                })
            }else{
                alert("Aquest titol ja es utilitzat!");
            }
        }
        $scope.trobarNotaModificar();
    })
