/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;
//import com.mongodb.MongoClient;
//import com.mongodb.MongoClientURI;
//import com.mongodb.ServerAddress;
//import com.mongodb.MongoCredential;
//import com.mongodb.MongoClientOptions;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.lang.Iterable;
import java.util.Set;

/**
 *
 * @author ivani
 */
public class ConexioMongo {

    public boolean usuariExistent(boolean registrar, Usuari nouUsuari) throws UnknownHostException {
        boolean existent = false;
        DBCollection collection = conexioMongo("gestorBanc", "usuaris");
        DBCursor objecte = null;
        //si registrem a una persona, verificarem que el nick no es repeteixi,
        //no ens importa la contrasenya
        if (registrar) {
            BasicDBObject query = new BasicDBObject();
            query.put("nick", nouUsuari.getUsuari());
            objecte = collection.find(query);
        } else if (!registrar) {
            BasicDBObject query = new BasicDBObject();
            query.put("nick", nouUsuari.getUsuari());
            query.put("conr", nouUsuari.getContrasenya());
            objecte = collection.find(query);
        }
        if (objecte.count() > 0) {
            existent = true;
        }
        return existent;
    }

    public boolean isUsuariAdmin(Usuari usuari) throws UnknownHostException {
        boolean isAdministrador = false;
        DBCollection collection = conexioMongo("gestorBanc", "usuaris");
        DBCursor objecte = null;
        DBObject o = null;
        BasicDBObject query = new BasicDBObject();
        query.put("nick", usuari.getUsuari());
        objecte = collection.find(query);
        while (objecte.hasNext()) {
            o = objecte.next();
        }
        if (o.get("rol").equals("administrador")) {
            isAdministrador = true;
        }
        return isAdministrador;
    }

    public void usuariNou(Usuari user) throws UnknownHostException {
        DBCollection collection = conexioMongo("gestorBanc", "usuaris");
        BasicDBObject nouUsuari = new BasicDBObject();
        nouUsuari.put("nick", user.getUsuari());
        nouUsuari.put("conr", user.getContrasenya());
        nouUsuari.put("nom", user.getNom());
        nouUsuari.put("cognom", user.getCognom());
        nouUsuari.put("edat", user.getEdat());
        nouUsuari.put("rol", user.getRol());
        collection.insert(nouUsuari);
        compteNou(user);
    }

    public Usuari[] getAllUsers() throws UnknownHostException {
        int cont = 0;
        DBCursor objecte = conexioMongo("gestorBanc", "usuaris").find();
        Usuari[] usuaris = new Usuari[objecte.count()];
        while (objecte.hasNext()) {
            DBObject o = objecte.next();
            usuaris[cont] = (new Usuari(
                    (String) o.get("nom"),
                    (String) o.get("cognom"),
                    (String) o.get("nick"),
                    (int) o.get("conr"),
                    (int) o.get("edat"),
                    (String) o.get("rol")
            ));
            cont++;
        }
        return usuaris;
    }

    //es fan conexions dem ongo al document i colecció indicat per parametres
    public DBCollection conexioMongo(String document, String colleccio) throws UnknownHostException {
        DBCollection collection = null;
        try {
            Mongo mongo = new Mongo("LocalHost", 27017);
            DB db = mongo.getDB(document);
            collection = db.getCollection(colleccio);

        } catch (Error e) {
            System.out.println(e);
        }
        return collection;
    }

    private String tosTring(String nom) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    private void compteNou(Usuari user) throws UnknownHostException {
        DBCollection compte = conexioMongo("gestorBanc", "compte");
        BasicDBObject usuari = new BasicDBObject();
        BasicDBObject diners = new BasicDBObject();
        BasicDBObject moviments = new BasicDBObject();

        usuari.put("user", user.getUsuari());
        diners.put("quantitat", 0);
        usuari.put("diners", diners);
        usuari.put("moviments", new BasicDBObject());

        compte.insert(usuari);
    }

    public int getQuantitat(String user) throws UnknownHostException {
        DBCollection compte = conexioMongo("gestorBanc", "compte");
        BasicDBObject usuari = new BasicDBObject();
        usuari.put("user", user);
        DBCursor objecte = compte.find(usuari);
        int quantitat = 0;
        while (objecte.hasNext()) {
            DBObject o = objecte.next();
            DBObject d = (DBObject) o.get("diners");
            quantitat = (int) d.get("quantitat");
        }
        return quantitat;
    }

    public List<Moviment> getMoviments(String user) throws UnknownHostException {
        DBCollection compte = conexioMongo("gestorBanc", "compte");
        BasicDBObject usuari = new BasicDBObject();
        List<Moviment> moviment = new ArrayList<Moviment>();

        usuari.put("user", user);
        DBCursor objecte = compte.find(usuari);
        while (objecte.hasNext()) {
            DBObject o = objecte.next();
            DBObject d = (DBObject) o.get("moviments");
            //agafem els valors dels moviment(0, 1, 2, 3..)
            Set<String> keys = d.keySet();
            for (String k : keys) {
                //agafem informacio dels valors
                DBObject Moviment = (DBObject) d.toMap().get(k);
                //finalment agafem informacio convertint l'objecte al map
                moviment.add(new Moviment(
                        (String) Moviment.toMap().get("descripcio"),
                        (String) Moviment.toMap().get("dia"),
                        (String) Moviment.toMap().get("tipus"),
                        (int) Moviment.toMap().get("quantitat")
                ));
            }
        }
        return moviment;
    }

    public void afegirMoviment(Moviment moviment, String user) throws UnknownHostException {
        DBCollection compte = conexioMongo("gestorBanc", "compte");
        BasicDBObject usuari = new BasicDBObject();
        BasicDBObject dadesMoviment = new BasicDBObject();

        dadesMoviment.put("descripcio", moviment.getDescripcio());
        dadesMoviment.put("dia", moviment.getDia());
        dadesMoviment.put("tipus", moviment.getTipus());
        dadesMoviment.put("quantitat", moviment.getQuantitat());

        usuari.put("user", user);

        BasicDBObject update = new BasicDBObject();
        update.put("$push", new BasicDBObject("moviments", dadesMoviment));

        compte.update(usuari, update, true, true);
    }

    public void sumarDiners(int suma, String user) throws UnknownHostException {
        //actualizar el documento 
        int dinersActual = getQuantitat(user);
        DBCollection compte = conexioMongo("gestorBanc", "compte");
        BasicDBObject usuari = new BasicDBObject();
        BasicDBObject quantitat = new BasicDBObject();
        BasicDBObject setQuery = new BasicDBObject();
        BasicDBObject searchQuery = new BasicDBObject();

        searchQuery.append("user", user);
        usuari.append("user", user);
        quantitat.append("quantitat", dinersActual + suma);
        usuari.append("diners", quantitat);
        setQuery.append("$set", usuari);

        //actualitzem el compte i afegim un moviment(suma de diners)
        compte.update(searchQuery, setQuery);
        afegirMoviment(new Moviment(
                "afegida diners compte",
                "26/06/2018",
                "+",
                suma
        ), user);
    }
}
