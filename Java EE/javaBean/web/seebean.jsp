<%-- 
    Document   : seebean
    Created on : 22-jun-2018, 15:50:02
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
        <jsp:useBean id="mybean" class="bean.myBean" scope="session"></jsp:useBean>
        <jsp:getProperty name="mybean" property="name"></jsp:getProperty>
        <jsp:getProperty name="mybean" property="edad"></jsp:getProperty>
        <br>
        ${mybean.name}
        ${mybean.edad}
    </body>
</html>
