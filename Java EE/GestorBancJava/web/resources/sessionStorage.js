/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = () => {
    var nomUsuari;
    try {
        nomUsuari = JSON.parse(sessionStorage.user);
        document.getElementById("nomUsuari").innerHTML = nomUsuari.nom;
    } catch (error) {
        nomUsuari = null;
        alert("Inicia la teva sessió");
        window.location.replace("iniciar.jsp");
    }
    document.getElementById("sortir").addEventListener("click", function (e) {
        sessionStorage.removeItem('user');
    });
}


