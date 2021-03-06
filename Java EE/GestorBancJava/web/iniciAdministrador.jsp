<%-- 
    Document   : iniciAdministrador
    Created on : 25-jun-2018, 16:11:08
    Author     : ivani
--%>

<%@page import="model.Usuari"%>
<%@page import="model.ConexioMongo"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="resources/estil.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <title>Administrador</title>
    </head>
    <body>
        <div class="nav">
            <h1>S'ha iniciat la sessió correctament!</h1>
            <h2>Benvingut administrador <b><spam id="nomUsuari"></spam></b></h2>
            <div class="botons">
                <a class="boto" href="iniciar.jsp">Iniciar Sessió</a>
                <a class="boto" href="registrar.jsp">Registra-se</a>
                <a class="boto" href="http://localhost:8080/GestorBancJava/">Inici</a>
                <a id="sortir" class="boto" href="http://localhost:8080/GestorBancJava/">Sortir</a>
            </div>
        </div>
        <div class="main">
            <div>
                <h3>Usuaris Registrats:</h3>
                <%
                    ConexioMongo conexio = new ConexioMongo();
                    for (Usuari u : conexio.getAllUsers()) {
                        if (!u.getUsuari().equals(session.getAttribute("usuari").toString())) {
                %>
                <div class="usuari">
                    <h2><%=u.getUsuari()%></h2>
                    <div><b>Nom:</b> <spam><%=u.getNom()%></spam></div>
                    <div><b>Cognom:</b> <spam><%=u.getCognom()%></spam></div>
                    <div><b>Edat:</b> <spam><%=u.getEdat()%></spam></div>
                    <div><b>Rol:</b> <spam><%=u.getRol()%></spam></div>
                    <input id="<%=u.getUsuari()%>" type="button" value="donar de baixa" name="donarBaixa">
                </div>
                <%
                        }
                    }
                %>
            </div>
        </div> 
        <script src="resources/sessionStorage.js"></script>
        <script src="resources/eliminarUsuari.js"></script>
    </body>
</html>

