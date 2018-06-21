<%-- 
    Document   : newjsp
    Created on : 21-jun-2018, 16:12:54
    Author     : ivani
--%>
<%@taglib  prefix="c" uri="http://java.sun.com/jstl/core"%>
<%@taglib  prefix="x" uri="http://java.sun.com/jstl/xml"%>
<%@taglib  prefix="fmt" uri="http://java.sun.com/jstl/fmt"%>
<%@taglib  prefix="sql" uri="http://java.sun.com/jstl/sql"%>


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="classes.Proba" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <script>alert("hola")</script>
        <%
            String user = request.getParameter("user");
            if (user != null) {
                out.print(user);
            }
        %>
        <br><br><div>Expression lenguage</div>
        ${param.user}
        <form name="iniciSessio" action="iniciSessio.jsp" method="post">
            <h1 class="titol">Introdueix les teves dades:</h1>
            <input type="text" name="nick" placeholder="nick" required/><br>
            <input type="password" name="contra" placeholder="contrasenya" required /><br>
            <input type="submit" value="Iniciar" />
        </form>
        <a href="jspx.jspx">JSPX</a>
    </body>
</html>
