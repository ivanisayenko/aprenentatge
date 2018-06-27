<%-- 
    Document   : pagament
    Created on : 26-jun-2018, 12:48:47
    Author     : ivani
--%>

<%@page import="java.util.List"%>
<%@page import="model.ConexioMongo"%>
<%@page import="model.Moviment"%>
<%@page import="model.Moviment"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Fer un pagament</title>
        <link rel="stylesheet" type="text/css" href="../resources/estil.css">
    </head>
    <body>
        <div class="nav">
            <h2>Usuari: <b><spam id="nomUsuari"></spam></b></h2>
            <div class="botons">
                <a class="boto" href="../iniciUsuari.jsp">Tornar a perfil</a>
            </div>
        </div>
        <div class="main" style="margin: auto">
            <div id="ingresarDiners">
                <%
                    ConexioMongo conexio = new ConexioMongo();
                %>
                <h2>Actualment en el compte tens: <span id="dinersCompte">
                        <%=conexio.getQuantitat(session.getAttribute("usuari").toString())%>
                    </span>€</h2>
                <form action="../Pagament" method="post" name="actualitzarCompte">
                    <input name="quantitat" type="number" placeholder="ingresa cuantitat de pagament"><br>
                    <input name="rao" type="text" placeholder="ingresa la rao del pagament"><br>
                    <input type="submit" value="pagar">
                </form>
            </div>
            <div class="ultimsMoviments">
                <h2>Els teus ultims moviments</h2>
                <table class="moviments">
                    <%
                        List<Moviment> moviments = conexio.getMoviments(session.getAttribute("usuari").toString());
                        for (Moviment m : moviments) {
                    %>
                    <tr class="moviment">
                        <td class="descripcio"><%=m.getDescripcio()%></td>
                        <td class="data"><%=m.getDia()%></td>
                        <td class="tipus"><%=m.getTipus()%>
                            <%=m.getQuantitat()%>€</td>
                    </tr>
                    <%
                        }
                    %>
                </table>
            </div>
        </div> 
    </body>
    <script type="text/javascript" src="../resources/sessionStorage.js"></script>
</html>
