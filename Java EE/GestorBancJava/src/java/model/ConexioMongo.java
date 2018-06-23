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
import java.util.Arrays;

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
            query.put("contr", nouUsuari.getContrasenya());
            objecte = collection.find(query);
        }
        if (objecte.count() > 0) {
            existent = true;
        }
        return existent;
    }

    public void usuariNou(Usuari user) throws UnknownHostException {
        DBCollection collection = conexioMongo("gestorBanc", "usuaris");
        BasicDBObject nouUsuari = new BasicDBObject();
        nouUsuari.put("nick", user.getUsuari());
        nouUsuari.put("conr", user.getContrasenya());
        nouUsuari.put("nom", user.getNom());
        nouUsuari.put("cognom", user.getCognom());
        nouUsuari.put("edat", user.getEdat());
        collection.insert(nouUsuari);
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
}
