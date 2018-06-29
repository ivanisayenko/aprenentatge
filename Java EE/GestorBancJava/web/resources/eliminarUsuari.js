/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var elementos = document.querySelectorAll('[name="donarBaixa"]');
for(var i = 0; i < elementos.length; i ++){
    elementos[i].addEventListener("click", function(){
        eliminarUsuari(this.id);
    })
}

function eliminarUsuari(usuari) {
    $.ajax({
        url: 'BaixaUsuari',
        data: {
            usuari: usuari
        },
        success: function (responseText) {
            window.location.replace("iniciAdministrador.jsp");
        }
    });
}


