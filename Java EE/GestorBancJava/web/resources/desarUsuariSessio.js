/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = () => {
    function desarUsuari() {
        var usuari = document.getElementsByName("usuari")[0].value;
        var contr = document.getElementsByName("contrasenya")[0].value;
        var user = {
            nom: usuari,
            contr: contr
        };
        //desem en sessionStorage
        sessionStorage.setItem('user', JSON.stringify(user));
    }


    document.getElementById("iniciar").addEventListener("click", desarUsuari);
}


