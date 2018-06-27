<%-- 
    Document   : modificarDades
    Created on : 26-jun-2018, 12:49:00
    Author     : ivani
--%>

<%@page import="model.Usuari"%>
<%@page import="model.ConexioMongo"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Actualitzar dades</title>
        <link rel="stylesheet" type="text/css" href="../resources/estil.css">
    </head>
    <body>
        <%
            ConexioMongo conexio = new ConexioMongo();
            Usuari user = conexio.getUser(session.getAttribute("usuari").toString());
        %>
        <h2>Usuari: <b><spam id="nomUsuari"></spam></b></h2>
        <h2>Actualitza o modifica les teves dades</h2>
        <div class="nav">
            <div class="botons">
                <a class="boto" href="../iniciUsuari.jsp">Tornar a perfil</a>
            </div>
        </div>
        <form class="modificarDades" action="../ModificarDades" method="post">
            <input type="text" id="nom" name="nom" placeholder="nom" value=<%=user.getNom()%>><br>
            <input type="text" id="cognom" name="cognom" placeholder="cognom" value=<%=user.getCognom()%>><br>
            <input type="text" id="edat" name="edat" placeholder="edat" value=<%=user.getEdat()%>><br>
            <input type="submit" value="actualitzar">
        </form>
    </body>
    <script type="text/javascript" src="../resources/sessionStorage.js"></script>
</html>
