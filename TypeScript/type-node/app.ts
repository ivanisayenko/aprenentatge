import express from 'express';
//import nombreClasse, from ruta del fitxer
import { Banco } from './clases/Banco';

class App {
    // ref to Express instance
    public express: express.Application;
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.routes();
    }

    // Configure API endpoints.
    private routes(): void {
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);

        router.get("/proba", (req, res, next) => {
            var banco = new Banco("LaCaixa", "Sabadell");
            res.send(
                "<h1>Benvingut al banc " + banco.getNombre() + "</h1>"
            );
        });
        this.express.use('/proba', router);
    }
}
export default new App().express;