<%-- 
    Document   : iniciCorrecte
    Created on : 22-jun-2018, 18:15:15
    Author     : ivani
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="resources/estil.css">
        <title>Tot correcte</title>
    </head>
    <body>
        <div class="nav">
            <h1>S'ha iniciat la sessió correctament!</h1>
            <h2>Benvingut usuari <b><spam id="nomUsuari"></spam></b></h2>
            <div class="botons">
                <a class="boto" href="iniciar.jsp">Iniciar Sessió</a>
                <a class="boto" href="registrar.jsp">Registra-se</a>
                <a class="boto" href="http://localhost:8080/GestorBancJava/">Inici</a>
                <a id="sortir" class="boto" href="http://localhost:8080/GestorBancJava/">Sortir</a>
            </div>
        </div>
        <div class="main" style="margin: auto">
            <div id="ingresar" class="botoUsuari GOLD">Ingresar Diners</div>
            <div id="retirar" class="botoUsuari PERU">Retirar Diners</div>
            <div id="pagar" class="botoUsuari SALMON">Fer Pagament</div>
            <div id="modificar" class="botoUsuari TOMATO">Modificar dades</div>
        </div> 
    </body>
    <script type="text/javascript" src="resources/sessionStorage.js"></script>
    <script type="text/javascript" src="resources/accionsUsuari.js"></script>
</html>
