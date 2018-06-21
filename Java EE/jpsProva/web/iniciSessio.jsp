<%-- 
    Document   : iniciSessio
    Created on : 21-jun-2018, 17:26:40
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
        <p>Usuari: <%=request.getParameter("nick")%></p>
        <p>Contrasenya <%=request.getParameter("contra")%></p>
    </body>
</html>
