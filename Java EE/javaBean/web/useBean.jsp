<%-- 
    Document   : useBean
    Created on : 21-jun-2018, 18:10:06
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
        <h1>Hello World!</h1>
        <%
            String nom = request.getParameter("nom");
            int edat = Integer.parseInt(request.getParameter("edad"));
        %>
        <jsp:useBean id="mybean" class="bean.myBean" scope="session"/>
        <jsp:setProperty name="mybean" property="name" value="<%= nom %>"/>
        <jsp:setProperty name="mybean" property="edad" value="<%= edat %>"/>
    </body>
</html>
