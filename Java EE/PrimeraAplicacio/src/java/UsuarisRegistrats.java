/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author ivani
 */
public class UsuarisRegistrats {

    private String nick;
    private String contr;
    private String nom;
    private String cognom;
    private String rol;

    public UsuarisRegistrats(String nick, String contr, String nom, String cognom, String rol) {
        this.nick = nick;
        this.contr = contr;
        this.nom = nom;
        this.cognom = cognom;
        this.rol = rol;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getContr() {
        return contr;
    }

    public void setContr(String contr) {
        this.contr = contr;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getCognom() {
        return cognom;
    }

    public void setCognom(String cognom) {
        this.cognom = cognom;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

}
