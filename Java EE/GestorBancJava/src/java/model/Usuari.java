package model;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author ivani
 */
public class Usuari {

    static int numRegistrats = 0;
    protected String nom;
    protected String cognom;
    protected String usuari;
    protected int contrasenya;
    protected int edat;
    protected String rol = "usuari";

    public Usuari(String nom, String cognom, String usuari, int contrasenya, int edat) {
        this.nom = nom;
        this.cognom = cognom;
        this.usuari = usuari;
        this.contrasenya = contrasenya;
        this.edat = edat;
        this.numRegistrats++;
    }
    
    public Usuari(String nom, String cognom, String usuari, int contrasenya, int edat, String rol) {
        this.nom = nom;
        this.cognom = cognom;
        this.usuari = usuari;
        this.contrasenya = contrasenya;
        this.edat = edat;
        this.rol = rol;
        this.numRegistrats++;
    }

    public Usuari(String usuari, int contrasenya) {
        this.usuari = usuari;
        this.contrasenya = contrasenya;
    }

    public String getRol() {
        return this.rol;
    }

    public void ferAdministrador() {
        this.rol = "administrador";
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

    public String getUsuari() {
        return usuari;
    }

    public void setUsuari(String usuari) {
        this.usuari = usuari;
    }

    public int getContrasenya() {
        return contrasenya;
    }

    public void setContrasenya(int contrasenya) {
        this.contrasenya = contrasenya;
    }

    public int getEdat() {
        return edat;
    }

    public void setEdat(int edat) {
        this.edat = edat;
    }

    public static int getNumRegistrats() {
        return numRegistrats;
    }

    public static void setNumRegistrats(int numRegistrats) {
        Usuari.numRegistrats = numRegistrats;
    }

}
