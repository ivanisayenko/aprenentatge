/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

/**
 *
 * @author ivani
 */
public class Moviment {

    protected String descripcio;
    protected String dia;
    protected String tipus;
    protected int quantitat;

    public Moviment(String descripcio, String dia, String tipus, int quantitat) {
        this.descripcio = descripcio;
        this.dia = dia;
        this.tipus = tipus;
        this.quantitat = quantitat;
    }

    public String getDescripcio() {
        return descripcio;
    }

    public void setDescripcio(String descripcio) {
        this.descripcio = descripcio;
    }

    public String getDia() {
        return dia;
    }

    public void setDia(String dia) {
        this.dia = dia;
    }

    public String getTipus() {
        return tipus;
    }

    public void setTipus(String tipus) {
        this.tipus = tipus;
    }

    public int getQuantitat() {
        return quantitat;
    }

    public void setQuantitat(int quantitat) {
        this.quantitat = quantitat;
    }

}
