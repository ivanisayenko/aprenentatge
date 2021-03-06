/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import model.Usuari;
import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.Integer.parseInt;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.ConexioMongo;

/**
 *
 * @author ivani
 */
@WebServlet(name = "RegistrarUsuari", urlPatterns = {"/RegistrarUsuari"})
public class RegistrarUsuari extends HttpServlet {

    ConexioMongo conexio = new ConexioMongo();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            Usuari nouUsusari = new Usuari(
                    request.getParameter("nom"),
                    request.getParameter("cognom"),
                    request.getParameter("usuari"),
                    parseInt(request.getParameter("contrasenya")),
                    parseInt(request.getParameter("edat"))
            );
            //verifiquem si l'usuri que es registra no es administrador
            if(request.getParameter("codi").equals("admin123")){
                nouUsusari.ferAdministrador();
            }
            
            //verifiquem que usuari no existeixi
            if (conexio.usuariExistent(true, nouUsusari)) {
                response.sendRedirect("registrar.jsp");
            } else {
                conexio.usuariNou(nouUsusari);
                response.sendRedirect("registreCorrecte.jsp");
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
