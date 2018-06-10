angular.module("application")
    .service('notes', function () {
        var notes =  JSON.parse(sessionStorage.getItem("notes")) || [];
        function desarNotesSessionStorage(){
            sessionStorage.setItem('notes', JSON.stringify(notes));
        }
        return {
            todesNotes: function () {
                return notes;
            },

            afegirNota: function (value) {
                notes.push(value);
                desarNotesSessionStorage();
            },

            actualitzarNota: function (value) {
                for (index in notes) {
                    if (notes[index].titol == value.notaOriginal) {
                        notes[index].titol = value.titol;
                        notes[index].nota = value.nota;
                        notes[index].quan = value.quan;
                    }
                }
                desarNotesSessionStorage();
            },

            eliminarNota: function (value) {
                for (index in notes) {
                    if (notes[index].titol == value.titol) {
                        notes.splice(index, 1);
                        break;
                    }
                }
                desarNotesSessionStorage();
            },

            isTitolRepetit: function (value) {
                var coincidencia = false;
                for (index in notes) {
                    if (notes[index].titol == value) {
                        coincidencia = true;
                        break;
                    }
                }
                if (coincidencia) return true
                else return false;
            }
        };
    });