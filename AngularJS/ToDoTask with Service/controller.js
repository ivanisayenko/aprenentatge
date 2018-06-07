angular.module("toDo", [])

    .factory("toDoServiceFactory", function () {
        var toDoService = {};
        toDoService.tasques = JSON.parse(sessionStorage.getItem("tasques")) || [];
        toDoService.tasquesFetes = JSON.parse(sessionStorage.getItem("tasquesFetes")) || [];

        //nova tasca
        toDoService.newTask = function (task) {
            console.log(toDoService.tasques);
            if (!toDoService.isTascaRepetida(task)) {
                toDoService.tasques.push(task)
            } else {
                alert("Aquesta tasca ja esta declarada!");
            }
            toDoService.actualitzarTasques();
            console.log(toDoService.tasques);
        }

        //mirem si la tasca es repetida
        toDoService.isTascaRepetida = function (tasca) {
            if ((toDoService.tasques).indexOf(tasca) > -1) return true
            else return false;
        }

        //eliminem tasca
        toDoService.eliminar = function (tascaEliminar) {
            toDoService.tasques.splice(toDoService.tasques.indexOf(tascaEliminar), 1);
            toDoService.actualitzarTasques();
        }

        //marcar tasca per eliminar
        toDoService.marcar = function (tascaFeta) {
            if (toDoService.tasquesFetes.indexOf(tascaFeta) == -1) {
                toDoService.tasquesFetes.push(tascaFeta);
            } else {
                toDoService.tasquesFetes.splice(toDoService.tasquesFetes.indexOf(tascaFeta), 1);
            }
            toDoService.actualitzarTasquesFetes();
        }

        //eliminar totes les tasques marcades
        toDoService.eliminarTotFet = function () {
            for (tascaFeta of toDoService.tasquesFetes) {
                toDoService.tasques.splice(toDoService.tasques.indexOf(tascaFeta), 1);
            }
            toDoService.tasquesFetes = [];
            toDoService.actualitzarTasques();
        }

        //actualitzem sesionStorage de les tasques
        toDoService.actualitzarTasques = function () {
            sessionStorage.setItem("tasques", JSON.stringify(toDoService.tasques));
        }

        //actualitzem sessionStorage de les tasques fetes
        toDoService.actualitzarTasquesFetes = function () {
            sessionStorage.setItem("tasquesFetes", JSON.stringify(toDoService.tasquesFetes));
        }

        //comproba si la tasca esta marcada
        toDoService.isChecked = function (tasca) {
            if (toDoService.tasquesFetes.indexOf(tasca) >= 0) {
                return true
            } else {
                return false;
            }
        };

        toDoService.getTasques = function () {
            return toDoService.tasques;
        }
        //retornem objecte creat
        return toDoService;
    })

    .controller("toDoController", function ($scope, toDoServiceFactory) {
        $scope.tasca = "crea una tasca nova";
        $scope.tasques = toDoServiceFactory.getTasques();
        $scope.newTask = function () {
            toDoServiceFactory.newTask($scope.tasca);
            // $scope.tasques = ToDoService.getTasques();
        }
        $scope.eliminarTotFet = function () {
            toDoServiceFactory.eliminarTotFet();
        }
        $scope.isChecked = function (task) {
            return toDoServiceFactory.isChecked(task);
        }
        $scope.marcar = function (task) {
            toDoServiceFactory.marcar(task);
        }
        $scope.eliminar = function (task) {
            toDoServiceFactory.eliminar(task);
        }

    });
