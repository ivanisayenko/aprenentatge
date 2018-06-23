<%-- 
    Document   : iniciar
    Created on : 22-jun-2018, 17:08:58
    Author     : ivani
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Inicia Sessio</title>
        <link rel="stylesheet" type="text/css" href="resources/estil.css">
        <script src="resources/desarUsuariSessio.js"></script>
    </head>
    <body>
        <div class="nav">
            <h1 class="titol">Inicia la teva sessió</h1>
            <div class="botons">
                <a class="boto" href="/GestorBancJava">Inici</a>
            </div>
        </div>
        <div class="main">
            <form action="ValidarUsuari" method="post" name="iniciarSessio">
                <input type="text" name="usuari" placeholder="usuari" required>
                <br>
                <input type="number" name="contrasenya" placeholder="contrasenya" required>
                <br>
                <input id="iniciar" type="submit" value="Iniciar">

            </form>
            <p style="text-align: center">Si no tens un compte creat, pots <a href="registrar.jsp">registra-te</a> completament gratuit</p>
        </div>
    </body>
</html>
