angular.module("toDo", [])
    .controller("toDoController", function ($scope) {
        $scope.tasca = "Afegir nova tasca";
        $scope.tasques = JSON.parse(sessionStorage.getItem("tasques")) || [];
        $scope.tasquesFetes = JSON.parse(sessionStorage.getItem("tasquesFetes")) || [];

        $scope.newTask = function () {
            if (!$scope.isTascaRepetida($scope.tasca)) $scope.tasques.push($scope.tasca)
            else alert("Aquesta tasca ja esta declarada!");
        }

        $scope.marcar = function (tascaFeta) {
            if ($scope.tasquesFetes.indexOf(tascaFeta) == -1) {
                $scope.tasquesFetes.push(tascaFeta);
            } else {
                $scope.tasquesFetes.splice($scope.tasquesFetes.indexOf(tascaFeta), 1);
            }
        }

        $scope.eliminar = function (tascaEliminar) {
            $scope.tasques.splice($scope.tasques.indexOf(tascaEliminar), 1);
        }

        $scope.eliminarTotFet = function () {
            for (tascaFeta of $scope.tasquesFetes) {
                $scope.tasques.splice($scope.tasques.indexOf(tascaFeta), 1);
            }
            $scope.tasquesFetes = [];
        }

        $scope.isTascaRepetida = function (tasca) {
            if (($scope.tasques).indexOf(tasca) > -1) return true
            else return false;
        }

        $scope.$watchCollection("tasques", function () {
            sessionStorage.setItem("tasques", JSON.stringify($scope.tasques));
        })

        $scope.$watchCollection("tasquesFetes", function () {
            sessionStorage.setItem("tasquesFetes", JSON.stringify($scope.tasquesFetes));
        })

        $scope.isChecked = function (tasca) {
            if ($scope.tasquesFetes.indexOf(tasca) >= 0){
                return true
            } else{
                return false;
            }
        };
    });
