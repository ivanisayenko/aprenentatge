<%-- 
    Document   : index
    Created on : 21-jun-2018, 17:54:50
    Author     : ivani
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <form name="iniciSessio" action="useBean.jsp" method="post">
            <h1 class="titol">Introdueix les teves dades:</h1>
            <input type="text" name="nom" placeholder="El teu nom" required/><br>
            <input type="number" name="edad" placeholder="La teva edad" required /><br>
            <input type="submit" value="Desar" />
        </form>
    </body>
</html>
