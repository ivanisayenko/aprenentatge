<%-- 
    Document   : registrar
    Created on : 22-jun-2018, 17:17:16
    Author     : ivani
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" type="text/css" href="resources/estil.css">
    </head>
    <body>
        <div class="nav">
            <h1 class="titol">Registrat com a nou client</h1>
            <div class="botons">
                <a class="boto" href="/GestorBancJava">Inici</a>
            </div>
        </div>
        <div class="main">
            <form action="RegistrarUsuari" method="post" name="registrarUsuari">
                <input type="text" name="usuari" placeholder="usuari" required>
                <br>
                <input type="number" name="contrasenya" placeholder="contrasenya" required>
                <br>
                <input type="text" name="nom" placeholder="nom" required>
                <br>
                <input type="text" name="cognom" placeholder="cognom" required>
                <br>
                <input type="number" name="edat" placeholder="edat" required>
                <br>
                <input type="submit" value="Registrat">
            </form>
            <p style="text-align: center">Si ja tens un compte creat, pots <a href="iniciar.jsp">iniciar la teva sessió</a></p>
        </div>
    </body>

</html>
