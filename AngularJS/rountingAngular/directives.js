//hem de fer una trucada al modul i no declarar-lo
//ja uqe hem fet aixo en app.js
angular.module("application")

    //directiva que ens mostra la imatgve rodona
    //es fa per estalviar teclejar codi repetitivament
    .directive("imatgeRodona", function () {
        return function (scope, element, attrs) {
            attrs.$observe("imatgeRodona", function (value) {
                element.css({
                    "background": `url(${value})`,
                    "width": "100px",
                    "height": "100px",
                    "background-position": "center",
                    "background-size": "cover",
                    "border-radius": "50%",
                    "border": "1px royalblue solid"
                });
            })
        }
    })

    //directiva per cercar reposityories en la pagina
    .directive("search", function () {
        return function (scope, element, attrs) {
            //observa constantmet els posbiles canvis que es poden realitzar
            //en el cercador
            scope.$watch(attrs.ngModel, function (value) {
                scope.cercar = value;
                //cerquem coincidencies
                scope.misReposCoincidencia = [];
                for (miRepo of scope.misRepos) {
                    if ((miRepo.toLowerCase()).indexOf(value) != -1) {
                        scope.misReposCoincidencia.push(miRepo);
                    }
                }
                //si la paraula que cerquem esta buida, no mostrem les possibles opcions
                if (value == "") scope.misReposCoincidencia = [];
            })
        }
    })
    