const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const db = "mongodb://ivanisayenko:ivanisayenko1@ds235732.mlab.com:35732/autentificacio";
const User = require("../modules/user");
const jwt = require("jsonwebtoken");

mongoose.connect(db, err => {
    if (err) {
        console.log("error " + err);
    } else {
        console.log(" + S'ha connectat a la base de dades correctament");
    }
});

router.get("/", (req, res) => {
    res.send("From api route")
});

router.post("/registrar", (req, res) => {
    console.log(" - registrant un usuari");
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log("error " + error);
            console.log(" - registre incorrecte");
        } else {
            console.log(" - registre correcte");
            let payload = { subject: registeredUser._id };
            let token = jwt.sign(payload, "clau");
            res.status(200).send({ token });
        }
    });
});

router.post("/iniciar", (req, res) => {
    console.log(" - iniciant sessio");
    let userData = req.body;
    User.findOne({
        usuari: userData.usuari
    },
        (err, user) => {
            if (err) {
                console.log();
            } else {
                if (!user) {
                    res.status(401).send("Usuari o Contrasenya incorrecte");
                    console.log(" - inici incorrecte (usuari)");
                } else if (user.contrasenya !== userData.contrasenya) {
                    console.log(" - inici incorrecte (contrasenya)");
                    res.status(401).send("Usuari o Contrasenya incorrecte");
                } else {
                    console.log(" - inici correcte");
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, "clau");
                    res.status(200).send({ token });
                }
            }

        }
    );
});

router.get('/events', (req, res) => {
    let events = [
        {
            "id": "1",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "2",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "3",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "4",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "5",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "6",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        }
    ];
    res.json(events);
})

router.get('/especial', (req, res) => {
    let events = [
        {
            "id": "1",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "2",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "3",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "4",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "5",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        },
        {
            "id": "6",
            "nom": "nom",
            "descripcio": "descripcio",
            "data": "2018"
        }
    ];
    res.json(events);
})

module.exports = router;

function verificarToken(req, res, next) {
    if (!req.headers.autorization) {
        return res.status(401).send("Inicia la teva sessió");
    }
    let token = rreq.headers.autorization.split(' ')[1];
    if (token === "null"){
        return res.status(401).send("Inicia la teva sessió")
    }
    let payload = jwt.verify(token, "clau");
    if(!payload){
        return res.status(401).send("Inicia la teva sessió")
    }
    req.userId = payload.subject;
    next();
}
