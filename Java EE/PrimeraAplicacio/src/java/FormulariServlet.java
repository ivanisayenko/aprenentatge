
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author ivani
 */
@WebServlet(name = "otroServlet", urlPatterns = "/formulari")
public class FormulariServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        //variables del formulari
        String nick = request.getParameter("nick");
        String contrasenya = request.getParameter("contra");
        
        
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
//            out.println(" <link rel=\"stylesheet\" type=\"text/css\" href=\"servlet.css\">");
            out.println("<title>Servlet nou</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Usuari: "+ nick +"</h1>");
            out.println("<h1>Contrasenya: "+ contrasenya +"</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        //variables del formulari
        String nick = request.getParameter("nick");
        String contrasenya = request.getParameter("contra");
        
        
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
//            out.println(" <link rel=\"stylesheet\" type=\"text/css\" href=\"servlet.css\">");
            out.println("<title>Servlet nou</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>No has iniciat sessio</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }
}
