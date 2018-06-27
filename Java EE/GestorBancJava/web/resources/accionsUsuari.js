/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function(){
    document.getElementById("ingresar").addEventListener("click", function(event){
       window.location.replace("http://localhost:8080/GestorBancJava/accionsUsuari/ingresarDiners.jsp"); 
    });
    document.getElementById("retirar").addEventListener("click", function(event){
       window.location.replace("http://localhost:8080/GestorBancJava/accionsUsuari/retirarDiners.jsp"); 
    });
    document.getElementById("pagar").addEventListener("click", function(event){
       window.location.replace("http://localhost:8080/GestorBancJava/accionsUsuari/pagament.jsp"); 
    });
    document.getElementById("modificar").addEventListener("click", function(event){
       window.location.replace("http://localhost:8080/GestorBancJava/accionsUsuari/modificarDades.jsp"); 
    });
}

