"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import nombreClasse, from ruta del fitxer
var Banco_1 = require("./clases/Banco");
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express_1.default();
        this.routes();
    }
    // Configure API endpoints.
    App.prototype.routes = function () {
        var router = express_1.default.Router();
        // placeholder route handler
        router.get('/', function (req, res, next) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
        router.get("/proba", function (req, res, next) {
            var banco = new Banco_1.Banco("LaCAixa", "Sabadell");
            res.send("<h1>Benvingut al banc " + banco.getNombre() + "</h1>");
        });
        this.express.use('/proba', router);
    };
    return App;
}());
exports.default = new App().express;
